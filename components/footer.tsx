import { Github, Twitter, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">LLMs.txt Guide</h3>
            <p className="text-slate-600">Making the web AI-discoverable, one site at a time.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="Website">
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 LLMs.txt Guide. Developed by{" "}
            <a
              href="https://www.mgesteban.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors underline decoration-slate-300 hover:decoration-slate-500"
            >
              Grace Esteban
            </a>
            . Built for the developer community.
          </p>
        </div>
      </div>
    </footer>
  )
}
