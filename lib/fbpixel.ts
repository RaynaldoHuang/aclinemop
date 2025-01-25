declare global {
    interface Window {
        fbq: (...args: any[]) => void;
    }
}

// Inisialisasi Facebook Pixel
export const initFacebookPixel = (id: string) => {
    if (typeof window !== 'undefined') {
        window.fbq('init', id);
    }
};

// Melacak Page View
export const trackPageView = () => {
    if (typeof window !== 'undefined') {
        window.fbq('track', 'PageView');
    }
};

// Melacak Custom Event
export const trackCustomEvent = (event: string, params: Record<string, any>) => {
    if (typeof window !== 'undefined') {
        window.fbq('track', event, params);
    }
};
