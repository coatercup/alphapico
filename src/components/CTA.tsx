import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-foreground/5 via-primary/5 to-foreground/5 border-y border-foreground/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Transform Your Manufacturing?
          </h2>

          <p className="text-xl text-foreground/70 mb-8">
            Join hundreds of manufacturers who have already increased efficiency,
            reduced costs, and improved quality with Alpha Pico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Schedule a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:bg-foreground/5"
            >
              Download Brochure
            </Button>
          </div>

          <p className="text-sm text-foreground/50 mt-8">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
