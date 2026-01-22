import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export function AppSidebarMain() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <span>
                            Test Navigation
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}