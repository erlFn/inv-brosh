import { LogOut } from 'lucide-react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export function AppSidebarFooter() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton className='py-5 border'>
                    <LogOut/>
                    <span>
                        Sign Out
                    </span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}