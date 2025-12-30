export interface UserT {
  name: string;
  username: string;
  employeeId: string;
  mobileNo: string;
  email: string;
  nid: string;
  photo: File | string;
  depertment: string;
  role: string;
  gender: "femele" | "male";
  status: "Y" | "N";
  permissions: string[];
  // token: { access: string; refresh: string };
}
