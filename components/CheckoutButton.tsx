"use client";

import { ArrowRight } from "lucide-react";

export function CheckoutButton({
  checkoutUrl,
  label = "QUERO O REDAÇÃO +900",
  location,
  compact = false,
}: {
  checkoutUrl: string;
  label?: string;
  location: string;
  compact?: boolean;
}) {
  function handleClick() {
    window.fbq?.("track", "InitiateCheckout", {
      content_name: "Redação +900",
      content_ids: ["redacao-900-enem-2026"],
      content_type: "product",
      num_items: 1,
      value: 17.9,
      currency: "BRL",
      cta_position: location,
    });
  }

  return (
    <a
      className={compact ? "cta ctaCompact" : "cta"}
      href={checkoutUrl}
      onClick={handleClick}
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      {!compact && <ArrowRight size={20} strokeWidth={2.6} />}
    </a>
  );
}
