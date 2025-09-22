import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  SandwichAttackReadByMonth,
  SandwichAttackListRequestQuery,
} from "@/types/api/sandwich_attack/sandwich_attack";
import { buildQueryString } from "@/lib/buildQueryString";

export function useSandwichAttackByMonth(
  query: SandwichAttackListRequestQuery = {}
) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<
    SandwichAttackReadByMonth[]
  >(`/sandwich_attacks/by_month?${queryString}`, fetcher);

  const result = data || [];

  return {
    result,
    isLoading,
    isError: error,
    mutate,
  };
}
