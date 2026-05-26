import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Member of the National Association of REALTORS®",
  "Strict code of ethics and professional standards",
  "Local market expertise and community knowledge",
  "Comprehensive real estate resources and tools",
]

export function AboutSection() {
  return (
    <section id="find-realtor" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What is a REALTOR®?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-6">
              A real estate professional you can trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A REALTOR® is a real estate agent who is a member of the National Association of REALTORS®. They adhere to a strict code of ethics and are committed to providing the highest level of service to their clients.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="rounded-full px-8">
              Find a REALTOR® Today
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-primary">R</span>
                  </div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">REALTOR®</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    {"\"A real estate agent who is a member of the National Association of REALTORS\""}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
