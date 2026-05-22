"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ImpactChart } from "@/components/charts/impact-chart";
import { Users, Sprout, HandHeart, CalendarDays } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    { title: "Total Impact", value: "50,240", icon: Users, change: "+12%" },
    { title: "Trees Planted", value: "20,105", icon: Sprout, change: "+8%" },
    { title: "Active Volunteers", value: "5,432", icon: HandHeart, change: "+24%" },
    { title: "Campaigns Run", value: "128", icon: CalendarDays, change: "+3%" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-glow">Impact Dashboard</h1>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Live analytics and statistics of our ongoing initiatives and community impact across all active projects.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard glowColor="primary" className="flex items-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <metric.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium mb-1">{metric.title}</p>
                  <div className="flex items-baseline space-x-2">
                    <h3 className="text-2xl font-bold font-heading">{metric.value}</h3>
                    <span className="text-xs text-emerald-500 font-bold">{metric.change}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <GlassCard glowColor="secondary" className="h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold font-heading">Beneficiary Growth</h3>
                <select className="bg-background/50 border border-border rounded-md px-3 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Yearly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <ImpactChart />
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard glowColor="accent" className="h-full">
              <h3 className="text-xl font-bold font-heading mb-6">Recent Campaigns</h3>
              <div className="space-y-6">
                {[
                  { name: "Project PRAKRITI Drive", date: "Oct 12, 2023", status: "Completed" },
                  { name: "Women Empowerment Workshop", date: "Nov 05, 2023", status: "Active" },
                  { name: "Winter Cloth Distribution", date: "Dec 01, 2023", status: "Planning" },
                ].map((campaign, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border/50 last:border-0 pb-4 last:pb-0">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{campaign.name}</h4>
                      <p className="text-xs text-foreground/50">{campaign.date}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      campaign.status === "Active" ? "bg-emerald-500/10 text-emerald-500" :
                      campaign.status === "Completed" ? "bg-blue-500/10 text-blue-500" :
                      "bg-amber-500/10 text-amber-500"
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
