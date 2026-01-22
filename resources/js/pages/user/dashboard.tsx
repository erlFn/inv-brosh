import { Head } from "@inertiajs/react";

import AppLayout from "../layouts/app-layout";

export default function Dashboard() {

    return (
        <>
            <Head
                title="Dashboard"
            />
            <AppLayout>
                <p>
                    Dashboard
                </p>
            </AppLayout>
        </>
    );
}