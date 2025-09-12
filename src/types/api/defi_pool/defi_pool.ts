import type { components, operations } from "@/types/api/base";

export type DefiPoolListResponse = components["schemas"]["DefiPoolListRead"];

export type DefiPoolRead = components["schemas"]["DefiPoolRead"];

export type DefiPoolListRequestQuery =
  operations["defi_pools_list_defi_pools_defi_pools_get"]["parameters"]["query"];
