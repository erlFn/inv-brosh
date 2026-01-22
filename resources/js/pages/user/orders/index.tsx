import { Head } from "@inertiajs/react";

import AppLayout from "@/pages/layouts/app-layout";

export default function OrdersPage() {
    return (
        <>
            <Head title="Orders"/>
            <AppLayout>
                <p>
                    Orders
                </p>
            </AppLayout>
        </>
    );
}