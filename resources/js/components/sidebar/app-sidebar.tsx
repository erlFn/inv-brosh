import React from "react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

import { AppSidebarHeader } from "./app-sidebar-header";
import { AppSidebarMain } from "./app-sidebar-main";


export function AppSidebar({ ...props } : React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <AppSidebarHeader
                    title="Test Inventory"
                />
            </SidebarHeader>
            <SidebarContent>
                <AppSidebarMain/>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="bg-red-600 text-white"
                        >
                            <p>
                                Sign Out
                            </p>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}