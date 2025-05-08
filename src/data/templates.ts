
export interface Template {
  id: string;
  name: string;
  description: string;
  icon: "globe" | "smartphone" | "shopping-cart" | "chart-bar";
}

export const templates: Template[] = [
  {
    id: "template-1",
    name: "Website",
    description: "Website responsivo com múltiplas páginas",
    icon: "globe"
  },
  {
    id: "template-2",
    name: "Aplicativo Mobile",
    description: "App para iOS e Android",
    icon: "smartphone"
  },
  {
    id: "template-3",
    name: "E-commerce",
    description: "Loja online completa",
    icon: "shopping-cart"
  },
  {
    id: "template-4",
    name: "Dashboard",
    description: "Painel administrativo",
    icon: "chart-bar"
  }
];
