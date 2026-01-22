import { usePage } from "@inertiajs/react";
import React, { PropsWithChildren } from "react";

import { Loading } from "@/components/loading";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useLoading } from "@/hooks/use-loading";
import { SharedData } from "@/types";


function AppLayoutContent({ children } : PropsWithChildren) {
    const { isLoading } = useLoading();
    const { sidebarOpen } = usePage<SharedData>().props;

    return (
        <>
            {isLoading && <Loading/>}
            <SidebarProvider
                defaultOpen={sidebarOpen}
            >
                <AppSidebar
                    collapsible="icon"
                    variant="floating"
                />
                <SidebarInset>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}

export default function AppLayout({ children } : PropsWithChildren) {
    return (
        <AppLayoutContent>
            <main className="w-full min-h-screen p-2 transition-opacity duration-750 opacity-100 starting:opacity-0">
                <div className="w-full h-full border rounded-md shadow-xs p-4">
                    <div className="space-y-2">
                        <header>
                            <SidebarTrigger/>
                        </header>
                        {children}
                    </div>
                </div>
            </main>
        </AppLayoutContent>
    );
}