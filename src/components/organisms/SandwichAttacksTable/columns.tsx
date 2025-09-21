import type { ColumnDef } from "@tanstack/react-table";
import type { SandwichAttackRead } from "@/types/api/sandwich_attack/sandwich_attack";
import type { ChainRead } from "@/types/api/chain/chain";
import type { DefiVersionRead } from "@/types/api/defi_version/defi_version";
import { Button } from "@/components/atoms/Button";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { numberToUSD } from "@/lib/utils/numberToUSD";

type Row = SandwichAttackRead;

export const buildColumns = ({
  chains,
  defi_versions,
}: {
  chains: ChainRead[];
  defi_versions: DefiVersionRead[];
}): ColumnDef<Row>[] => [
  {
    id: "attacker_address",
    header: "Attacker Address",
    accessorKey: "attacker_address",
    cell: ({ row }) => row.original.attacker_address,
  },
  {
    id: "victim_address",
    header: "Victim Address",
    accessorKey: "victim_address",
    cell: ({ row }) => row.original.victim_address,
  },
  {
    id: "token_pair",
    header: "Token Pair",
    accessorKey: "token_pair",
    cell: ({ row }) => (
      <span>
        {row.original.front_attack_swap.sell_token?.symbol}/
        {row.original.front_attack_swap.buy_token?.symbol}
      </span>
    ),
  },
  {
    id: "revenue_usd",
    header: "Revenue (USD)",
    accessorKey: "revenue_usd",
    cell: ({ row }) => numberToUSD(row.original.revenue_usd),
  },
  {
    id: "cost_usd",
    header: "Cost (USD)",
    accessorKey: "cost_usd",
    cell: ({ row }) => numberToUSD(row.original.cost_usd),
  },
  {
    id: "profit_usd",
    header: "Profit (USD)",
    accessorKey: "profit_usd",
    cell: ({ row }) => numberToUSD(row.original.profit_usd),
  },
  {
    id: "harm_usd",
    header: "Harm (USD)",
    accessorKey: "harm_usd",
    cell: ({ row }) => numberToUSD(row.original.harm_usd),
  },
  {
    id: "block_timestamp",
    header: "Block Timestamp",
    accessorKey: "block_timestamp",
    meta: {
      filterType: "dateRange",
      filterStartDateKey: "block_timestamp__gte",
      filterEndDateKey: "block_timestamp__lte",
    },
    cell: ({ row }) =>
      new Date(
        row.original.front_attack_swap.transaction.block_timestamp
      ).toLocaleString(),
  },
  {
    id: "defi_version",
    header: "DeFi Version",
    accessorKey: "defi_version",
    meta: {
      filterType: "checkbox",
      filterKey: "defi_version_id__in",
      filterOptions:
        defi_versions.map((defi_version) => ({
          label: defi_version.name,
          value: defi_version.id,
        })) || [],
    },
    cell: ({ row }) => (
      <div>
        <img
          src={row.original.defi_version.defi.logo_url}
          alt={row.original.defi_version.name}
          className="inline size-5 mr-1 rounded-full"
        />
        {row.original.defi_version.name}
      </div>
    ),
  },
  {
    id: "chain.name",
    header: "Blockchain",
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
      <div>
        <img
          src={row.original.chain.logo_url}
          alt={row.getValue("chain.name")}
          className="inline size-5 mr-1 rounded-full"
        />
        {row.original.chain.name}
      </div>
    ),
  },
  {
    id: "detail_url",
    header: "Detail URL",
    accessorKey: "id",
    meta: {
      defaultVisible: false,
    },
    cell: ({ row }) => "/sandwich-attacks/" + row.original.id,
  },

  {
    header: "Detail",
    accessorKey: "Detail",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="h-8 w-8 p-0 border-1"
        >
          <Link to={`/sandwich-attacks/${rowData.id}`}>
            <span className="sr-only">View</span>
            <Eye className="h-4 w-4" />
          </Link>
        </Button>
      );
    },
  },
];
