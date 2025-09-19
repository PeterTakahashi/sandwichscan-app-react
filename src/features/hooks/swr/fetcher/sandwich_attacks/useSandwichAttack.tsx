import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type { SandwichAttackRead } from "@/types/api/sandwich_attack/sandwich_attack";
import { useNavigate } from "react-router-dom";

export function useSandwichAttack(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<SandwichAttackRead>(
    id ? `/sandwich_attacks/${id}` : null,
    fetcher
  );
  const navigate = useNavigate();

  if (!id) {
    navigate("/not-found", { replace: true });
  }

  return {
    sandwich_attack: data ?? null,
    isLoading,
    isError: error,
    mutate,
  };
}
