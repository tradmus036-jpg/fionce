interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "indigo" | "emerald" | "slate" | "violet";
}

const variants = {
  default: "bg-slate-100 text-slate-700",
  indigo: "bg-indigo-100 text-indigo-700",
  emerald: "bg-emerald-100 text-emerald-700",
  slate: "bg-slate-800 text-slate-100",
  violet: "bg-violet-100 text-violet-700",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
