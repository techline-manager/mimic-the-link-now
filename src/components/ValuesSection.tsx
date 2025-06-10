
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by the tangible impact we create for your business. Every solution is designed with clear ROI in mind."
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Technology should enhance human potential, not replace it. We build AI that empowers your team and improves customer experiences."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of AI technology, continuously learning and adapting to bring you the most effective solutions."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in honest communication, ethical AI practices, and building long-term partnerships based on mutual trust."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make and every solution we create.
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
