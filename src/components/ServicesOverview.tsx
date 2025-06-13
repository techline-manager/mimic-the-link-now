
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const ServicesOverview = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation solutions that work 24/7.",
      features: ["Workflow optimization", "Task automation", "Integration setup"]
    },
    {
      title: "AI Implementation",
      description: "Deploy custom AI models and machine learning solutions tailored to your business needs.",
      features: ["Custom AI models", "Data analysis", "Predictive insights"]
    },
    {
      title: "System Integration",
      description: "Connect disparate systems and create unified workflows that enhance productivity.",
      features: ["API integration", "Data synchronization", "Legacy system modernization"]
    },
    {
      title: "Consulting & Strategy",
      description: "Expert guidance on AI adoption strategies and digital transformation roadmaps.",
      features: ["Strategic planning", "Technology assessment", "Implementation roadmap"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive AI automation services to transform your business operations
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
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-[#0070F3] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] hover:opacity-90 text-white px-8 py-3">
              Explore All Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
