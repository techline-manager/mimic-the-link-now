
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI lead at Microsoft with 10+ years in enterprise automation. Passionate about making AI accessible to every business.",
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in machine learning infrastructure. Believes in building robust, scalable AI solutions.",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Watson",
      role: "Head of Customer Success",
      bio: "Small business advocate with deep expertise in operations optimization. Ensures every client achieves measurable results.",
      image: "/placeholder.svg"
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      bio: "PhD in Computer Science with focus on practical AI applications. Turns complex algorithms into simple, powerful tools.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a diverse group of experts united by our passion for helping businesses thrive through AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-[#0070F3] to-[#7928CA] rounded-full mb-4 group-hover:scale-105 transition-transform"></div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-[#0070F3] font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0070F3] to-[#7928CA] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6">
              We're always looking for talented individuals who share our passion for democratizing AI.
            </p>
            <a href="mailto:careers@techline-ai.com" className="inline-block bg-white text-[#0070F3] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
