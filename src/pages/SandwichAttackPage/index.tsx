import type { FC } from "react";
import { useSandwichAttackPageBreadcrumbs } from "./breadcrumbs";
import { useSandwichAttack } from "@/features/hooks/swr/fetcher/sandwich_attacks/useSandwichAttack";
import { useParams } from "react-router-dom";

export const SandwichAttackPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { sandwichAttack, isLoading } = useSandwichAttack(id);
  useSandwichAttackPageBreadcrumbs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!sandwichAttack) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Sandwich Attack</h1>
      </div>

      <div>
        
      </div>
    </div>
  );
};
