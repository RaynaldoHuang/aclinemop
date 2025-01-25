'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initFacebookPixel, trackPageView } from '@/lib/fbpixel';

const PIXEL_ID = '1793750594713308';

export default function ClientWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Inisialisasi Facebook Pixel
        initFacebookPixel(PIXEL_ID);

        // Track PageView
        trackPageView();
    }, []);

    useEffect(() => {
        // Track setiap kali pathname berubah
        trackPageView();
    }, [pathname]);

    return <>{children}</>;
}
