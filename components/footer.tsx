import Link from "next/link"

const footerLinks = {
  services: [
    { label: "Find Property", href: "#" },
    { label: "Find a REALTOR®", href: "#" },
    { label: "Find an Affiliate", href: "#" },
    { label: "Market Reports", href: "#" },
  ],
  resources: [
    { label: "Member Login", href: "#" },
    { label: "Join NABOR", href: "#" },
    { label: "Ethics & Standards", href: "#" },
    { label: "Issue with a REALTOR®?", href: "#" },
  ],
  about: [
    { label: "About NABOR", href: "#" },
    { label: "Board of Directors", href: "#" },
    { label: "News & Events", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-serif font-bold tracking-tight">
                NABOR
              </span>
              <p className="text-xs text-primary-foreground/70 tracking-wide uppercase mt-1">
                Navarre Area Board of REALTORS®
              </p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Serving the Navarre community with excellence in real estate since 1985.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">
              About
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Navarre Area Board of REALTORS®. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
