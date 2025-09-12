import type { ColumnDef } from "@tanstack/react-table";
import type { DefiVersionRead } from "@/types/api/defi_version/defi_version";

type Row = DefiVersionRead;

export const buildColumns = (): ColumnDef<Row>[] => [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <span>
        <img
          src={(row.original as Row).defi.logo_url}
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
