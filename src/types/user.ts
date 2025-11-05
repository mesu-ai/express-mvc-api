export interface UserT {
  id: number;
  name: string;
  username: string;
  role: 'admin' | 'vendor' | 'support' ;
  // token: { access: string; refresh: string };
  permissions: string[]; // e.g., ['products.read', 'users.create']
}