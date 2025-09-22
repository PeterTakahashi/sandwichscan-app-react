import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { sorts } from "./sorts";
import { useDefaultSortOnLocalStorage } from "@/components/molecules/DataTable/hooks/useDefaultSortOnLocalstorage";
import type {
  PaginationState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { useSandwichAttacks } from "@/features/hooks/swr/fetcher/sandwich_attacks/useSandwichAttacks";
import type { SandwichAttackListRequestQuery } from "@/types/api/sandwich_attack/sandwich_attack";
import { buildColumns } from "./columns";
import { useChains } from "@/features/hooks/swr/fetcher/chains/useChains";
import { useDefiVersions } from "@/features/hooks/swr/fetcher/defi_versions/useDefiVersions";
import { FilterInput } from "./filterInput";
import { SandwichAttackSectionCards } from "@/components/organisms/SandwichAttackSectionCards";
import { ChartAreaInteractive } from "@/components/organisms/ChartInteractive";
import { useSandwichAttackByMonth } from "@/features/hooks/swr/fetcher/sandwich_attacks/useSandwichAttackByMonth";

type Props = {
  tableName: string;
  walletAddress?: string;
};
export const SandwichAttacksTable: React.FC<Props> = ({
  tableName = "sandwich_attacksTable",
  walletAddress,
}) => {
  const [defaultSort, setDefaultSortOnLocalStorage] =
    useDefaultSortOnLocalStorage(tableName, sorts, sorts[0]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [filters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [query, setQuery] = useState<SandwichAttackListRequestQuery>({
    sorted_by: defaultSort.sorted_by,
    sorted_order: defaultSort.sorted_order,
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });
  const { chains } = useChains();
  const { defi_versions } = useDefiVersions();

  const { sandwich_attacks, meta, isLoading } = useSandwichAttacks(query);
  const totalCount = meta?.total_count || 0;
  const pageCount = Math.ceil(totalCount / pagination.pageSize);

  const { result: chartDataByMonth } = useSandwichAttackByMonth(query);

  useEffect(() => {
    const filterObj = filters.reduce(
      (acc, filter) => {
        if (filter.value == null || filter.value === "") return acc;
        acc[filter.id] = String(filter.value);
        return acc;
      },
      {} as Record<string, string>
    );

    // Rebuild query so removed filters don't linger; when {}, it resets.
    setQuery((prev) => ({
      sorted_by: prev?.sorted_by,
      sorted_order: prev?.sorted_order,
      limit: pagination.pageSize,
      offset: pagination.pageIndex * pagination.pageSize,
      victim_address__exact__or__attacker_address__exact: walletAddress,
      ...filterObj,
    }));
  }, [pagination, filters, walletAddress, defaultSort]);

  const columns = buildColumns({ chains, defi_versions });

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    );
  }

  return (
    <>
      <SandwichAttackSectionCards
        totalCount={totalCount}
        totalRevenueUsd={meta?.total_revenue_usd || 0}
        totalProfitUsd={meta?.total_profit_usd || 0}
        totalHarmUsd={meta?.total_harm_usd || 0}
      />
      <ChartAreaInteractive chartData={chartDataByMonth} />
      <DataTable
        tableName={tableName}
        columns={columns}
        filterInput={
          walletAddress ? null : (
            <FilterInput setColumnFilters={setColumnFilters} />
          )
        }
        data={sandwich_attacks}
        pagination={pagination}
        totalCount={totalCount}
        setPagination={setPagination}
        pageCount={pageCount}
        query={query as Record<string, string>}
        setQuery={setQuery}
        sorts={sorts}
        defaultSort={defaultSort}
        isLoading={isLoading}
        setDefaultSortOnLocalStorage={setDefaultSortOnLocalStorage}
      />
    </>
  );
};
