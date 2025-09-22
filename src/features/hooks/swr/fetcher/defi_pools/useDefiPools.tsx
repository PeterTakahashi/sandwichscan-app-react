import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  DefiPoolListResponse,
  DefiPoolListRequestQuery,
} from "@/types/api/defi_pool/defi_pool";
import { buildQueryString } from "@/lib/buildQueryString";

export function useDefiPools(query: DefiPoolListRequestQuery = {}) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<DefiPoolListResponse>(
    `/defi_pools?${queryString}`,
    fetcher
  );

  const defi_pools = data?.data || [];
  const meta = data?.meta;

  return {
    defi_pools,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
