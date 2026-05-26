import { Home, Users, Building2, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Find Property",
    description: "Browse available listings and discover your perfect home in the Navarre area.",
    href: "#",
  },
  {
    icon: Users,
    title: "Find a REALTOR®",
    description: "Connect with certified real estate professionals who are members of the National Association of REALTORS.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Find an Affiliate",
    description: "Access our network of trusted real estate service providers and affiliates.",
    href: "#",
  },
  {
    icon: BarChart3,
    title: "Market Reports",
    description: "Stay informed with comprehensive local market data and trend analysis.",
    href: "#",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight">
            Everything you need for your real estate journey
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative bg-card border border-border rounded-lg p-8 lg:p-10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-medium text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
