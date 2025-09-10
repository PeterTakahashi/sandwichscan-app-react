import type { ColumnDef } from "@tanstack/react-table";
import type { ChainRead } from "@/types/api/chain/chain";

type Row = ChainRead;

export const buildColumns = (): ColumnDef<Row>[] => [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    meta: {
      defaultVisible: false,
    },
  },
  {
    id: "chain_id",
    header: "Chain ID",
    accessorKey: "chain_id",
  },
  {
    id: "native_symbol",
    header: "Native Symbol",
    accessorKey: "native_symbol",
  },
  {
    id: "native_decimals",
    header: "Native Decimals",
    accessorKey: "native_decimals",
  },
  {
    id: "created_at",
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => new Date(row.getValue("created_at")).toLocaleString(),
  },
];
