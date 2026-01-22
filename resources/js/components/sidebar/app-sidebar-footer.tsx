import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export function AppSidebarFooter() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton className="bg-red-600 hover:bg-red-700 text-white hover:text-white">
                    <p>
                        Sign Out
                    </p>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}