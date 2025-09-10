import type { components, operations } from "@/types/api/base";

export type ChainListResponse = components["schemas"]["ChainListRead"];

export type ChainRead = components["schemas"]["ChainRead"];

export type ChainListRequestQuery =
  operations["chains_list_chains_chains_get"]["parameters"]["query"];
