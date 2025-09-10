import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type { ChainRead } from "@/types/api/chain/chain";
import { useNavigate } from "react-router-dom";

export function useChain(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<ChainRead>(
    id ? `/chains/${id}` : null,
    fetcher
  );
  const navigate = useNavigate();

  if (!id) {
    navigate("/not-found", { replace: true });
  }

  return {
    chain: data ?? null,
    isLoading,
    isError: error,
    mutate,
  };
}
