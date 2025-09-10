import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { sorts } from "./sorts";
import { useDefaultSortOnLocalStorage } from "@/components/molecules/DataTable/hooks/useDefaultSortOnLocalstorage";
import type { PaginationState } from "@tanstack/react-table";
import { useChains } from "@/features/hooks/swr/fetcher/chains/useChains";
import type { ChainListRequestQuery } from "@/types/api/chain/chain";
import { buildColumns } from "./columns";

const tableName = "chainsTable";

export const ChainsTable: React.FC = () => {
  const [defaultSort, setDefaultSortOnLocalStorage] =
    useDefaultSortOnLocalStorage(tableName, sorts, sorts[0]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [query, setQuery] = useState<ChainListRequestQuery>({
    sorted_by: defaultSort.sorted_by,
    sorted_order: defaultSort.sorted_order,
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });

  const { chains, meta, isLoading } = useChains(query);
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
      data={chains}
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
