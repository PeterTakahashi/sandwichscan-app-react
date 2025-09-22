import type { FC } from "react";
import { useTokensPageBreadcrumbs } from "./breadcrumbs";
import { TokensTable } from "@/components/organisms/TokensTable";

export const TokensPage: FC = () => {
  useTokensPageBreadcrumbs();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Token</h1>
      </div>

      <TokensTable />
    </div>
  );
};
