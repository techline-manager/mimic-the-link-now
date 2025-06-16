
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah",
      role: "The AI Whisperer",
      bio: "Spent 8 years at Microsoft teaching computers to be helpful instead of annoying. Has strong opinions about user experience and weak coffee.",
      quirk: "Can debug machine learning models while explaining them to your grandmother."
    },
    {
      name: "Marcus",
      role: "The Integration Wizard",
      bio: "Ex-Google engineer who got tired of building tools only other engineers could use. Now builds bridges between systems that were never meant to talk.",
      quirk: "Once connected 12 different software systems using nothing but determination and excessive amounts of caffeine."
    },
    {
      name: "Emily",
      role: "The Reality Check",
      bio: "Ran her own consulting firm for 5 years before joining us. Keeps us grounded and makes sure we're solving real problems, not imaginary ones.",
      quirk: "Has an uncanny ability to spot business BS from a mile away. Our built-in consultant detector."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Humans Behind the Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not a faceless tech company. We're three people who actually answer the phone when you call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-[#0070F3] to-[#7928CA] rounded-full mb-4 group-hover:scale-105 transition-transform"></div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-[#0070F3] font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground italic">
                    <strong>Fun fact:</strong> {member.quirk}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0070F3] to-[#7928CA] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Join the Mission?</h3>
            <p className="text-lg mb-6">
              We're always looking for people who care more about impact than impressive job titles.
            </p>
            <a href="mailto:hello@techlineai.com" className="inline-block bg-white text-[#0070F3] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
