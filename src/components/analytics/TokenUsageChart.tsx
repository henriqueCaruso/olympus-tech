
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";

// Sample data for token usage over time
const generateTokenData = (projectId: string) => {
  const data = [];
  const now = new Date();
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);
    data.push({
      date: date.toLocaleDateString('pt-BR'),
      tokens: Math.floor(Math.random() * 5000) + 1000,
      cost: parseFloat((Math.random() * 5 + 2).toFixed(2))
    });
  }
  return data;
};

interface TokenUsageChartProps {
  projectId: string;
}

export const TokenUsageChart = ({ projectId }: TokenUsageChartProps) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setData(generateTokenData(projectId));
      setIsLoading(false);
    }, 1000);
  }, [projectId]);

  return (
    <Card className="bg-olympus-card-bg border-slate-800">
      <CardHeader>
        <CardTitle>Uso de Tokens</CardTitle>
        <CardDescription>Acompanhe o consumo de tokens ao longo do tempo</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-pulse text-olympus-text-secondary">Carregando dados...</div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="date" 
                tick={{ fill: "#E5E5E5" }}
                tickLine={{ stroke: "#555" }}
                axisLine={{ stroke: "#555" }}
              />
              <YAxis 
                tick={{ fill: "#E5E5E5" }}
                tickLine={{ stroke: "#555" }}
                axisLine={{ stroke: "#555" }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#0A0E1B", 
                  borderColor: "#333",
                  color: "#E5E5E5" 
                }}
                labelStyle={{ color: "#E5E5E5" }}
                itemStyle={{ color: "#D4AF37" }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="tokens" 
                name="Tokens" 
                stroke="#D4AF37" 
                fill="#D4AF37" 
                fillOpacity={0.3}
              />
              <Area 
                type="monotone" 
                dataKey="cost" 
                name="Custo (R$)" 
                stroke="#4F6294" 
                fill="#4F6294" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};
