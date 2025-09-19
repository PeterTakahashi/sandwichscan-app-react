import type { FC } from "react";
import type { SandwichAttackRead } from "@/types/api/sandwich_attack/sandwich_attack";

interface SandwichAttackDetailsProps {
  sandwichAttack: SandwichAttackRead;
}

export const SandwichAttackDetails: FC<SandwichAttackDetailsProps> = ({
  sandwichAttack,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2">General Information</h3>
          <p>
            <strong>ID:</strong> {sandwichAttack.id}
          </p>
          <p>
            <strong>Attacker Address:</strong> {sandwichAttack.attacker_address}
          </p>
          <p>
            <strong>Victim Address:</strong> {sandwichAttack.victim_address}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(sandwichAttack.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(sandwichAttack.updated_at).toLocaleString()}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Financials</h3>
          <p>
            <strong>Revenue (Base Raw):</strong>{" "}
            {sandwichAttack.revenue_base_raw}
          </p>
          <p>
            <strong>Profit (Base Raw):</strong> {sandwichAttack.profit_base_raw}
          </p>
          <p>
            <strong>Harm (Base Raw):</strong> {sandwichAttack.harm_base_raw}
          </p>
          <p>
            <strong>Gas Fee (Attacker Wei):</strong>{" "}
            {sandwichAttack.gas_fee_wei_attacker}
          </p>
        </div>
      </div>

      {/* Chain Details */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Chain Details</h3>
        <p>
          <strong>Name:</strong> {sandwichAttack.chain.name}
        </p>
        <p>
          <strong>Chain ID:</strong> {sandwichAttack.chain.chain_id}
        </p>
        <p>
          <strong>Native Symbol:</strong> {sandwichAttack.chain.native_symbol}
        </p>
        <p>
          <strong>Explorer URL:</strong>{" "}
          <a
            href={sandwichAttack.chain.explorer_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {sandwichAttack.chain.explorer_url}
          </a>
        </p>
      </div>

      {/* Base Token Details */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Base Token Details</h3>
        <p>
          <strong>Symbol:</strong> {sandwichAttack.base_token?.symbol}
        </p>
        <p>
          <strong>Address:</strong> {sandwichAttack.base_token?.address}
        </p>
        <p>
          <strong>Decimals:</strong> {sandwichAttack.base_token?.decimals}
        </p>
        <p>
          <strong>Type:</strong> {sandwichAttack.base_token?.token_type}
        </p>
      </div>

      {/* DeFi Version Details */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">DeFi Version Details</h3>
        <p>
          <strong>DeFi Name:</strong> {sandwichAttack.defi_version.defi.name}
        </p>
        <p>
          <strong>Version Name:</strong> {sandwichAttack.defi_version.name}
        </p>
      </div>

      {/* Front Attack Swap */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Front Attack Swap</h3>
        <p>
          <strong>Sender:</strong> {sandwichAttack.front_attack_swap.sender}
        </p>
        <p>
          <strong>Recipient:</strong>{" "}
          {sandwichAttack.front_attack_swap.recipient}
        </p>
        <p>
          <strong>Sell Token:</strong>{" "}
          {sandwichAttack.front_attack_swap.sell_token?.symbol}
        </p>
        <p>
          <strong>Buy Token:</strong>{" "}
          {sandwichAttack.front_attack_swap.buy_token?.symbol}
        </p>
        <p>
          <strong>Amount In (Raw):</strong>{" "}
          {sandwichAttack.front_attack_swap.amount0_in_raw ||
            sandwichAttack.front_attack_swap.amount1_in_raw}
        </p>
        <p>
          <strong>Amount Out (Raw):</strong>{" "}
          {sandwichAttack.front_attack_swap.amount0_out_raw ||
            sandwichAttack.front_attack_swap.amount1_out_raw}
        </p>
        <p>
          <strong>Transaction Hash:</strong>{" "}
          <a
            href={`${sandwichAttack.chain.explorer_url}/tx/${sandwichAttack.front_attack_swap.transaction.tx_hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {sandwichAttack.front_attack_swap.transaction.tx_hash}
          </a>
        </p>
      </div>

      {/* Victim Swap */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Victim Swap</h3>
        <p>
          <strong>Sender:</strong> {sandwichAttack.victim_swap.sender}
        </p>
        <p>
          <strong>Recipient:</strong> {sandwichAttack.victim_swap.recipient}
        </p>
        <p>
          <strong>Sell Token:</strong>{" "}
          {sandwichAttack.victim_swap.sell_token?.symbol}
        </p>
        <p>
          <strong>Buy Token:</strong>{" "}
          {sandwichAttack.victim_swap.buy_token?.symbol}
        </p>
        <p>
          <strong>Amount In (Raw):</strong>{" "}
          {sandwichAttack.victim_swap.amount0_in_raw ||
            sandwichAttack.victim_swap.amount1_in_raw}
        </p>
        <p>
          <strong>Amount Out (Raw):</strong>{" "}
          {sandwichAttack.victim_swap.amount0_out_raw ||
            sandwichAttack.victim_swap.amount1_out_raw}
        </p>
        <p>
          <strong>Transaction Hash:</strong>{" "}
          <a
            href={`${sandwichAttack.chain.explorer_url}/tx/${sandwichAttack.victim_swap.transaction.tx_hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {sandwichAttack.victim_swap.transaction.tx_hash}
          </a>
        </p>
      </div>

      {/* Back Attack Swap */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Back Attack Swap</h3>
        <p>
          <strong>Sender:</strong> {sandwichAttack.back_attack_swap.sender}
        </p>
        <p>
          <strong>Recipient:</strong>{" "}
          {sandwichAttack.back_attack_swap.recipient}
        </p>
        <p>
          <strong>Sell Token:</strong>{" "}
          {sandwichAttack.back_attack_swap.sell_token?.symbol}
        </p>
        <p>
          <strong>Buy Token:</strong>{" "}
          {sandwichAttack.back_attack_swap.buy_token?.symbol}
        </p>
        <p>
          <strong>Amount In (Raw):</strong>{" "}
          {sandwichAttack.back_attack_swap.amount0_in_raw ||
            sandwichAttack.back_attack_swap.amount1_in_raw}
        </p>
        <p>
          <strong>Amount Out (Raw):</strong>{" "}
          {sandwichAttack.back_attack_swap.amount0_out_raw ||
            sandwichAttack.back_attack_swap.amount1_out_raw}
        </p>
        <p>
          <strong>Transaction Hash:</strong>{" "}
          <a
            href={`${sandwichAttack.chain.explorer_url}/tx/${sandwichAttack.back_attack_swap.transaction.tx_hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {sandwichAttack.back_attack_swap.transaction.tx_hash}
          </a>
        </p>
      </div>
    </div>
  );
};
