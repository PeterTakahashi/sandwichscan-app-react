import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type { TokenRead } from "@/types/api/token/token";
import { useNavigate } from "react-router-dom";

export function useToken(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<TokenRead>(
    id ? `/tokens/${id}` : null,
    fetcher
  );
  const navigate = useNavigate();

  if (!id) {
    navigate("/not-found", { replace: true });
  }

  return {
    token: data ?? null,
    isLoading,
    isError: error,
    mutate,
  };
}
