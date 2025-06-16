
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Megaphone, Truck, Scale, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryCards = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Streamline patient management and reduce administrative overhead",
      sectors: ["Medical Practices", "Dental Clinics", "Physical Therapy", "Mental Health"],
      solutions: [
        "Automated appointment scheduling and reminders",
        "Patient data management and HIPAA compliance",
        "Insurance claim processing automation",
        "Telehealth integration and workflow optimization"
      ],
      color: "text-red-500"
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Enhance security, compliance, and operational efficiency",
      sectors: ["Accounting Firms", "Financial Advisors", "Insurance Brokers", "Credit Unions"],
      solutions: [
        "Automated bookkeeping and expense tracking",
        "Risk assessment and fraud detection",
        "Regulatory compliance monitoring",
        "Client onboarding and KYC automation"
      ],
      color: "text-green-500"
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Amplify your reach with intelligent automation and analytics",
      sectors: ["Digital Agencies", "Content Creators", "E-commerce", "Local Businesses"],
      solutions: [
        "Social media management and scheduling",
        "Lead generation and nurturing workflows",
        "Personalized email marketing campaigns",
        "Performance analytics and reporting"
      ],
      color: "text-purple-500"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Optimize supply chain and delivery operations",
      sectors: ["Shipping Companies", "Warehousing", "Distribution", "Fleet Management"],
      solutions: [
        "Inventory management and forecasting",
        "Route optimization and tracking",
        "Supplier relationship automation",
        "Quality control and compliance monitoring"
      ],
      color: "text-blue-500"
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Modernize legal practices with intelligent document and case management",
      sectors: ["Law Firms", "Legal Consultants", "Corporate Legal", "Family Law"],
      solutions: [
        "Document automation and template generation",
        "Case management and deadline tracking",
        "Client intake and onboarding workflows",
        "Contract analysis and compliance monitoring"
      ],
      color: "text-amber-500"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Boost sales and customer satisfaction with automated retail solutions",
      sectors: ["Online Retailers", "Dropshipping", "Marketplace Sellers", "B2B Commerce"],
      solutions: [
        "Inventory synchronization across platforms",
        "Customer service chatbots and support",
        "Price monitoring and dynamic pricing",
        "Order fulfillment and shipping automation"
      ],
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand that every industry has unique challenges. Our AI solutions are crafted 
            to address the specific needs of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-[#0070F3]">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gray-100 ${industry.color}`}>
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    <CardDescription className="text-base">{industry.description}</CardDescription>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                    Target Sectors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.sectors.map((sector, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#0070F3]/10 text-[#0070F3] text-sm rounded-full">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <h4 className="font-semibold mb-3">Key Solutions:</h4>
                <ul className="space-y-2 mb-6">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#0070F3] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button className="w-full bg-[#0070F3] hover:bg-[#0070F3]/90 text-white group-hover:shadow-md transition-all">
                    Get Industry-Specific Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-[#0070F3] text-[#0070F3] hover:bg-[#0070F3] hover:text-white">
              Discuss Your Industry Needs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;
