
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalCapabilities = () => {
  const capabilities = [
    {
      category: "AI & Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "Scikit-learn", "Computer Vision"],
      color: "from-[#0070F3] to-[#7928CA]"
    },
    {
      category: "Automation Platforms",
      technologies: ["Zapier", "Microsoft Power Automate", "UiPath", "Automation Anywhere", "Blue Prism", "Custom APIs"],
      color: "from-[#7928CA] to-[#FF0080]"
    },
    {
      category: "Cloud & Infrastructure",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Serverless"],
      color: "from-[#FF0080] to-[#0070F3]"
    },
    {
      category: "Integration & Data",
      technologies: ["REST APIs", "GraphQL", "ETL Pipelines", "Database Management", "Real-time Streaming", "Data Warehousing"],
      color: "from-[#0070F3] to-[#FF0080]"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical <span className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies and industry-leading tools to deliver robust automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border border-border hover:border-[#0070F3]/30 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className={`text-xl font-semibold bg-gradient-to-r ${capability.color} bg-clip-text text-transparent`}>
                  {capability.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {capability.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-medium bg-[#FAFAFA] text-muted-foreground rounded-full border border-border hover:border-[#0070F3]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
