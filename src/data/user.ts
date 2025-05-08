
export interface UserProfile {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export const currentUser: UserProfile = {
  id: "user-1",
  name: "João",
  role: "Desenvolvedor",
  avatar: "/placeholder.svg"
};
