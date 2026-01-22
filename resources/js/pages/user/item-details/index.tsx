import { Head } from "@inertiajs/react";

import AppLayout from "@/pages/layouts/app-layout";

export default function ItemDetailsPage() {
    return (
        <>
            <Head title="Item Details"/>
            <AppLayout>
                <p>
                    Item Details
                </p>
            </AppLayout>
        </>
    );
}