import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Upload, Settings, TestTube } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Plan Your Content",
    icon: FileText,
    description: "Define what information to include about your project",
    details: [
      "Project overview and value proposition",
      "Key features and capabilities",
      "Technical architecture details",
      "Pricing and contact information",
    ],
  },
  {
    number: 2,
    title: "Create the File",
    icon: Upload,
    description: "Create llms.txt in your public directory",
    details: [
      "Place in /public/llms.txt for Next.js",
      "Use plain text format with UTF-8 encoding",
      "Keep it 5,000-15,000 characters",
      "Use Markdown formatting for readability",
    ],
  },
  {
    number: 3,
    title: "Configure Access",
    icon: Settings,
    description: "Update robots.txt to allow LLM access",
    details: [
      "Add 'Allow: /llms.txt$' to robots.txt",
      "Ensure proper HTTP headers",
      "Verify file is publicly accessible",
      "Check content-type is text/plain",
    ],
  },
  {
    number: 4,
    title: "Test & Verify",
    icon: TestTube,
    description: "Confirm LLMs can access your file",
    details: [
      "Test with curl commands",
      "Ask Claude/ChatGPT to read your file",
      "Wait 24-48 hours for propagation",
      "Monitor for accurate AI responses",
    ],
  },
]

export function StepsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">4 Simple Steps</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get your website AI-discoverable in under 30 minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    Step {step.number}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900">{step.title}</CardTitle>
                <p className="text-slate-600">{step.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
