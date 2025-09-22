import type { ColumnDef } from "@tanstack/react-table";
import type { ChainRead } from "@/types/api/chain/chain";

type Row = ChainRead;

export const buildColumns = (): ColumnDef<Row>[] => [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <span>
        <img
          src={(row.original as Row).logo_url}
          alt={row.getValue("name")}
          className="inline size-5 mr-1 rounded-full"
        />
        {row.getValue("name")}
      </span>
    ),
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
];
