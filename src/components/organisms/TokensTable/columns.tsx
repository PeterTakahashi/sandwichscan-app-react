import type { ColumnDef } from "@tanstack/react-table";
import type { TokenRead } from "@/types/api/token/token";
import type { ChainRead } from "@/types/api/chain/chain";

type Row = TokenRead;

const DEFAULT_LOGO_URL =
  "https://raw.githubusercontent.com/PeterTakahashi/crypto-logos/refs/heads/main/undefined.png";

export const buildColumns = ({
  chains,
}: {
  chains: ChainRead[];
}): ColumnDef<Row>[] => [
  {
    id: "token_type",
    header: "Type",
    accessorKey: "token_type",
  },
  {
    id: "address",
    header: "Address",
    accessorKey: "address",
  },
  {
    id: "symbol",
    header: "Symbol",
    accessorKey: "symbol",
    cell: ({ row }) => {
      return (
        <span>
          <img
            src={row.original.logo_url ?? DEFAULT_LOGO_URL}
            alt={row.getValue("symbol")}
            className="inline size-5 mr-1 rounded-full"
          />
          {row.original.symbol}
        </span>
      );
    },
  },
  {
    id: "decimals",
    header: "Decimals",
    accessorKey: "decimals",
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
