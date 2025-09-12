import type { components, operations } from "@/types/api/base";

export type DefiListResponse = components["schemas"]["DefiListRead"];

export type DefiRead = components["schemas"]["DefiRead"];

export type DefiListRequestQuery =
  operations["defis_list_defis_defis_get"]["parameters"]["query"];
