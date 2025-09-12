import type { ColumnDef } from "@tanstack/react-table";
import type { DefiPoolRead } from "@/types/api/defi_pool/defi_pool";

type Row = DefiPoolRead;

export const buildColumns = (): ColumnDef<Row>[] => [
  {
    id: "address",
    header: "Address",
    accessorKey: "address",
  },
  {
    id: "fee_tier_bps",
    header: "Fee Tier (bps)",
    accessorKey: "fee_tier_bps",
    cell: ({ row }) => `${(row.getValue("fee_tier_bps") as number) / 1000} %`,
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
