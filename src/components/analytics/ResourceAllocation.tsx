
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend 
} from "recharts";

// Sample data for resource allocation
const generateResourceData = (projectId: string) => {
  return [
    { name: "Geração de Texto", value: 35, color: "#D4AF37" },
    { name: "Análise de Código", value: 25, color: "#4F6294" },
    { name: "Pesquisa de Dados", value: 20, color: "#28A745" },
    { name: "Design de UI", value: 15, color: "#6C757D" },
    { name: "Outros", value: 5, color: "#495057" }
  ];
};

const COLORS = ["#D4AF37", "#4F6294", "#28A745", "#6C757D", "#495057"];

interface ResourceAllocationProps {
  projectId: string;
}

export const ResourceAllocation = ({ projectId }: ResourceAllocationProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setData(generateResourceData(projectId));
      setIsLoading(false);
    }, 1000);
  }, [projectId]);

  return (
    <Card className="bg-olympus-card-bg border-slate-800">
      <CardHeader>
        <CardTitle>Alocação de Recursos</CardTitle>
        <CardDescription>Distribuição de recursos por tipo de tarefa</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-pulse text-olympus-text-secondary">Carregando dados...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      backgroundColor: "#0A0E1B", 
                      borderColor: "#333",
                      color: "#E5E5E5" 
                    }}
                  />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    payload={
                      data.map((item, index) => ({
                        id: item.name,
                        type: "square",
                        value: `${item.name} (${item.value}%)`,
                        color: item.color || COLORS[index % COLORS.length]
                      }))
                    }
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Detalhamento de Recursos</h3>
              <div className="space-y-4">
                {data.map((resource, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-olympus-text-primary">{resource.name}</span>
                      <span className="text-olympus-accent font-medium">{resource.value}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${resource.value}%`,
                          backgroundColor: resource.color 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
