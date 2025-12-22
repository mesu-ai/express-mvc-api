import { UserT } from "@/types/user";

export const users: UserT[] = [
  {
    id: 1,
    name: "momin",
    username: "momin12",
    role: "admin",
    permissions: [
      "dashboard.index",
      "dashboard.index.view.action",
      "dashboard.index.delete.action",
      "orders.index",

      "products.index",
      "products.pending",
      "products.approved",
      "products.create",
      "products.create.edit.action",
      "products.create.view.action",

      "products.pending.update.action",
      "products.approved.update.action",

      "access-control.roles-permissions",
    ],
  },
  {
    id: 2,
    username: "sumin12",
    name: "sumin",
    role: "support",
    permissions: [
      "dashboard.index",
      "dashboard.index.view.action",

      "orders.index",
      "products.index",
      // "products.create",
      "products.pending",
      "products.approved",
      "products.low-stock",
      "products.rejected",

      // "products.create.create",
      "products.pending.update.action",
      "products.pending.delete.action",
      "products.approved.update.action",
      "products.approved.delete.action",
      "products.low-stock.update.action",
      "products.low-stock.delete.action",
      "products.rejected.update.action",
      "products.rejected.delete.action",
    ],
  },

  {
    id: 3,
    name: "jomin",
    username: "jomin12",
    role: "vendor",
    permissions: [
      "dashboard.index",
      "dashboard.index.delete.action",

      "products.index",
      "products.create",
      "products.low-stock",
      "products.rejected",

      "products.create.create.action",
      "products.low-stock.update.action",
      "products.rejected.update.action",

      "access-control.index",
      "access-control.employee-list",
      "access-control.roles-permissions",
      "access-control.roles-permissions.create.action",
      "access-control.roles-permissions.update.action",

      "access-control.roles-permissions.create",
    ],
  },
];
