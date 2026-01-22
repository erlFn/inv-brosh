import React from "react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";

import { AppSidebarFooter } from "./app-sidebar-footer";
import { AppSidebarHeader } from "./app-sidebar-header";
import AppSidebarMain from "./app-sidebar-main";


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
                <AppSidebarFooter/>
            </SidebarFooter>
        </Sidebar>
    );
}