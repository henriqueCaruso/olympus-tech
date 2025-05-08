
export interface Metric {
  id: string;
  name: string;
  value: number;
  max: number;
  unit: string;
}

export const metrics: Metric[] = [
  {
    id: "metric-1",
    name: "Tokens Utilizados",
    value: 125843,
    max: 250000,
    unit: ""
  },
  {
    id: "metric-2",
    name: "Projetos Ativos",
    value: 3,
    max: 5,
    unit: ""
  },
  {
    id: "metric-3",
    name: "Economia de Tempo",
    value: 47,
    max: 100,
    unit: "%"
  }
];
