import type { FC } from "react";
import { useDefisPageBreadcrumbs } from "./breadcrumbs";
import { DefisTable } from "@/components/organisms/DefisTable";

export const DefisPage: FC = () => {
  useDefisPageBreadcrumbs();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Defis</h1>
      </div>

      <DefisTable />
    </div>
  );
};
