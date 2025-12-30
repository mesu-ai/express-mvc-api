import { RoleT } from "@/types/role";

export const roles: RoleT[] = [
  {
    id: 1,
    role: "super admin",
    status: 'Y',
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
      "access-control.employees",
      "access-control.roles",
      "access-control.roles.create.action",
      "access-control.roles.update.action",

      "access-control.roles.create",
      "access-control.roles.edit",
    ],
  },
  {
    id: 2,
    role: "admin",
    status: 'N',
    permissions: [
      "dashboard.index",
      "dashboard.index.delete.action",

      "products.low-stock",
      "products.rejected",

      "products.low-stock.update.action",
      "products.rejected.update.action",

      "access-control.index",
      "access-control.employees",
      "access-control.roles",
      "access-control.roles.create.action",
      "access-control.roles.update.action",

      "access-control.roles.create",
      "access-control.roles.edit",
    ],
  },
  {
    id: 3,
    role: "vendor",
    status: 'Y',
    permissions: [
      "dashboard.index",
      "dashboard.index.delete.action",

      "products.index",
      "products.create",
     
      "products.create.create.action",
      "products.low-stock.update.action",
      "products.rejected.update.action",

      "access-control.index",
      "access-control.employees",
      "access-control.roles",
      "access-control.roles.create.action",
      "access-control.roles.update",
      "access-control.roles.create",
      "access-control.roles.edit",
    ],
  },
  {
    id: 4,
    role: "logestic",
    status: 'N',
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
      "access-control.employees",
      "access-control.roles",
      "access-control.roles.create.action",
      "access-control.roles.update.action",

      "access-control.roles.create",
      "access-control.roles.edit",
    ],
  },
  {
    id: 5,
    role: "accountant",
    status: 'N',
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
      "access-control.employees",
      "access-control.roles",
      "access-control.roles.create.action",
      "access-control.roles.update.action",

      "access-control.roles.create",
      "access-control.roles.edit",
    ],
  },
];
