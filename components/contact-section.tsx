import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    label: "Call",
    value: "(850) 939-2121",
    href: "tel:+18509392121",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@navarrerealtors.org",
    href: "mailto:info@navarrerealtors.org",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Navarre, FL",
    href: "#",
  },
  {
    icon: Facebook,
    label: "Follow",
    value: "@NABORRealtors",
    href: "#",
  },
  {
    icon: MessageCircle,
    label: "Feedback",
    value: "Share your thoughts",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight">
            Connect with us
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => (
            <Link
              key={index}
              href={method.href}
              className="group flex flex-col items-center text-center p-6 rounded-lg hover:bg-card border border-transparent hover:border-border transition-all"
            >
              <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <method.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                {method.label}
              </span>
              <span className="text-sm font-medium text-foreground">
                {method.value}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
