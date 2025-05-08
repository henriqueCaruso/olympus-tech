
export interface Template {
  id: string;
  name: string;
  description: string;
  icon: "globe" | "smartphone" | "shopping-cart" | "chart-bar";
  category: string;
}

export const templates: Template[] = [
  {
    id: "template-1",
    name: "Website",
    description: "Website responsivo com múltiplas páginas",
    icon: "globe",
    category: "Web"
  },
  {
    id: "template-2",
    name: "Aplicativo Mobile",
    description: "App para iOS e Android",
    icon: "smartphone",
    category: "Mobile"
  },
  {
    id: "template-3",
    name: "E-commerce",
    description: "Loja online completa",
    icon: "shopping-cart",
    category: "Web"
  },
  {
    id: "template-4",
    name: "Dashboard",
    description: "Painel administrativo",
    icon: "chart-bar",
    category: "Analytics"
  }
];
