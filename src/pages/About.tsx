
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-[#0070F3] to-[#7928CA] bg-clip-text text-transparent">TechLineAI</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're a passionate team of technologists, entrepreneurs, and problem-solvers who believe 
            that every business deserves access to the transformative power of AI automation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-6">
              TechLineAI was born from a simple observation: while large corporations were leveraging AI to 
              gain competitive advantages, small and medium businesses were being left behind due to complexity, 
              cost, and lack of technical expertise.
            </p>
            <p className="mb-6">
              Our founders, having worked at both Fortune 500 companies and nimble startups, witnessed firsthand 
              how automation could transform operations. But they also saw the gap – the tools and expertise 
              that could revolutionize a small healthcare practice or local marketing agency simply weren't 
              accessible or affordable.
            </p>
            <p className="mb-6">
              We decided to change that. Our mission became clear: democratize AI automation for businesses 
              of all sizes, making it simple, affordable, and tailored to real-world needs.
            </p>
            <p>
              Today, we've helped over 500 businesses streamline their operations, reduce costs, and focus 
              on what they do best – serving their customers and growing their impact.
            </p>
          </div>
        </div>
      </section>

      <ValuesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
