import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useDefiPoolsPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "Defi Pool" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
