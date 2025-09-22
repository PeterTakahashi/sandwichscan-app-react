import type { components, operations } from "@/types/api/base";

export type TokenListResponse = components["schemas"]["TokenListRead"];

export type TokenRead =
  components["schemas"]["app__v1__schemas__token__read__TokenRead"];

export type TokenListRequestQuery =
  operations["tokens_list_tokens_tokens_get"]["parameters"]["query"];
