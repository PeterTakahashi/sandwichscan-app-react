import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useSandwichAttackPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Sandwich Attack", href: "/sandwich-attacks" },
      { label: "Detail" },
    ]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
