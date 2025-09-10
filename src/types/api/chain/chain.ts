import type { components, operations } from "@/types/api/base";

export type ChainListResponse = components["schemas"]["ChainListRead"];

export type ChainRead = components["schemas"]["ChainRead"];

export type ChainListRequestQuery =
  operations["user_api_keys_list_user_api_keys_user_api_keys_get"]["parameters"]["query"];
