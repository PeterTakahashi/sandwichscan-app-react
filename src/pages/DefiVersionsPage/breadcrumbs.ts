import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useDefiVersionsPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "DefiVersions" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
