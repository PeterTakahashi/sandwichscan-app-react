import type { ColumnDef } from "@tanstack/react-table";
import type { SandwichAttackRead } from "@/types/api/sandwich_attack/sandwich_attack";
import type { ChainRead } from "@/types/api/chain/chain";
import { Button } from "@/components/atoms/Button";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

type Row = SandwichAttackRead;

export const buildColumns = ({
  chains,
}: {
  chains: ChainRead[];
}): ColumnDef<Row>[] => [
  {
    id: "attacker_address",
    header: "Attacker Address",
    accessorKey: "attacker_address",
  },
  {
    id: "victim_address",
    header: "Victim Address",
    accessorKey: "victim_address",
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
    accessorKey: "revenue_base_raw",
    cell: ({ row }) =>
      `$${row.original.revenue_base_raw / 10 ** (row.original.base_token?.decimals || 18)}`,
  },
  {
    id: "harm_usd",
    header: "Harm (USD)",
    accessorKey: "harm_base_raw",
    cell: ({ row }) =>
      `$${row.original.harm_base_raw / 10 ** (row.original.base_token?.decimals || 18)}`,
  },
  {
    id: "block_timestamp",
    header: "Block Timestamp",
    accessorKey: "block_timestamp",
    cell: ({ row }) =>
      new Date(
        row.original.front_attack_swap.transaction.block_timestamp
      ).toLocaleString(),
  },
  {
    id: "chain.name",
    header: "Blockchain",
    accessorKey: "chain.name",
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
