import { Leaf, Satellite, Bell, Brain } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Risk Assessment",
    description: "Predict droughts, floods, wildfires, and crop diseases using advanced machine learning models."
  },
  {
    icon: Satellite,
    title: "Real-Time Monitoring",
    description: "Integrate NASA FIRMS and POWER APIs for real-time satellite data and agricultural insights."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive push notifications and alerts for urgent weather and climate changes."
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Get AI-driven recommendations for best farming practices and crop optimization."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-verdant-primary mb-16">
          Powered by Advanced Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-verdant-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-verdant-primary" />
              </div>
              <h3 className="text-xl font-semibold text-verdant-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-verdant-text/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;