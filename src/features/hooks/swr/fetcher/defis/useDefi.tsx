import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type { DefiRead } from "@/types/api/defi/defi";
import { useNavigate } from "react-router-dom";

export function useDefi(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<DefiRead>(
    id ? `/defis/${id}` : null,
    fetcher
  );
  const navigate = useNavigate();

  if (!id) {
    navigate("/not-found", { replace: true });
  }

  return {
    defi: data ?? null,
    isLoading,
    isError: error,
    mutate,
  };
}
