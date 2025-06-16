
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "No BS, Just Results",
      description: "We measure success in hours saved and headaches prevented. If it doesn't make your life easier, we don't build it."
    },
    {
      icon: Users,
      title: "Humans First",
      description: "Technology should make you feel superhuman, not replaceable. We build tools that amplify what you're already great at."
    },
    {
      icon: Lightbulb,
      title: "Smart, Not Shiny",
      description: "We care more about solving problems than using the latest tech trend. Sometimes the best solution is surprisingly simple."
    },
    {
      icon: Shield,
      title: "Straight Talk",
      description: "No jargon, no overselling, no 'revolutionary paradigm shifts.' Just honest conversations about what will actually help your business."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Actually Believe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No corporate mission statement here. Just the principles that guide how we work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#0070F3] to-[#7928CA] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
