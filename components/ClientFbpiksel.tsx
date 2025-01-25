import dynamic from "next/dynamic";

const PixelTracker = dynamic(() => import("../components/fbpiksel"), { ssr: false });

export default function CheckoutPage() {
    return (
        <div>
            <h1>Checkout Page</h1>
            <PixelTracker />
        </div>
    );
}
