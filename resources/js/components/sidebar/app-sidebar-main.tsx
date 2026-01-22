import { InertiaLinkProps, router, usePage } from "@inertiajs/react";
import { LayoutDashboard, ClipboardList, PackageOpen, Truck, ShoppingCart } from 'lucide-react';

import { useLoading } from "@/hooks/use-loading";
import user from "@/routes/user";
import { NavItem } from "@/types";

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";




const navItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: user.dashboard.url(),
        icon: LayoutDashboard
    },
    {
        title: 'Inventory',
        href: user.inventory.url(),
        icon: ClipboardList
    },
    {
        title: 'Item Details',
        href: user.itemDetails.url(),
        icon: PackageOpen
    },
    {
        title: 'Suppliers',
        href: user.suppliers.url(),
        icon: Truck
    },
    {
        title: 'Orders',
        href: user.orders.url(),
        icon: ShoppingCart
    },
]

export default function AppSidebarMain() {
    const page = usePage();
    const { setIsLoading } = useLoading();

    const handleRedirect = (href: NonNullable<InertiaLinkProps['href']>) => {
        router.get(href, {}, {
            onStart: () => {
                setIsLoading(true);
            },
            onFinish: () => {
                setIsLoading(false);
            }
        });
    };
    
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
                                    tooltip={item.title}
                                    onClick={() => handleRedirect(item.href)}
                                    className={`py-5 transition-all duration-250 hover:font-medium ${activePage ? 'shadow-xs border font-medium pointer-events-none' : 'shadow-none'}`}
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