export interface RoleT {
  id: number;
  role: string;
  status: 'Y' | 'N';
  permissions: string[];
}
