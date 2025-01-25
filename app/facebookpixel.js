// facebookPixel.js

import { useEffect } from 'react';

const FacebookPixel = () => {
    useEffect(() => {
        // Initialize Facebook Pixel tracking (fbq)
        if (typeof window !== 'undefined' && typeof fbq === 'undefined') {
            // Replace 'your-pixel-id' with your actual Facebook Pixel ID
            !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; n = f.fbq = function () {
                    n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push
                        (arguments)
                }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !
                    0; n.version = '2.0'; n.queue = []; t = b.createElement(e);
                t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document,
                'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1793750594713308');
            fbq('track', 'PageView'); // Replace with your actual pixel ID
        }
    }, []);

    return null;  // This component doesn't need to render anything
};

export default FacebookPixel;
