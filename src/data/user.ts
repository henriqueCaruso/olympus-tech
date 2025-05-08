
export interface UserProfile {
  id: string;
  name: string;
  role: string;
  email: string;
  company: string;
  bio?: string;
  avatar?: string;
}

export const currentUser: UserProfile = {
  id: "user-1",
  name: "João",
  role: "Desenvolvedor",
  email: "joao@example.com",
  company: "Olympus Tech",
  bio: "Desenvolvedor full-stack com experiência em React e TypeScript.",
  avatar: "/placeholder.svg"
};
