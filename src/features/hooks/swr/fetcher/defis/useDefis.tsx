import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  DefiListResponse,
  DefiListRequestQuery,
} from "@/types/api/defi/defi";
import { buildQueryString } from "@/lib/buildQueryString";

export function useDefis(query: DefiListRequestQuery = {}) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<DefiListResponse>(
    `/defis?${queryString}`,
    fetcher
  );

  const defis = data?.data || [];
  const meta = data?.meta;

  return {
    defis,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
