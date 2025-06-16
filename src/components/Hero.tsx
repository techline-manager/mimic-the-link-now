
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="relative block mt-20 text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-20 mt-6 leading-loose">
            Looking for {" "}
            <span className="relative block mt-5">  
              <span className="relative z-10 bg-gradient-to-r from-[#0070F3] via-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">
                AI Automation?
              </span>
            </span>

          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your operations with cutting-edge AI automation solutions. 
            We help businesses streamline processes, reduce costs, and scale efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-[#0070F3] hover:bg-[#0070F3]/90 text-white px-8 py-3 text-lg">
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-[#0070F3] text-[#0070F3] hover:bg-[#0070F3] hover:text-white px-8 py-3 text-lg">
                View Services
              </Button>
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center">
            <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
