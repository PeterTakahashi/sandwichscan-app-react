import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useMySandwichAttacksPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "My Sandwich Attacks" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
