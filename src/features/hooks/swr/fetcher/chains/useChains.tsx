import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  ChainListResponse,
  ChainListRequestQuery,
} from "@/types/api/chain/chain";
import { buildQueryString } from "@/lib/buildQueryString";

export function useChains(query: ChainListRequestQuery = {}) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<ChainListResponse>(
    `/chains?${queryString}`,
    fetcher
  );

  const chains = data?.data || [];
  const meta = data?.meta;

  return {
    chains,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
