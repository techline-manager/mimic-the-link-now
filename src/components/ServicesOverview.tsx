
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      title: "The 'I hate doing this' Solution",
      description: "That thing you do every week that makes you want to throw your laptop? Yeah, we can probably automate that.",
      features: ["Email sorting & responses", "Data entry elimination", "Report generation"],
      realExample: "Like Sarah's dental practice - we turned her 3-hour insurance paperwork into a 5-minute coffee break."
    },
    {
      title: "Smart Decision Making",
      description: "AI that actually understands your business, not just buzzword bingo from a PowerPoint.",
      features: ["Pattern recognition", "Predictive insights", "Custom recommendations"],
      realExample: "Helped a local restaurant predict busy nights and staff accordingly. No more scrambling or wasted payroll."
    },
    {
      title: "Connect Everything",
      description: "Your tools should talk to each other, not require you to be a translator.",
      features: ["System integration", "Data synchronization", "Workflow automation"],
      realExample: "Connected a marketing agency's 7 different tools so leads actually flow from inquiry to invoice automatically."
    },
    {
      title: "The 'What Should I Do?' Chat",
      description: "Strategy sessions that don't involve expensive consultants using words like 'synergy' unironically.",
      features: ["Honest assessments", "Practical roadmaps", "Real-world timelines"],
      realExample: "Spent 2 hours with a logistics company and saved them from buying $50k software they didn't need."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Actually <span className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the corporate speak. Here's how we help real businesses solve real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border border-border hover:border-[#0070F3]/30 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-[#0070F3] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-l-[#0070F3]">
                  <p className="text-sm text-muted-foreground italic">
                    Real example: {service.realExample}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] hover:opacity-90 text-white px-8 py-3">
              See Our Full Process
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
