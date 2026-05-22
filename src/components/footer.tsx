import Link from "next/link";
import { Mail, MapPin, Phone, Globe, MessageCircle, Camera, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-card/50 border-t border-border mt-auto overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group inline-block">
              <span className="font-heading font-bold text-2xl tracking-tight">
                InAmigos
                <span className="text-primary block text-sm font-normal tracking-normal uppercase mt-1">Foundation</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
              A youth-led NGO dedicated to creating sustainable impact through education, environmental conservation, and social empowerment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/inamigos.inamigos" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/inamigos" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/inamigos/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Camera className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/inamigos-foundation/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                <Briefcase className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link href="/internships" className="hover:text-primary transition-colors">Internships</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/volunteer" className="hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Impact Dashboard</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-foreground">Our Projects</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/projects#vikas" className="hover:text-primary transition-colors">Project VIKAS</Link></li>
              <li><Link href="/projects#prakriti" className="hover:text-primary transition-colors">Project PRAKRITI</Link></li>
              <li><Link href="/projects#seva" className="hover:text-primary transition-colors">Project SEVA</Link></li>
              <li><Link href="/projects#udaan" className="hover:text-primary transition-colors">Project UDAAN</Link></li>
              <li><Link href="/projects#jeev" className="hover:text-primary transition-colors">Project JEEV</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>New Delhi, India<br/>Registered under Section 8, 80G & 12A.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@inamigosfoundation.org.in" className="hover:text-primary transition-colors">info@inamigosfoundation.org.in</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
