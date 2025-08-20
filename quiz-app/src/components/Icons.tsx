"use client";
import { Sparkles, TrendingUp, Users, Code, BarChart3, Shield } from "lucide-react";

export function MajorIcon({ name, className }: { name: "sparkles" | "trending" | "users" | "code" | "chart" | "shield"; className?: string }) {
  switch (name) {
    case "sparkles":
      return <Sparkles className={className ?? "w-8 h-8"} />;
    case "trending":
      return <TrendingUp className={className ?? "w-8 h-8"} />;
    case "users":
      return <Users className={className ?? "w-8 h-8"} />;
    case "code":
      return <Code className={className ?? "w-8 h-8"} />;
    case "chart":
      return <BarChart3 className={className ?? "w-8 h-8"} />;
    case "shield":
      return <Shield className={className ?? "w-8 h-8"} />;
    default:
      return null;
  }
}

