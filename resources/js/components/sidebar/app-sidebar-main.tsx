import { usePage } from "@inertiajs/react";

import { LayoutDashboard, ClipboardList, PackageOpen, Truck, ShoppingCart } from 'lucide-react';

import { NavItem } from "@/types";

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";


const navItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard
    },
    {
        title: 'Inventory',
        href: '/inventory',
        icon: ClipboardList
    },
    {
        title: 'Item Details',
        href: '/item-details',
        icon: PackageOpen
    },
    {
        title: 'Suppliers',
        href: '/suppliers',
        icon: Truck
    },
    {
        title: 'Orders',
        href: '/orders',
        icon: ShoppingCart
    },
]

export default function AppSidebarMain() {
    const page = usePage();
    
    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                    {navItems.map((item, idx) => {
                        const activePage = item.href === page.url || page.url.startsWith(item.href + "/") || page.url.startsWith(item.href + "?");

                        return (
                            <SidebarMenuItem
                                key={idx}
                            >
                                <SidebarMenuButton
                                    disabled={activePage}
                                    className={`py-5 transition-all duration-250 ${activePage ? 'shadow-xs border' : 'shadow-none'}`}
                                >
                                    {item.icon && (
                                        <item.icon/>
                                    )}
                                    <span>
                                        {item.title}
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}