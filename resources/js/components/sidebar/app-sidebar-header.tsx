import { Database } from 'lucide-react';

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

interface ContentProps {
    title: string;
}

export function AppSidebarHeader({ title } : ContentProps) {

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton className='pointer-events-none'>
                    <Database/>
                    <span className="font-medium">
                        {title ?? "Title Example"}
                    </span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}