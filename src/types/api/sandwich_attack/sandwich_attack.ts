import type { components, operations } from "@/types/api/base";

export type SandwichAttackListResponse =
  components["schemas"]["SandwichAttackListRead"];

export type SandwichAttackRead = components["schemas"]["SandwichAttackRead"];

export type SandwichAttackReadOnList =
  components["schemas"]["SandwichAttackReadOnList"];

export type SandwichAttackListRequestQuery =
  operations["sandwich_attacks_list_sandwich_attacks_sandwich_attacks_get"]["parameters"]["query"];

export type SandwichAttackReadByMonth =
  components["schemas"]["SandwichAttackReadByMonth"];
