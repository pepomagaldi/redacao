"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: (...args: any[]) => void;
  }
}

export function MetaPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (!/^\d+$/.test(pixelId) || typeof window === "undefined") return;

    if (!window.fbq) {
      const fbq: any = function (...args: any[]) {
        fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
      };
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];
      window.fbq = fbq;
      window._fbq = fbq;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    window.fbq?.("init", pixelId);
    window.fbq?.("track", "PageView");
    window.fbq?.("track", "ViewContent", {
      content_name: "Redação +900",
      content_ids: ["redacao-900-enem-2026"],
      content_type: "product",
      value: 17.9,
      currency: "BRL",
    });
  }, [pixelId]);

  return null;
}
