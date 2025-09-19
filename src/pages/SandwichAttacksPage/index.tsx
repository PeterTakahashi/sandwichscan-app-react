import type { FC } from "react";
import { useSandwichAttacksPageBreadcrumbs } from "./breadcrumbs";
import { SandwichAttacksTable } from "@/components/organisms/SandwichAttacksTable";

export const SandwichAttacksPage: FC = () => {
  useSandwichAttacksPageBreadcrumbs();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Sandwich Attack</h1>
      </div>

      <SandwichAttacksTable />
    </div>
  );
};
