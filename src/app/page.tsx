"use client";

import { menuData } from "@/data/menu";
import WelcomeModal from "@/components/WelcomeModal";
import Embers from "@/components/Embers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OrderTypeBar from "@/components/OrderTypeBar";
import CategoryNav from "@/components/CategoryNav";
import MenuSection from "@/components/MenuSection";
import CartSidebar from "@/components/CartSidebar";
import FloatingCart from "@/components/FloatingCart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <WelcomeModal />
      <Embers />

      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-[#ff9700]/10 via-[#050505] to-[#ff3d00]/10 border-b border-[#1a1a1a] py-1.5 sm:py-2 text-[0.6rem] sm:text-[0.7rem] text-[#999] relative z-[1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex justify-center sm:justify-between items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open Daily: 12:00 PM - 3:00 AM
          </span>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <i className="fas fa-phone text-[#ff9700] text-[0.6rem]" />
              0311-1134379
            </span>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-map-marker-alt text-[#ff9700] text-[0.6rem]" />
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>

      <Navbar />
      <Hero />
      <OrderTypeBar />
      <CategoryNav />

      {/* Menu */}
      <main id="menu" className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-28 sm:pb-20 relative z-[1]">
        {menuData.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}

        {/* Spice Guide */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center sm:items-stretch flex-wrap p-4 sm:p-6 bg-[#141414] rounded-2xl border border-[#222]">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d0d0d0]">
            <span className="px-3 sm:px-4 py-1 rounded-full text-[0.65rem] sm:text-xs font-bold tracking-wider bg-green-500/10 text-green-400 border border-green-500/40">
              MILD
            </span>
            Soft Savory Blend
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d0d0d0]">
            <span className="px-3 sm:px-4 py-1 rounded-full text-[0.65rem] sm:text-xs font-bold tracking-wider bg-orange-500/10 text-[#ffb740] border border-orange-500/40">
              SPICY
            </span>
            Bold Heat Kick
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d0d0d0]">
            <span className="px-3 sm:px-4 py-1 rounded-full text-[0.65rem] sm:text-xs font-bold tracking-wider bg-red-500/10 text-[#ff6e40] border border-red-500/40">
              FIERY
            </span>
            Spicy Zesty Tangy
          </div>
        </div>
      </main>

      <Footer />
      <CartSidebar />
      <FloatingCart />

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/923111134379"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 sm:bottom-24 right-4 sm:right-7 w-12 h-12 sm:w-[56px] sm:h-[56px] bg-[#25d366] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl z-[999] shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </>
  );
}
