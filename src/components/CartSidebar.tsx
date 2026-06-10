"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { cart, isCartOpen, closeCart, updateQty, removeFromCart, totalItems, totalPrice } =
    useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isCartOpen]);

  const handleWhatsApp = () => {
    let msg = "Hi! I'd like to place an order:\n\n";
    cart.forEach((item) => {
      msg += `${item.qty}x ${item.name} - Rs. ${(item.price * item.qty).toLocaleString()}\n`;
    });
    msg += `\nSubtotal: Rs. ${totalPrice.toLocaleString()}`;
    msg += `\nDelivery: Free`;
    msg += `\nTotal: Rs. ${totalPrice.toLocaleString()}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/923111134379?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[8000] bg-black/60 animate-fadeIn"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[8001] h-full w-full sm:max-w-sm bg-[#0f0f0f] sm:border-l border-[#222] flex flex-col transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#222]">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-bold text-lg">Your Order</h3>
            {totalItems > 0 && (
              <span className="bg-[#ff9700] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/50 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <i className="fa-solid fa-bag-shopping text-4xl text-white/15 mb-4" />
              <p className="text-white/40 font-medium mb-1">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="text-[#ff9700] text-sm hover:underline"
              >
                Browse the menu
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#141414] border border-[#222]"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {item.name}
                    </p>
                    <p className="text-[#ff9700] text-sm font-bold">
                      Rs. {(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition-colors"
                    >
                      <i className="fa-solid fa-minus text-[10px]" />
                    </button>
                    <span className="text-white text-sm font-semibold w-5 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white text-xs hover:bg-white/20 transition-colors"
                    >
                      <i className="fa-solid fa-plus text-[10px]" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-white/25 hover:text-[#ff3d00] hover:bg-[#ff3d00]/10 transition-colors"
                  >
                    <i className="fa-solid fa-trash text-xs" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-4 sm:px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-[#222]">
            {/* Summary */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Subtotal</span>
                <span className="text-white/70">Rs. {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Delivery Fee</span>
                <span className="text-green-400 font-medium">Free</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#222]">
                <span className="text-white font-bold">Total</span>
                <span className="text-white font-bold text-lg">Rs. {totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Place Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
