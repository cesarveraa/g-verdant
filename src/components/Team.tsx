const teamMembers = [
  {
    image: "/lovable-uploads/3d95b4f4-edad-4de6-9fe1-86ca82eb6e38.png",
    name: "Jhulianna Tarqui",
    role: "CEO"
  },
  {
    image: "/lovable-uploads/2bb157a6-ac04-4986-9ba5-ec217a6bcb13.png",
    name: "Cesar Vera",
    role: "CFO"
  },
  {
    image: "/lovable-uploads/chris.png",
    name: "Christian Mendoza",
    role: "CTO"
  }
];

const Team = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-verdant-primary mb-16">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-verdant-primary/10 rounded-full transform rotate-6"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-verdant-primary mb-2">
                {member.name}
              </h3>
              <p className="text-verdant-text/70">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;