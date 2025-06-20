import { Card, CardContent } from "@/components/ui/card"
import { FileText, Search, MessageSquare } from "lucide-react"

export function WhatIsSection() {
  return (
    <section id="what-is" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What is <code className="bg-slate-100 px-3 py-1 rounded text-slate-800">llms.txt</code>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A standardized file that provides AI assistants with comprehensive, accurate information about your project,
            enabling better recommendations and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Simple Text File</h3>
              <p className="text-slate-600">
                Just a plain text file at <code className="bg-slate-100 px-2 py-1 rounded">/llms.txt</code>
                containing structured information about your project.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Discoverable</h3>
              <p className="text-slate-600">
                LLMs can read and understand your project details, providing accurate information to users who ask about
                it.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Better Conversations</h3>
              <p className="text-slate-600">
                Every AI conversation about your project becomes informed and accurate, improving user experience and
                credibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
