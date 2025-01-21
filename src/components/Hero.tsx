import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-pattern min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <img
              src="/lovable-uploads/VerdantLogo3.png"
              alt="Verdant Logo"
              className="w-128 h-auto mx-auto lg:mx-0 mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-verdant-primary mb-6">
              AI-Powered Agricultural Management
            </h1>
            <p className="text-lg md:text-xl text-verdant-text/80 mb-8 max-w-2xl">
              Integrate NASA satellite data, machine learning, and geospatial
              analytics to monitor crops, predict risks, and optimize
              productivity.
            </p>
            <Button
              size="lg"
              className="bg-verdant-primary hover:bg-verdant-primary/90 text-white"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/u/1/folders/1U9RDRy87NAApOtvDTexSsjSF8DsQr_BC",
                  "_blank"
                )
              }
            >
              Try Greenfield Verdant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-verdant-primary/10 rounded-lg transform rotate-3"></div>
              <img
                src="/lovable-uploads/imagen3.jpeg"
                alt="Agricultural Technology"
                className="rounded-lg shadow-2xl w-full h-auto transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
