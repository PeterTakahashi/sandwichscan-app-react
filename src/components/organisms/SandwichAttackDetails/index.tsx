import type { FC } from "react";
import type { SandwichAttackRead } from "@/types/api/sandwich_attack/sandwich_attack";
import { defaultTokenLogoUrl } from "@/config";
import AttackerLogo from "@/assets/img/attacker.png";
import VictimLogo from "@/assets/img/victim.png";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  Fuel,
  Landmark,
} from "lucide-react";
import { SwapCard } from "@/components/molecules/SwapCard";
import { TokenIcon } from "@/components/atoms/TokenIcon";
import { omitAddress } from "@/lib/utils/omitAddress";
import { numberToUSD } from "@/lib/utils/numberToUSD";

interface SandwichAttackDetailsProps {
  sandwichAttack: SandwichAttackRead;
}

export const SandwichAttackDetails: FC<SandwichAttackDetailsProps> = ({
  sandwichAttack,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="border rounded-full inline-flex items-center px-3 py-2 bg-white shadow hover:shadow-xl transition-shadow w-auto max-w-xs">
          <img
            src={
              sandwichAttack.defi_version.defi.logo_url || defaultTokenLogoUrl
            }
            alt={sandwichAttack.defi_version.defi.name}
            className="inline size-5 mr-1 rounded-full"
          />
          {sandwichAttack.defi_version.name}
        </div>
        {/* Chain */}
        <div className="border rounded-full inline-flex items-center px-3 py-2 bg-white shadow hover:shadow-xl transition-shadow w-auto max-w-xs">
          <img
            src={sandwichAttack.chain.logo_url}
            alt={sandwichAttack.chain.name}
            className="inline size-5 mr-1 rounded-full"
          />
          {sandwichAttack.chain.native_symbol}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="border rounded-full inline-flex items-center px-3 py-2 bg-white shadow hover:shadow-xl transition-shadow w-auto max-w-xs">
          <TokenIcon token={sandwichAttack.front_attack_swap.sell_token} />
          <div className="ml-1"></div>
          {sandwichAttack.front_attack_swap.sell_token
            ? sandwichAttack.front_attack_swap.sell_token.symbol
            : "Unknown"}
          <span className="mx-1">→</span>
          <TokenIcon token={sandwichAttack.front_attack_swap.buy_token} />
          <div className="ml-1"></div>
          {sandwichAttack.front_attack_swap.buy_token
            ? sandwichAttack.front_attack_swap.buy_token.symbol
            : "Unknown"}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative group rounded-2xl p-[1px] bg-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="rounded-2xl bg-white/90 dark:bg-slate-900/70 backdrop-blur p-5">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-gradient-to-r from-indigo-500" />
                <h3 className="text-lg font-semibold">Addresses</h3>
              </div>
            </div>

            <div className="space-y-3">
              {/* Attacker */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={AttackerLogo}
                    alt="Attacker"
                    className="size-8 rounded-full ring-2 ring-white shadow"
                  />
                  <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-rose-500/10 to-fuchsia-500/10 text-rose-600 dark:text-rose-300 border border-rose-200/60 dark:border-rose-500/30">
                    Attacker
                  </span>
                  <a
                    href={`${sandwichAttack.chain.explorer_url}/address/${sandwichAttack.attacker_address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0"
                    title={sandwichAttack.attacker_address}
                  >
                    <span className="px-2 py-1 rounded-md bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 font-mono text-sm text-slate-800 dark:text-slate-100 block max-w-[12rem] md:max-w-[16rem] break-all md:truncate">
                      {omitAddress(sandwichAttack.attacker_address)}
                    </span>
                  </a>
                </div>
              </div>

              {/* Victim */}
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={VictimLogo}
                    alt="Victim"
                    className="size-8 rounded-full ring-2 ring-white shadow"
                  />
                  <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-sky-500/10 to-emerald-500/10 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-500/30">
                    Victim
                  </span>
                  <a
                    href={`${sandwichAttack.chain.explorer_url}/address/${sandwichAttack.victim_address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0"
                  >
                    <span className="px-2 py-1 rounded-md bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 font-mono text-sm text-slate-800 dark:text-slate-100 block max-w-[12rem] md:max-w-[16rem] break-all md:truncate">
                      {omitAddress(sandwichAttack.victim_address)}
                    </span>
                  </a>
                </div>
              </div>

              {/* Defi Pool */}
              {sandwichAttack.defi_pool && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 min-w-0">
                    <Landmark className="size-8 text-slate-400 dark:text-slate-500" />
                    <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-500/10 to-indigo-500/10 text-violet-600 dark:text-violet-300 border border-violet-200/60 dark:border-violet-500/30">
                      DeFi Pool
                    </span>
                    <a
                      href={`${sandwichAttack.chain.explorer_url}/address/${sandwichAttack.defi_pool.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0"
                      title={sandwichAttack.defi_pool.address}
                    >
                      <span className="px-2 py-1 rounded-md bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 font-mono text-sm text-slate-800 dark:text-slate-100 block max-w-[12rem] md:max-w-[16rem] break-all md:truncate">
                        {omitAddress(sandwichAttack.defi_pool.address)}
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative group rounded-2xl p-[1px] bg-white shadow-lg hover:shadow-xl transition-shadow">
          <div className="rounded-2xl bg-white/90 dark:bg-slate-900/70 backdrop-blur p-5">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-gradient-to-r from-emerald-500" />
                <h3 className="text-lg font-semibold">Financials</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {/* Revenue */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200/60 dark:border-emerald-700/40">
                <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300">
                  <BanknoteArrowUp className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                    Attacker's Revenue
                  </div>
                  <div className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {numberToUSD(sandwichAttack.revenue_usd)}
                  </div>
                </div>
              </div>

              {/* Profit */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-700/40">
                <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                  <BanknoteArrowUp className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-blue-700 dark:text-blue-300">
                    Attacker's Profit
                  </div>
                  <div className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {numberToUSD(sandwichAttack.profit_usd)}
                  </div>
                </div>
              </div>

              {/* Harm */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200/60 dark:border-rose-700/40">
                <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-300">
                  <BanknoteArrowDown className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-rose-700 dark:text-rose-300">
                    Victim's Harm
                  </div>
                  <div className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {numberToUSD(sandwichAttack.harm_usd)}
                  </div>
                </div>
              </div>

              {/* Gas Fee */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  <Fuel className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Attacker's Gas Fee
                  </div>
                  <div className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                    {new Intl.NumberFormat("en-US", {
                      maximumFractionDigits: 6,
                    }).format(
                      Number(sandwichAttack.gas_fee_wei_attacker ?? 0) / 1e18
                    )}{" "}
                    {sandwichAttack.chain.native_symbol}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    ≈{" "}
                    {new Intl.NumberFormat("en-US", {
                      maximumFractionDigits: 0,
                    }).format(
                      Number(sandwichAttack.gas_fee_wei_attacker ?? 0)
                    )}{" "}
                    wei
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SwapCard
        title="Front Run Swap"
        swap={sandwichAttack.front_attack_swap}
        chain={sandwichAttack.chain}
        base_token0={
          sandwichAttack.defi_pool?.token0_id ===
            sandwichAttack.front_attack_swap.buy_token?.id || false
        }
      />
      <SwapCard
        title="Victim Swap"
        swap={sandwichAttack.victim_swap}
        chain={sandwichAttack.chain}
        base_token0={
          sandwichAttack.defi_pool?.token0_id ===
            sandwichAttack.front_attack_swap.buy_token?.id || false
        }
      />
      <SwapCard
        title="Back Run Swap"
        swap={sandwichAttack.back_attack_swap}
        chain={sandwichAttack.chain}
        base_token0={
          sandwichAttack.defi_pool?.token1_id ===
            sandwichAttack.front_attack_swap.buy_token?.id || false
        }
      />
    </div>
  );
};
