import type { ColumnDef } from "@tanstack/react-table";
import type { SandwichAttackRead } from "@/types/api/sandwich_attack/sandwich_attack";
import type { ChainRead } from "@/types/api/chain/chain";

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
    id: "chain.name",
    header: "Chain",
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
      <span>
        <img
          src={row.original.chain.logo_url}
          alt={row.getValue("chain.name")}
          className="inline size-5 mr-1 rounded-full"
        />
        {row.original.chain.name}
      </span>
    ),
  },
  {
    id: "created_at",
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => new Date(row.getValue("created_at")).toLocaleString(),
    meta: {
      defaultVisible: false,
    },
  },
];
