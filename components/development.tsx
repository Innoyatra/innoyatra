import { Card, CardContent } from "@/components/ui/card"
import { developmentApproaches } from "@/lib/constants";

export function Development() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900">Our design and</h2>
          <h2 className="text-4xl font-bold text-gray-900">Development Approach</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {developmentApproaches.map((approach, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {approach.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
