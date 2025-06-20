import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Users, Zap, Star, Target } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Enhanced Discovery",
    description: "AI assistants provide accurate information about your project to millions of users",
  },
  {
    icon: Shield,
    title: "Professional Credibility",
    description: "Demonstrates technical sophistication and forward-thinking approach",
  },
  {
    icon: Users,
    title: "Better Lead Quality",
    description: "Users arrive more informed about your project and its capabilities",
  },
  {
    icon: Zap,
    title: "Reduced Support Load",
    description: "AI handles basic questions, freeing up your team for complex issues",
  },
  {
    icon: Star,
    title: "Marketing Advantage",
    description: "Every AI conversation becomes an informed discussion about your work",
  },
  {
    icon: Target,
    title: "Competitive Edge",
    description: "Most projects don't have llms.txt - be ahead of the curve",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why It Matters</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The benefits of making your website AI-discoverable extend far beyond just technical implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
