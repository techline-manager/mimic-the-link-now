
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
            We're the <span className="bg-gradient-to-r from-[#0070F3] to-[#7928CA] bg-clip-text text-transparent">anti-consultants</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Three engineers who quit big tech because we were tired of building tools 
            that only other big tech companies could afford. Now we build AI that 
            actually helps real businesses.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">How This Started</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-6">
              Picture this: Sarah works at Microsoft building AI that helps enterprises save millions. 
              Meanwhile, her brother runs a small accounting firm and spends 4 hours every Friday 
              manually categorizing expenses because "AI is too expensive and complicated."
            </p>
            <p className="mb-6">
              That's when it hit us. The same automation that helps Fortune 500 companies could 
              transform every small business - if someone just made it accessible and affordable. 
              So we quit our corporate jobs and started building tools for the underdogs.
            </p>
            <p className="mb-6">
              No PowerPoints. No 6-month "digital transformation journeys." No buzzwords. 
              Just practical AI that solves real problems for real people who have better 
              things to do than wrestle with technology.
            </p>
            <p>
              Three years later, we've helped over 500 small businesses reclaim their time 
              and sanity. And we're just getting started.
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
