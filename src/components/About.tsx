export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-xl"
              style={{
                backgroundImage:
                  "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663376376525/EE5vDZo7cCzFPzNct7fZWV/industrial-precision-JDN4tvTbTz2r4UAcSXze8Q.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingBottom: "100%",
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Engineered for Excellence
            </h2>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Alpha Pico was founded on a simple principle: manufacturing
              deserves better technology. With over 15 years of industry
              experience, our team combines deep manufacturing expertise with
              cutting-edge software engineering.
            </p>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              We've helped hundreds of manufacturers across industries—from
              automotive to electronics to pharmaceuticals—transform their
              operations and achieve unprecedented efficiency gains.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-lg">15+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Years of Experience
                  </h4>
                  <p className="text-foreground/60">
                    Serving the manufacturing industry
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
