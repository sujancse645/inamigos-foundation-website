"use client";

import { useTheme } from "next-themes";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2018", impact: 1000 },
  { year: "2019", impact: 5000 },
  { year: "2020", impact: 15000 },
  { year: "2021", impact: 25000 },
  { year: "2022", impact: 35000 },
  { year: "2023", impact: 50000 },
];

export function ImpactChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (typeof document !== "undefined" && document.documentElement.classList.contains("dark"));
  
  const colors = {
    primary: isDark ? "#06b6d4" : "#10b981", // Cyan for dark, Emerald for light
    background: isDark ? "rgba(6, 182, 212, 0.1)" : "rgba(16, 185, 129, 0.1)",
  };

  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colors.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="year" stroke="currentColor" className="text-foreground/50 text-xs" tickLine={false} />
          <YAxis stroke="currentColor" className="text-foreground/50 text-xs" tickLine={false} axisLine={false} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="opacity-10" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? "#071120" : "#ffffff",
              borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              borderRadius: "8px",
              color: isDark ? "#ffffff" : "#000000"
            }} 
          />
          <Area
            type="monotone"
            dataKey="impact"
            stroke={colors.primary}
            fillOpacity={1}
            fill="url(#colorImpact)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
