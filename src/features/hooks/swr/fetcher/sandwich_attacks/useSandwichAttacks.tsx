import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  SandwichAttackListResponse,
  SandwichAttackListRequestQuery,
} from "@/types/api/sandwich_attack/sandwich_attack";
import { buildQueryString } from "@/lib/buildQueryString";

export function useSandwichAttacks(query: SandwichAttackListRequestQuery = {}) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<SandwichAttackListResponse>(
    `/sandwich_attacks?${queryString}`,
    fetcher
  );

  const sandwich_attacks = data?.data || [];
  const meta = data?.meta;

  return {
    sandwich_attacks,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
