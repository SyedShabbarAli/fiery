"use client";

import { useState, useCallback } from "react";
import { MenuCategory, MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import ProductModal from "@/components/ProductModal";

function ItemCard({
  item,
  hasMeal,
  onOpenModal,
}: {
  item: MenuItem;
  hasMeal?: boolean;
  onOpenModal: (item: MenuItem) => void;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      const suffix = item.vibes?.[0] ? ` (${item.vibes[0]})` : item.sauces?.[0] ? ` (${item.sauces[0]})` : "";
      addToCart(item.id + suffix, item.name + suffix, item.price);
      setAdded(true);
      setTimeout(() => setAdded(false), 800);
    },
    [addToCart, item]
  );

  return (
    <div
      onClick={() => onOpenModal(item)}
      className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#141414] rounded-xl border border-[#222] cursor-pointer hover:border-[#333] active:bg-[#1a1a1a] transition-colors"
    >
      {/* Image */}
      {item.image && (
        <div className="shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Text */}
      <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
        <div>
          <h4 className="text-white font-semibold text-[0.8rem] sm:text-sm leading-tight mb-0.5 line-clamp-2">
            {item.name}
          </h4>
          {item.description && (
            <p className="text-white/40 text-[0.7rem] sm:text-xs leading-snug line-clamp-2 hidden xs:block">
              {item.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-1.5 sm:mt-2">
          <span className="bg-[#ff9700] text-white text-[0.65rem] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md">
            Rs. {item.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Add button */}
      <button
        onClick={handleQuickAdd}
        className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white hover:opacity-90 active:scale-95 transition-opacity self-center"
      >
        {added ? (
          <i className="fa-solid fa-check text-xs" />
        ) : (
          <i className="fa-solid fa-plus text-xs" />
        )}
      </button>
    </div>
  );
}

function ListItem({
  item,
  onOpenModal,
}: {
  item: MenuItem;
  onOpenModal: (item: MenuItem) => void;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      addToCart(item.id, item.name, item.price);
      setAdded(true);
      setTimeout(() => setAdded(false), 800);
    },
    [addToCart, item]
  );

  return (
    <div
      onClick={() => onOpenModal(item)}
      className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#141414] rounded-lg border border-[#222] cursor-pointer hover:border-[#333] active:bg-[#1a1a1a] transition-colors"
    >
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-medium text-[0.8rem] sm:text-sm">{item.name}</h4>
        {item.description && (
          <p className="text-white/40 text-[0.7rem] sm:text-xs mt-0.5">{item.description}</p>
        )}
      </div>
      <span className="bg-[#ff9700] text-white text-[0.65rem] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md shrink-0">
        Rs. {item.price.toLocaleString()}
      </span>
      <button
        onClick={handleQuickAdd}
        className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white hover:opacity-90 active:scale-95 transition-opacity"
      >
        {added ? (
          <i className="fa-solid fa-check text-[0.6rem] sm:text-xs" />
        ) : (
          <i className="fa-solid fa-plus text-[0.6rem] sm:text-xs" />
        )}
      </button>
    </div>
  );
}

export default function MenuSection({ category }: { category: MenuCategory }) {
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);
  const isListLayout = category.layout === "list" || category.items.every((i) => !i.image);

  return (
    <>
      <section id={category.id} className="mb-6 sm:mb-8">
        {/* Section header */}
        <div className="flex items-center gap-2 border-b border-[#222] pb-2.5 sm:pb-3 mb-3 sm:mb-4">
          <i
            className="fa-solid fa-fire text-[#ff3d00]"
            style={{ animation: "flicker 2s infinite" }}
          />
          <h3
            className="text-2xl font-bold"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              background: "linear-gradient(135deg, #ff9700, #ff3d00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {category.name}
          </h3>
        </div>

        {/* Items */}
        {isListLayout ? (
          <div className="flex flex-col gap-2">
            {category.items.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onOpenModal={setModalItem}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {category.items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                hasMeal={category.hasMeal}
                onOpenModal={setModalItem}
              />
            ))}
          </div>
        )}

        {/* Make it a Meal banner */}
        {category.hasMeal && (
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3 p-3 bg-[#ff9700]/10 border border-[#ff9700]/20 rounded-xl">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-utensils text-[#ff9700] text-sm" />
              <p className="text-[#ff9700] text-xs sm:text-sm font-semibold">
                Make it a Meal +Rs. 500
              </p>
            </div>
            <span className="text-white/40 text-[0.65rem] sm:text-xs sm:ml-auto pl-6 sm:pl-0">Fries + Drink + Coleslaw</span>
          </div>
        )}
      </section>

      {/* Product Modal */}
      {modalItem && (
        <ProductModal
          item={modalItem}
          hasMeal={category.hasMeal}
          onClose={() => setModalItem(null)}
        />
      )}
    </>
  );
}
