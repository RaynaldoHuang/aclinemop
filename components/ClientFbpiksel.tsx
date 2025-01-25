"use client";

import dynamic from "next/dynamic";

const Fbpiksel = dynamic(() => import("../components/fbpiksel"), { ssr: false });

export default function ClientFbpiksel() {
    return <Fbpiksel />;
}
