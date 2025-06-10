
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-xl mb-4">
              TechLine<span className="text-[#0070F3]">AI</span>
            </h3>
            <p className="text-background/80 mb-4 max-w-md">
              Transforming businesses through intelligent automation solutions. 
              We help companies streamline processes and unlock their full potential with AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-[#0070F3] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-background/60 hover:text-[#0070F3] transition-colors">
                Twitter
              </a>
              <a href="#" className="text-background/60 hover:text-[#0070F3] transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-[#0070F3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-[#0070F3] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-[#0070F3] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-[#0070F3] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>hello@techline-ai.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 TechLineAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
