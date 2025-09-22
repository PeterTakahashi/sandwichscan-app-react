import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  DefiVersionListResponse,
  DefiVersionListRequestQuery,
} from "@/types/api/defi_version/defi_version";
import { buildQueryString } from "@/lib/buildQueryString";

export function useDefiVersions(query: DefiVersionListRequestQuery = {}) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } = useSWR<DefiVersionListResponse>(
    `/defi_versions?${queryString}`,
    fetcher
  );

  const defi_versions = data?.data || [];
  const meta = data?.meta;

  return {
    defi_versions,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
