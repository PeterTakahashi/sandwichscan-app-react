import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type { DefiVersionRead } from "@/types/api/defi_version/defi_version";
import { useNavigate } from "react-router-dom";

export function useDefiVersion(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<DefiVersionRead>(
    id ? `/defi_versions/${id}` : null,
    fetcher
  );
  const navigate = useNavigate();

  if (!id) {
    navigate("/not-found", { replace: true });
  }

  return {
    defi_version: data ?? null,
    isLoading,
    isError: error,
    mutate,
  };
}
