import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, MessageCircle, Clock } from "lucide-react"

export function TestingSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Test Your Implementation</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Verify that your llms.txt file is working correctly
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="h-6 w-6 text-slate-600" />
                <Badge variant="secondary">Technical</Badge>
              </div>
              <CardTitle className="text-xl">Command Line Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">curl -I https://yourdomain.com/llms.txt</code>
              </div>
              <p className="text-slate-600 text-sm">Should return HTTP 200 with content-type: text/plain</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="h-6 w-6 text-slate-600" />
                <Badge variant="secondary">AI Test</Badge>
              </div>
              <CardTitle className="text-xl">LLM Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-blue-800 text-sm">
                  "Can you read the llms.txt from [yourdomain.com] and tell me about their project?"
                </p>
              </div>
              <p className="text-slate-600 text-sm">Test with Claude, ChatGPT, and Gemini</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-6 w-6 text-slate-600" />
                <Badge variant="secondary">Timeline</Badge>
              </div>
              <CardTitle className="text-xl">Expected Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-slate-600">Immediate: Technical access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-sm text-slate-600">24-48h: robots.txt propagation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm text-slate-600">1-2 weeks: Full indexing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
