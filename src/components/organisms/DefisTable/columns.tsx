import type { ColumnDef } from "@tanstack/react-table";
import type { DefiRead } from "@/types/api/defi/defi";

type Row = DefiRead;

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
          className="inline size-5 mr-2 rounded-full"
        />
        {row.getValue("name")}
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
