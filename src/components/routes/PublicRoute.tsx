import type { FC, ReactNode } from "react";
import { SidebarLayout } from "@/components/layout/SideBarLayout";

type PublicRouteProps = {
  children: ReactNode;
};

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  return <SidebarLayout>{children}</SidebarLayout>;
};
