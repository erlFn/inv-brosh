import React, { PropsWithChildren } from "react";

function AppLayoutContent({ children } : PropsWithChildren) {
    return (
        <div className="min-h-screen w-full flex flex-col gap-2 items-center transition-opacity duration-750 opacity-100 starting:opacity-0">
            <p>
                App Layout
            </p>
            {children}
        </div>
    );
}

export default function AppLayout({ children } : PropsWithChildren) {
    return (
        <AppLayoutContent>
            {children}
        </AppLayoutContent>
    );
}