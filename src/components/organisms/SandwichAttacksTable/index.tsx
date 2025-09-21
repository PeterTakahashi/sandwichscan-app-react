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
import { FilterInput } from "./filterInput";

const tableName = "sandwich_attacksTable";

export const SandwichAttacksTable: React.FC = () => {
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

  const { sandwich_attacks, meta, isLoading } = useSandwichAttacks(query);
  const totalCount = meta?.total_count || 0;
  const pageCount = Math.ceil(totalCount / pagination.pageSize);

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
      ...filterObj,
    }));
  }, [pagination, filters]);

  const columns = buildColumns({ chains });

  return (
    <DataTable
      tableName={tableName}
      columns={columns}
      filterInput={<FilterInput setColumnFilters={setColumnFilters} />}
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
  );
};
