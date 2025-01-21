import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Farm",
    description: "Link your agricultural data with our AI-powered platform."
  },
  {
    number: "02",
    title: "Monitor in Real-Time",
    description: "Access satellite imagery and real-time environmental data."
  },
  {
    number: "03",
    title: "Get AI Insights",
    description: "Receive personalized recommendations and risk assessments."
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-verdant-primary text-white py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-white/5 backdrop-blur-sm"
            >
              <span className="absolute -top-6 left-6 text-4xl font-bold text-verdant-secondary opacity-50">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-3 mt-4">
                {step.title}
              </h3>
              <p className="text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="secondary"
            size="lg"
            className="bg-verdant-secondary hover:bg-verdant-secondary/90 text-white"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/u/1/folders/1U9RDRy87NAApOtvDTexSsjSF8DsQr_BC",
                "_blank"
              )
            }
          >
            Start Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;