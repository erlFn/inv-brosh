import { Head } from "@inertiajs/react";

import { Loading } from "@/components/loading";
import { useLoading } from "@/hooks/use-loading";

export default function Dashboard() {
    const { isLoading } = useLoading();

    return (
        <>
            <Head
                title="Dashboard"
            />
            {isLoading && <Loading/>}
            <div className="min-h-screen w-full flex items-center justify-center transition-opacity duration-750 opacity-100 starting:opacity-0">
                <p>
                    User Dashboard
                </p>
            </div>
        </>
    );
}