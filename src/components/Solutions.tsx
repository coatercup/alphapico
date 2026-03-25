import { Card } from "@/components/ui/card";
import { Zap, BarChart3, Shield, Cpu } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Cpu,
      title: "Production Control System",
      description:
        "Real-time monitoring and control of manufacturing processes with AI-powered optimization and predictive maintenance.",
      features: ["Real-time Analytics", "Predictive Maintenance", "Auto-scaling"],
    },
    {
      icon: BarChart3,
      title: "Data Analytics Platform",
      description:
        "Comprehensive insights into production metrics, quality control, and operational efficiency with advanced reporting.",
      features: ["Custom Dashboards", "Real-time Reports", "Trend Analysis"],
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and streamline workflows to maximize productivity and minimize human error.",
      features: ["Process Automation", "Task Scheduling", "Integration APIs"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with compliance management for ISO, FDA, and industry-specific regulations.",
      features: ["Data Encryption", "Audit Logs", "Access Control"],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Comprehensive Solutions for Every Challenge
          </h2>
          <p className="text-lg text-foreground/70">
            Our integrated platform combines software excellence with factory
            automation expertise to deliver measurable results across your entire
            manufacturing operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-foreground/10 hover:border-primary/30 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {solution.title}
                </h3>

                <p className="text-foreground/70 mb-6">{solution.description}</p>

                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
