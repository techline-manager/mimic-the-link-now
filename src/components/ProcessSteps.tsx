
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin by understanding your current processes, identifying pain points, and mapping out automation opportunities.",
      details: ["Business process audit", "Stakeholder interviews", "Technical assessment", "ROI analysis"]
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive automation strategy with clear timelines, milestones, and success metrics.",
      details: ["Custom solution design", "Technology selection", "Implementation roadmap", "Risk assessment"]
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Build and rigorously test your automation solutions using industry best practices and cutting-edge tools.",
      details: ["Agile development", "Quality assurance", "Performance testing", "Security validation"]
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with comprehensive training and ongoing support to ensure maximum adoption.",
      details: ["Phased rollout", "User training", "24/7 monitoring", "Continuous optimization"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-[#0070F3] to-[#7928CA] bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful AI automation implementation from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border border-border hover:border-[#0070F3]/30 transition-all duration-300 hover:shadow-lg bg-background">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-[#0070F3] mr-4">{step.number}</span>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {step.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-[#0070F3] rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
