import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useSandwichAttacksPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "Sandwich Attack" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
