import { Trophy } from 'lucide-react';

const developmentSteps = [
  {
    number: "1",
    title: "Assemble the right team",
    description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    position: "top"
  },
  {
    number: "2",
    title: "Sprint planning",
    description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    position: "top"
  },
  {
    number: "3",
    title: "Tech architecture",
    description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    position: "top"
  },
  {
    number: "4",
    title: "Standups & weekly demos",
    description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    position: "bottom"
  },
  {
    number: "5",
    title: "Code reviews",
    description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
    position: "bottom"
  },
  {
    number: "6",
    title: "Iterative delivery",
    description: "We divide the implementation process into several checkpoints rather than a single deadline.",
    position: "bottom"
  }
];

export default function DevelopmentProcess() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-700">How development</h2>
          <h2 className="text-4xl font-bold text-gray-900">through Alcaline works</h2>
        </div>

        {/* Timeline and Steps */}
        <div className="relative max-w-6xl mx-auto px-8">
          {/* Horizontal Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[2px] bg-orange-500" />

          {/* Steps Grid */}
          <div className="relative space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {developmentSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative ${
                  step.position === 'bottom' ? 'md:mt-32' : ''
                }`}
              >
                <div className="bg-white border border-gray-100 rounded-lg p-6">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 font-bold text-sm">#{step.number}</span>
                      <h3 className="font-semibold text-lg text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Vertical Connection Line */}
                <div 
                  className="hidden md:block absolute left-[10rem] w-[2px] bg-orange-500"
                  style={{
                    height: '2rem',
                    ...(step.position === 'top' 
                      ? { top: '100%' } 
                      : { bottom: '100%' })
                  }}
                />
              </div>
            ))}
          </div>

          {/* Trophy Icon at the End */}
          <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <Trophy className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
