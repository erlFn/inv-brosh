import { Head } from "@inertiajs/react";

import AppLayout from "@/pages/layouts/app-layout";


export default function IndexPage() {
    return (
        <>
            <Head title="Inventory"/>
            <AppLayout>
                <p>
                    Inventory
                </p>
            </AppLayout>
        </>
    );
}