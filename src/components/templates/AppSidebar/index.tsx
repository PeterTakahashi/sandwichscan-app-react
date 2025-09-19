import * as React from "react";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";
import Logo from "@/assets/img/logo.png";
import { serviceName } from "@/config";
import { NavMain } from "@/components/organisms/NavMain";
import { NavUser } from "@/components/organisms/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton,
} from "@/components/atoms/Sidebar";

import { Link } from "react-router-dom";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Sandwich Attacks",
          url: "/sandwich-attacks",
        },
        {
          title: "Transactions",
          url: "#",
        },
      ],
    },
    {
      title: "Target Data",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Chain",
          url: "/chains",
        },
        {
          title: "Defi",
          url: "/defis",
        },
        {
          title: "Defi Version",
          url: "/defi-versions",
        },
        {
          title: "Defi Pool",
          url: "/defi-pools",
        },
        {
          title: "Token",
          url: "/tokens",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to="/">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <img
                src={Logo}
                alt="Logo"
                className="block mx-auto size-6 rounded-full"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{serviceName}</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {/* <Link to="/">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Database className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{serviceName}</span>
            </div>
          </SidebarMenuButton>
        </Link> */}
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
