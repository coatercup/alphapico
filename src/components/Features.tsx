import { CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      category: "Performance",
      items: [
        "Sub-millisecond response times",
        "Handles 10,000+ concurrent operations",
        "99.99% uptime SLA",
        "Distributed architecture",
      ],
    },
    {
      category: "Integration",
      items: [
        "Seamless ERP integration",
        "IoT device connectivity",
        "Legacy system compatibility",
        "Custom API endpoints",
      ],
    },
    {
      category: "Intelligence",
      items: [
        "Machine learning optimization",
        "Anomaly detection",
        "Predictive analytics",
        "Automated insights",
      ],
    },
    {
      category: "Support",
      items: [
        "24/7 technical support",
        "Dedicated account manager",
        "Custom training programs",
        "Regular system updates",
      ],
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Why Choose Alpha Pico?
          </h2>
          <p className="text-lg text-foreground/70">
            Built for manufacturers who demand reliability, scalability, and
            continuous innovation. Our platform has been trusted by industry
            leaders worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 pb-3 border-b-2 border-primary/30">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
