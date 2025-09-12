import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { sorts } from "./sorts";
import { useDefaultSortOnLocalStorage } from "@/components/molecules/DataTable/hooks/useDefaultSortOnLocalstorage";
import type { PaginationState } from "@tanstack/react-table";
import { useDefiPools } from "@/features/hooks/swr/fetcher/defi_pools/useDefiPools";
import type { DefiPoolListRequestQuery } from "@/types/api/defi_pool/defi_pool";
import { buildColumns } from "./columns";

const tableName = "defi_poolsTable";

export const DefiPoolsTable: React.FC = () => {
  const [defaultSort, setDefaultSortOnLocalStorage] =
    useDefaultSortOnLocalStorage(tableName, sorts, sorts[0]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [query, setQuery] = useState<DefiPoolListRequestQuery>({
    sorted_by: defaultSort.sorted_by,
    sorted_order: defaultSort.sorted_order,
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });

  const { defi_pools, meta, isLoading } = useDefiPools(query);
  const totalCount = meta?.total_count || 0;
  const pageCount = Math.ceil(totalCount / pagination.pageSize);

  useEffect(() => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      limit: pagination.pageSize,
      offset: pagination.pageIndex * pagination.pageSize,
    }));
  }, [pagination]);

  const columns = buildColumns();

  return (
    <DataTable
      tableName={tableName}
      columns={columns}
      data={defi_pools}
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
