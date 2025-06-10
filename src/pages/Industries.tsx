
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustryCards from "@/components/IndustryCards";

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transforming <span className="bg-gradient-to-r from-[#0070F3] to-[#7928CA] bg-clip-text text-transparent">Industries</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We specialize in delivering AI automation solutions tailored for small-to-medium businesses 
            across key industry sectors. Discover how we can transform your specific industry.
          </p>
          <div className="text-lg text-muted-foreground">
            Trusted by <span className="font-semibold text-[#0070F3]">500+</span> SMBs worldwide
          </div>
        </div>
      </section>

      <IndustryCards />
      <Footer />
    </div>
  );
};

export default Industries;
