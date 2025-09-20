import { type SwapRead } from "@/types/api/swap/swap";
import { type ChainRead } from "@/types/api/chain/chain";
import { TokenIcon } from "@/components/atoms/TokenIcon";

type Props = {
  title: string;
  chain: ChainRead;
  swap: SwapRead;
  base_token0: boolean;
};

const MAX_DISPLAY_DIGITS = 3;

function SwapCard({ title, chain, swap, base_token0 = true }: Props) {
  const amountIn = base_token0 ? swap.amount1_in_raw : swap.amount0_in_raw;
  const amountOut = base_token0 ? swap.amount0_out_raw : swap.amount1_out_raw;

  return (
    <div className="relative group rounded-2xl p-[1px] bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="rounded-2xl bg-white/90 dark:bg-slate-900/70 backdrop-blur p-5">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-300" />
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`${chain.explorer_url}/tx/${swap.transaction.tx_hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
              title="View on Explorer"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
              </svg>
              View Tx
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-4">
          <div className="flex items-center gap-2 min-w-0">
            <TokenIcon token={swap.sell_token} />
            <span className="truncate px-2 py-1 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100">
              {swap.sell_token ? swap.sell_token.symbol : "Unknown"}
            </span>
          </div>

          <svg
            className="size-5 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 12h18m-6-6 6 6-6 6" />
          </svg>

          <div className="flex items-center gap-2 min-w-0">
            <TokenIcon token={swap.buy_token} />
            <span className="truncate px-2 py-1 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100">
              {swap.buy_token ? swap.buy_token.symbol : "Unknown"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-700/30">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 mb-1">
              Sell
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-200">
              {(() => {
                const v =
                  Number(amountIn) / 10 ** (swap.sell_token?.decimals || 18);
                return isFinite(v)
                  ? v.toLocaleString(undefined, {
                      maximumFractionDigits: MAX_DISPLAY_DIGITS,
                    })
                  : "-";
              })()}{" "}
              <span className="text-sm font-medium text-gray-700/80 dark:text-gray-300/80">
                {swap.sell_token?.symbol}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-700/30">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 mb-1">
              Buy
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-200">
              {(() => {
                const v =
                  Number(amountOut) / 10 ** (swap.buy_token?.decimals || 18);
                return isFinite(v)
                  ? v.toLocaleString(undefined, {
                      maximumFractionDigits: MAX_DISPLAY_DIGITS,
                    })
                  : "-";
              })()}{" "}
              <span className="text-sm font-medium text-gray-700/80 dark:text-gray-300/80">
                {swap.buy_token?.symbol}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
            <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono">
              {(() => {
                const h = swap.transaction.tx_hash || "";
                return h ? `${h.slice(0, 10)}...${h.slice(-8)}` : "-";
              })()}
            </span>
            <a
              href={`${chain.explorer_url}/tx/${swap.transaction.tx_hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
            >
              Explorer
              <svg
                className="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SwapCard };
