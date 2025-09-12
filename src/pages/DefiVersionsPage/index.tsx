import type { FC } from "react";
import { useDefiVersionsPageBreadcrumbs } from "./breadcrumbs";
import { DefiVersionsTable } from "@/components/organisms/DefiVersionsTable";

export const DefiVersionsPage: FC = () => {
  useDefiVersionsPageBreadcrumbs();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Defi Versions</h1>
      </div>

      <DefiVersionsTable />
    </div>
  );
};
