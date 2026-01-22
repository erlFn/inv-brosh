import { Head } from "@inertiajs/react";

import { Loading } from "@/components/loading";
import { useLoading } from "@/hooks/use-loading";

import AppLayout from "../layouts/app-layout";

export default function Dashboard() {
    const { isLoading } = useLoading();

    return (
        <>
            <Head
                title="Dashboard"
            />
            {isLoading && <Loading/>}
            <AppLayout>
                <p>
                    User dashboardasasd
                </p>
            </AppLayout>
        </>
    );
}