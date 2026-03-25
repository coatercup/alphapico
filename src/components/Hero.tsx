import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663376376525/EE5vDZo7cCzFPzNct7fZWV/hero-manufacturing-floor-VpjnFbYciSZGJwWty7bhnC.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-primary">
              Advanced Manufacturing Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Smart Factory Automation for Modern Manufacturing
          </h1>

          <p className="text-lg md:text-xl text-foreground/75 mb-8 leading-relaxed">
            Streamline your production with our intelligent software and factory
            automation systems. Increase efficiency, reduce downtime, and maximize
            profitability with precision-engineered solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:bg-foreground/5"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-16 pt-8 border-t border-foreground/10">
            <div>
              <div className="text-3xl font-bold text-primary">45%</div>
              <p className="text-sm text-foreground/60">Avg. Efficiency Gain</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-sm text-foreground/60">System Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
