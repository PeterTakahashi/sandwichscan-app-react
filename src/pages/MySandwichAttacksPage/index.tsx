import { type FC, useEffect } from "react";
import { useMySandwichAttacksPageBreadcrumbs } from "./breadcrumbs";
import { SandwichAttacksTable } from "@/components/organisms/SandwichAttacksTable";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export const MySandwichAttacksPage: FC = () => {
  useMySandwichAttacksPageBreadcrumbs();
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected, navigate]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">My Sandwich Attack</h1>
      </div>

      <SandwichAttacksTable
        tableName="MySandwichAttacksTable"
        walletAddress={address}
      />
    </div>
  );
};
