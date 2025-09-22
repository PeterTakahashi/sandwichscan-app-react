import type { FC } from "react";
import { useDefiPoolsPageBreadcrumbs } from "./breadcrumbs";
import { DefiPoolsTable } from "@/components/organisms/DefiPoolsTable";

export const DefiPoolsPage: FC = () => {
  useDefiPoolsPageBreadcrumbs();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Defi Pool</h1>
      </div>

      <DefiPoolsTable />
    </div>
  );
};
