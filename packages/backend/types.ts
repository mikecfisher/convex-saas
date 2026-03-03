import { Doc } from "@cvx/_generated/dataModel";
import { PlanKey } from "@cvx/schema";

export type User = Doc<"users"> & {
  avatarUrl?: string;
  subscription?: Doc<"subscriptions"> & {
    planKey: PlanKey;
  };
};
