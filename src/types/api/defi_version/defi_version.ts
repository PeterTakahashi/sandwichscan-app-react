import type { components, operations } from "@/types/api/base";

export type DefiVersionListResponse =
  components["schemas"]["DefiVersionListRead"];

export type DefiVersionRead = components["schemas"]["DefiVersionRead"];

export type DefiVersionListRequestQuery =
  operations["defi_versions_list_defi_versions_defi_versions_get"]["parameters"]["query"];
