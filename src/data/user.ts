import { UserT } from "@/types/user";


export const users:UserT[] = [
  {
    id: 1,
    username: "kamal12",
    name: "kamal",
    role: "admin",
    permissions: ["products.read", "products.create"],
  },
  {
    id: 1,
    name: "momin",
    username: "momin12",
    role: "support",
    permissions: ["products.read", "products.create"],
  },
  {
    id: 1,
    name: "jomin",
    username: "jomin12",
    role: "vendor",
    permissions: ["products.read", "products.create"],
  },
];
