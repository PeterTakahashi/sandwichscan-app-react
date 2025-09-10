import type { FC } from "react";
import { useChainsPageBreadcrumbs } from "./breadcrumbs";
import { ChainsTable } from "@/components/organisms/ChainsTable";

export const ChainsPage: FC = () => {
  useChainsPageBreadcrumbs();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Chains</h1>
      </div>

      <ChainsTable />
    </div>
  );
};
