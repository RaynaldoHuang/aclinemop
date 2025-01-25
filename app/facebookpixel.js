import { useEffect } from 'react';

const FacebookPixel = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof fbq === 'undefined') {
            // Initialize Facebook Pixel tracking (fbq)
            function initializeFacebookPixel() {
                if (window.fbq) return; // If fbq already exists, return early

                const n = window.fbq = function () {
                    if (n.callMethod) {
                        n.callMethod.apply(n, arguments);
                    } else {
                        n.queue.push(arguments);
                    }
                };

                if (!window._fbq) window._fbq = n;

                n.push = n;
                n.loaded = true;
                n.version = '2.0';
                n.queue = [];

                const t = document.createElement('script');
                t.async = true;
                t.src = 'https://connect.facebook.net/en_US/fbevents.js';

                const s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(t, s);
            }

            // Call the initialization function
            initializeFacebookPixel();

            // Track the page view
            fbq('init', '1793750594713308');  // Replace with your actual pixel ID
            fbq('track', 'PageView');
        }
    }, []);

    return null;  // This component doesn't need to render anything
};

export default FacebookPixel;
