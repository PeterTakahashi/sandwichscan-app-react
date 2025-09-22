import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  TokenListResponse,
  TokenListRequestQuery,
} from "@/types/api/token/token";
import { buildQueryString } from "@/lib/buildQueryString";

export function useTokens(query: TokenListRequestQuery = {}) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<TokenListResponse>(
    `/tokens?${queryString}`,
    fetcher
  );

  const tokens = data?.data || [];
  const meta = data?.meta;

  return {
    tokens,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
