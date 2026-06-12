"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig, contactInfo } from "@/data/site";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggleMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          className="group flex flex-col"
          aria-label={`${siteConfig.name} - Home`}
        >
          <span className="font-serif text-lg font-semibold tracking-wide text-white sm:text-xl">
            K. A. KANERIYA
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold-400 sm:text-xs">
            & Associates
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={contactInfo.phones[0].href}
          className="hidden items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-500 lg:flex"
          aria-label="Call our office"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Us
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={handleToggleMenu}
          onKeyDown={handleKeyDown}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          tabIndex={0}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className="border-t border-white/10 bg-navy-950 px-6 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleCloseMenu}
                className="text-base font-medium text-white/90 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactInfo.phones[0].href}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-navy-950"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contactInfo.phones[0].number}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
