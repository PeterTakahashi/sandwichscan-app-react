import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type { DefiPoolRead } from "@/types/api/defi_pool/defi_pool";
import { useNavigate } from "react-router-dom";

export function useDefiPool(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<DefiPoolRead>(
    id ? `/defi_pools/${id}` : null,
    fetcher
  );
  const navigate = useNavigate();

  if (!id) {
    navigate("/not-found", { replace: true });
  }

  return {
    defi_pool: data ?? null,
    isLoading,
    isError: error,
    mutate,
  };
}
