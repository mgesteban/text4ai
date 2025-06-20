"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Bot, Code, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("what-is")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Bot className="h-8 w-8 text-blue-600" />
          <Code className="h-8 w-8 text-green-600" />
          <Sparkles className="h-8 w-8 text-purple-600" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Make Your Website
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent block">
            AI Discoverable
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Learn how to create an <code className="bg-slate-100 px-2 py-1 rounded text-slate-800">llms.txt</code> file so
          Claude, ChatGPT, and Gemini can accurately understand and recommend your project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg"
            onClick={scrollToContent}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-slate-900 border-slate-300 hover:bg-slate-50 px-8 py-3 text-lg"
            asChild
          >
            <a href="#examples">View Examples</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Claude
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            ChatGPT
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            Gemini
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </button>
    </section>
  )
}
