// components/fbpiksel.js
"use client";

import { useEffect } from "react";
import ReactPixel, { fbq } from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = "1793750594713308";
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof fbq !== "undefined") {
      fbq("track", "InitiateCheckout", {
        content_name: "WhatsApp Order Button",
        content_category: "Contact",
        value: 0,
        currency: "IDR",
      });
    }
  };

  return (
    <div>
      <button onClick={handleWhatsAppClick} style={{ display: "none" }}>
        Track Click
      </button>
    </div>
  );
};

export default PixelTracker;
