import type { FC } from "react";
import { useSandwichAttackPageBreadcrumbs } from "./breadcrumbs";
import { useSandwichAttack } from "@/features/hooks/swr/fetcher/sandwich_attacks/useSandwichAttack";
import { useParams } from "react-router-dom";
import { SandwichAttackDetails } from "@/components/organisms/SandwichAttackDetails/index";

export const SandwichAttackPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { sandwichAttack, isLoading } = useSandwichAttack(id);
  useSandwichAttackPageBreadcrumbs();

  if (isLoading) {
    return null;
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
        <SandwichAttackDetails sandwichAttack={sandwichAttack} />
      </div>
    </div>
  );
};
