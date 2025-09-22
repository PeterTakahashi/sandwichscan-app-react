import type { ColumnDef } from "@tanstack/react-table";
import type { DefiPoolRead } from "@/types/api/defi_pool/defi_pool";
import type { ChainRead } from "@/types/api/chain/chain";

type Row = DefiPoolRead;

export const buildColumns = ({
  chains,
}: {
  chains: ChainRead[];
}): ColumnDef<Row>[] => [
  {
    id: "address",
    header: "Address",
    accessorKey: "address",
  },
  {
    id: "fee_tier_bps",
    header: "Fee Tier (bps)",
    accessorKey: "fee_tier_bps",
    cell: ({ row }) => `${(row.getValue("fee_tier_bps") as number) / 10000} %`,
  },
  {
    id: "tokens",
    header: "Tokens",
    accessorKey: "tokens",
    cell: ({ row }) => (
      <span>
        {row.original.token0.symbol} / {row.original.token1.symbol}
      </span>
    ),
  },
  {
    id: "chain",
    header: "Chain",
    accessorKey: "chain_name",
    meta: {
      filterType: "checkbox",
      filterKey: "chain_id__in",
      filterOptions: chains.map((chain) => ({
        label: chain.name,
        value: chain.id,
      })),
    },
    cell: ({ row }) => (
      <span>
        <img
          src={row.original.chain.logo_url}
          alt={row.original.chain.name}
          className="inline size-5 mr-1 rounded-full"
        />
        {row.original.chain.name}
      </span>
    ),
  },
];
