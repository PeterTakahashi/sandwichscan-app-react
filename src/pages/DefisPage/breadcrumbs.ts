import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useDefisPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "Defis" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
