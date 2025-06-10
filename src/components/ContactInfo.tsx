
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm PST"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@techline-ai.com",
      description: "We respond within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      detail: "Available on our website",
      description: "Instant support during business hours"
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "San Francisco, CA",
      description: "Remote-first team"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-8">
          We're here to answer your questions and help you discover how AI automation 
          can transform your business operations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <method.icon className="h-6 w-6 text-[#0070F3]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{method.title}</h3>
                  <p className="text-sm font-medium text-foreground">{method.detail}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-[#0070F3] to-[#7928CA] text-white">
        <CardHeader>
          <CardTitle className="text-white">Why Choose TechLineAI?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5" />
            <span>Rapid implementation (2-4 weeks average)</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-block w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </span>
            <span>Proven ROI within 90 days</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-block w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </span>
            <span>Ongoing support & optimization</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-block w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </span>
            <span>No upfront costs for consultation</span>
          </div>
        </CardContent>
      </Card>

      <div className="text-center p-6 bg-[#FAFAFA] rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Prefer to Schedule a Call?
        </h3>
        <p className="text-muted-foreground mb-4">
          Book a 30-minute discovery call to discuss your specific needs.
        </p>
        <a 
          href="#" 
          className="inline-block bg-[#0070F3] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0070F3]/90 transition-colors"
        >
          Schedule Discovery Call
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
