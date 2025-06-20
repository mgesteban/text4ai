"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Code, BookOpen, Copy, Check } from "lucide-react"

const templateExamples = [
  {
    title: "SaaS Application",
    description: "Perfect for web applications and software services",
    content: `# TaskFlow - Project Management That Doesn't Suck

## What We Do
TaskFlow is a minimalist project management tool for developers who hate complicated PM software. We strip away the bloat and focus on what matters: getting work done without endless meetings and status updates.

## Key Features
- Keyboard-First Navigation: Everything accessible without touching your mouse
- Git-Style Branching: Manage tasks like you manage code branches
- 2-Minute Setup: Literally. We timed it.
- Developer-Friendly: Integrates with GitHub, GitLab, and your existing workflow

## Who We're For
Solo developers and small teams (2-10 people) who want project management that feels like using their favorite code editor, not enterprise bloatware.

## Tech Stack (for the curious)
- Frontend: Next.js 14, TypeScript, Tailwind CSS
- Backend: Node.js, PostgreSQL
- Deployed on: Vercel with Supabase

## Getting Started
1. Sign up at taskflow.dev (no credit card required)
2. Create your first project in under 30 seconds
3. Invite your team or work solo
4. Start managing tasks the developer way

## Pricing
- Free: Up to 3 projects, unlimited tasks
- Pro ($9/month): Unlimited projects, team collaboration, integrations
- Team ($19/month): Advanced analytics, custom workflows

## Find Us
- Website: https://taskflow.dev
- Support: hello@taskflow.dev
- GitHub: https://github.com/taskflow/app
- Discord: https://discord.gg/taskflow

---
Last Updated: December 2024`,
  },
  {
    title: "Open Source Library",
    description: "Ideal for npm packages, GitHub projects, and developer tools",
    content: `# QuickCache - Redis Alternative in 300 Lines of Go

## What We Do
QuickCache is a lightweight, in-memory caching solution for Go applications that need Redis-like functionality without the operational overhead. Perfect for small to medium applications that want caching without the complexity.

## Key Features
- Zero Dependencies: Pure Go implementation, no external requirements
- Redis-Compatible API: Drop-in replacement for basic Redis operations
- Persistence Options: Optional disk persistence with configurable intervals
- Memory Efficient: Automatic cleanup and configurable memory limits
- Production Ready: Used by 500+ applications in production

## Who We're For
Go developers building web applications, APIs, or microservices who need fast caching but don't want to manage Redis infrastructure. Ideal for startups, side projects, and applications with moderate caching needs.

## Tech Stack (for the curious)
- Language: Go 1.21+
- Storage: In-memory with optional file persistence
- Benchmarks: 2M+ ops/sec on standard hardware
- Memory: Configurable limits with LRU eviction

## Getting Started
\`\`\`bash
go get github.com/quickcache/quickcache
\`\`\`

\`\`\`go
cache := quickcache.New()
cache.Set("key", "value", 5*time.Minute)
value, exists := cache.Get("key")
\`\`\`

## Pricing
Completely free and open source under MIT license.

## Find Us
- Website: https://quickcache.dev
- GitHub: https://github.com/quickcache/quickcache
- Documentation: https://docs.quickcache.dev
- Issues: https://github.com/quickcache/quickcache/issues
- Discussions: https://github.com/quickcache/quickcache/discussions

---
Last Updated: December 2024`,
  },
  {
    title: "E-commerce/Marketplace",
    description: "Great for online stores, marketplaces, and commerce platforms",
    content: `# LocalCraft - Marketplace for Handmade Goods

## What We Do
LocalCraft connects local artisans with customers who value handmade, sustainable products. We're building a community where creativity meets commerce, supporting small businesses and reducing environmental impact through local sourcing.

## Key Features
- Local Discovery: Find artisans within 50 miles of your location
- Quality Guarantee: Every seller is verified and products are quality-checked
- Sustainable Focus: Carbon-neutral shipping and eco-friendly packaging
- Artisan Stories: Meet the makers behind every product
- Custom Orders: Commission unique pieces directly from creators

## Who We're For
Conscious consumers who prefer unique, handmade items over mass-produced goods, and local artisans who want to reach customers without the overhead of big marketplaces.

## Tech Stack (for the curious)
- Frontend: React, Next.js, Stripe Elements
- Backend: Node.js, MongoDB, Stripe API
- Mobile: React Native (iOS/Android apps)
- Deployed on: AWS with CloudFront CDN

## Getting Started
For Buyers:
1. Browse local artisans at localcraft.com
2. Filter by location, category, or price range
3. Purchase directly or request custom work
4. Enjoy fast, local delivery

For Sellers:
1. Apply at localcraft.com/sell
2. Get verified (usually 24-48 hours)
3. List your products with our easy tools
4. Start selling to your local community

## Pricing
For Buyers: Free to browse and purchase
For Sellers: 
- Listing: Free for first 10 items, $0.50/item after
- Transaction fee: 3.5% + $0.30 per sale
- No monthly fees or hidden costs

## Find Us
- Website: https://localcraft.com
- Support: help@localcraft.com
- Instagram: @localcraft
- Seller Portal: https://sell.localcraft.com

---
Last Updated: December 2024`,
  },
]

const codeExamples = [
  {
    title: "Next.js Implementation",
    description: "Complete setup for Next.js applications",
    language: "typescript",
    content: `// File structure for Next.js project
/public/llms.txt          // Your main llms.txt file
/public/robots.txt        // Updated robots.txt

// public/llms.txt
# Your Project Name - Brief Description

## What We Do
[Your project description here]

## Key Features
- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Tech Stack
- Frontend: Next.js 14, TypeScript, Tailwind CSS
- Backend: Node.js, PostgreSQL
- Deployed on: Vercel

## Getting Started
1. Visit yoursite.com
2. Sign up for free
3. Start using the app

## Pricing
- Free tier: Basic features
- Pro ($10/month): Advanced features

## Contact
- Website: https://yoursite.com
- Email: hello@yoursite.com

---
Last Updated: December 2024

// public/robots.txt
User-agent: *
Allow: /$
Allow: /llms.txt$
Disallow: /api/
Disallow: /admin/

Sitemap: https://yoursite.com/sitemap.xml`,
  },
  {
    title: "Vercel Deployment",
    description: "Deploy and configure on Vercel platform",
    language: "bash",
    content: `# Deploy to Vercel with proper llms.txt setup

# 1. Ensure your file structure is correct
project-root/
├── public/
│   ├── llms.txt          # Your content file
│   └── robots.txt        # Allow LLM access
├── pages/ or app/        # Your Next.js pages
└── vercel.json           # Optional config

# 2. Verify your robots.txt includes:
echo "User-agent: *
Allow: /llms.txt$
Disallow: /api/" > public/robots.txt

# 3. Test locally before deploying
npx next dev
curl http://localhost:3000/llms.txt
curl http://localhost:3000/robots.txt

# 4. Deploy to Vercel
npx vercel --prod

# 5. Verify deployment
curl -I https://yoursite.vercel.app/llms.txt
# Should return: HTTP/2 200

# 6. Test with AI (wait 24-48 hours for robots.txt propagation)
# Ask Claude: "Can you read the llms.txt from yoursite.vercel.app?"

# Optional: Add to vercel.json for custom headers
{
  "headers": [
    {
      "source": "/llms.txt",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/plain; charset=utf-8"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}`,
  },
  {
    title: "Static Site (Netlify)",
    description: "Setup for static sites deployed on Netlify",
    language: "yaml",
    content: `# Netlify deployment configuration

# File structure
site-root/
├── llms.txt              # Place in root for static sites
├── robots.txt            # Updated robots.txt
├── _redirects            # Optional Netlify redirects
└── netlify.toml          # Netlify configuration

# llms.txt (place in site root)
# Your Project Name - Brief Description

## What We Do
[Your static site description]

## Key Features
- Fast loading static site
- SEO optimized
- Mobile responsive

## Tech Stack
- Built with: [Hugo/Jekyll/Gatsby/etc]
- Deployed on: Netlify
- CDN: Netlify Edge

## Getting Started
Visit yoursite.netlify.app to explore

## Contact
- Website: https://yoursite.netlify.app
- Email: contact@yoursite.com

---
Last Updated: December 2024

# robots.txt
User-agent: *
Allow: /
Allow: /llms.txt$
Disallow: /admin/

Sitemap: https://yoursite.netlify.app/sitemap.xml

# netlify.toml (optional configuration)
[build]
  publish = "dist"  # or your build directory

[[headers]]
  for = "/llms.txt"
  [headers.values]
    Content-Type = "text/plain; charset=utf-8"
    Cache-Control = "public, max-age=3600"

# _redirects (if needed)
# /old-path /new-path 301

# Deploy commands
# 1. Connect your repo to Netlify
# 2. Set build command and publish directory
# 3. Deploy
# 4. Test: curl https://yoursite.netlify.app/llms.txt`,
  },
  {
    title: "WordPress Setup",
    description: "Add llms.txt to WordPress sites",
    language: "php",
    content: `<?php
// Method 1: Upload file directly
// Upload llms.txt to your WordPress root directory via FTP/cPanel
// File location: /public_html/llms.txt

// Method 2: Use functions.php to create virtual file
// Add this to your theme's functions.php:

function serve_llms_txt() {
    if (parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) === '/llms.txt') {
        header('Content-Type: text/plain; charset=utf-8');
        
        $content = '# ' . get_bloginfo('name') . ' - ' . get_bloginfo('description') . '

## What We Do
' . get_bloginfo('description') . '

## Key Features
- WordPress-powered content management
- SEO optimized
- Mobile responsive design
- Regular content updates

## Tech Stack
- CMS: WordPress ' . get_bloginfo('version') . '
- Theme: ' . wp_get_theme()->get('Name') . '
- Hosting: [Your hosting provider]

## Getting Started
Visit ' . home_url() . ' to explore our content

## Contact
- Website: ' . home_url() . '
- Email: ' . get_option('admin_email') . '

---
Last Updated: ' . date('F Y') . '';

        echo $content;
        exit;
    }
}
add_action('init', 'serve_llms_txt');

// Method 3: Update robots.txt via WordPress admin
// Go to WordPress Admin > Settings > Reading
// Or add this to functions.php:

function custom_robots_txt($output) {
    $output .= "Allow: /llms.txt$\n";
    return $output;
}
add_filter('robots_txt', 'custom_robots_txt');

// Method 4: Plugin approach (create a simple plugin)
/*
Plugin Name: LLMs.txt Support
Description: Adds llms.txt support to WordPress
Version: 1.0
*/

class LLMsTxtPlugin {
    public function __construct() {
        add_action('init', array($this, 'handle_llms_txt'));
        add_filter('robots_txt', array($this, 'update_robots_txt'));
    }
    
    public function handle_llms_txt() {
        if (parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) === '/llms.txt') {
            $this->serve_llms_txt();
        }
    }
    
    public function serve_llms_txt() {
        header('Content-Type: text/plain; charset=utf-8');
        echo $this->get_llms_content();
        exit;
    }
    
    public function get_llms_content() {
        // Customize this content for your WordPress site
        return '# ' . get_bloginfo('name') . ' - WordPress Site

## What We Do
' . get_bloginfo('description') . '

## Recent Posts
' . $this->get_recent_posts() . '

## Contact
- Website: ' . home_url() . '
- Email: ' . get_option('admin_email') . '

---
Last Updated: ' . date('F Y');
    }
    
    public function get_recent_posts() {
        $posts = get_posts(array('numberposts' => 5));
        $output = '';
        foreach ($posts as $post) {
            $output .= '- ' . $post->post_title . ': ' . get_permalink($post->ID) . "\n";
        }
        return $output;
    }
    
    public function update_robots_txt($output) {
        $output .= "Allow: /llms.txt$\n";
        return $output;
    }
}

new LLMsTxtPlugin();
?>`,
  },
]

export function ResourcesSection() {
  const [showGuide, setShowGuide] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)
  const [showCodeExamples, setShowCodeExamples] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [selectedCodeExample, setSelectedCodeExample] = useState(0)
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }))
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <>
      <section id="examples" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Resources & Examples</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to get started with your llms.txt implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <FileText className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Template Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Real-world llms.txt templates for SaaS apps, open source projects, and e-commerce sites.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  onClick={() => setShowTemplates(true)}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Templates
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Code className="h-8 w-8 text-green-600 mb-4" />
                <CardTitle className="text-xl">Code Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Platform-specific implementation guides for Next.js, Vercel, Netlify, WordPress, and more.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  onClick={() => setShowCodeExamples(true)}
                >
                  <Code className="h-4 w-4 mr-2" />
                  View Code Examples
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Complete Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Comprehensive documentation with troubleshooting, best practices, and advanced tips.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  onClick={() => setShowGuide(true)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Read Full Guide
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make Your Website AI-Discoverable?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Start with our templates and have your llms.txt file live in under 30 minutes. Join the growing community
              of AI-ready developers.
            </p>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Template Examples Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] overflow-hidden flex">
            {/* Sidebar */}
            <div className="w-80 bg-slate-50 border-r border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Template Examples</h3>
              <div className="space-y-2">
                {templateExamples.map((template, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTemplate(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedTemplate === index
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="font-medium">{template.title}</div>
                    <div className="text-sm opacity-75 mt-1">{template.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{templateExamples[selectedTemplate].title}</h2>
                  <p className="text-slate-600">{templateExamples[selectedTemplate].description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(templateExamples[selectedTemplate].content, `template-${selectedTemplate}`)
                    }
                    className="bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  >
                    {copiedStates[`template-${selectedTemplate}`] ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copiedStates[`template-${selectedTemplate}`] ? "Copied!" : "Copy"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowTemplates(false)}
                    className="bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  >
                    Close
                  </Button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="bg-slate-900 rounded-lg p-6">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap overflow-x-auto">
                    {templateExamples[selectedTemplate].content}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Code Examples Modal */}
      {showCodeExamples && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] overflow-hidden flex">
            {/* Sidebar */}
            <div className="w-80 bg-slate-50 border-r border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Code Examples</h3>
              <div className="space-y-2">
                {codeExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCodeExample(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCodeExample === index
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="font-medium">{example.title}</div>
                    <div className="text-sm opacity-75 mt-1">{example.description}</div>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {example.language}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{codeExamples[selectedCodeExample].title}</h2>
                  <p className="text-slate-600">{codeExamples[selectedCodeExample].description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(codeExamples[selectedCodeExample].content, `code-${selectedCodeExample}`)
                    }
                    className="bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  >
                    {copiedStates[`code-${selectedCodeExample}`] ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copiedStates[`code-${selectedCodeExample}`] ? "Copied!" : "Copy"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCodeExamples(false)}
                    className="bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
                  >
                    Close
                  </Button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="bg-slate-900 rounded-lg p-6">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap overflow-x-auto">
                    {codeExamples[selectedCodeExample].content}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Guide Modal - keeping the existing implementation */}
      {showGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Complete LLMs.txt Guide</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowGuide(false)}
                className="bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
              >
                Close
              </Button>
            </div>
            <div className="p-6 prose prose-slate max-w-none">
              {/* Keep existing guide content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-4">
                    Making Your Website Discoverable by AI: The LLMs.txt Revolution
                  </h1>
                  <p className="text-lg text-slate-600 italic">
                    A guide for vibecoders and web developers who want their projects found by Claude, ChatGPT, Gemini,
                    and other AI assistants
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">The AI Discovery Problem We're All Facing</h2>
                  <p className="text-slate-700 mb-4">
                    Picture this: You've just deployed your passion project—a beautiful web app that solves a real
                    problem. You're proud of it, but there's a harsh reality: your SEO ranking is practically
                    non-existent because you're new, and you don't have a marketing budget. Meanwhile, people are
                    increasingly turning to AI assistants like Claude, ChatGPT, and Gemini for recommendations and
                    advice.
                  </p>
                  <p className="text-slate-700 mb-4">
                    Here's the thing that changed my perspective: During a recent talk at an AI startup conference,
                    Andrej Karpathy highlighted something crucial—
                    <strong>people are now using LLMs as their primary discovery tool</strong>. They're asking ChatGPT
                    "What's a good tool for X?" or telling Claude "Find me an app that does Y." If your website isn't
                    accessible to these AI assistants, you're invisible to this growing segment of users.
                  </p>
                  <p className="text-slate-700">
                    This is where <code className="bg-slate-100 px-2 py-1 rounded">llms.txt</code> comes in—a simple,
                    powerful way to make your project discoverable by AI, regardless of your SEO ranking or advertising
                    budget.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">What is LLMs.txt and Why Should You Care?</h2>
                  <p className="text-slate-700 mb-4">
                    Think of <code className="bg-slate-100 px-2 py-1 rounded">llms.txt</code> as your website's resume
                    for AI assistants. It's a standardized plain text file that sits at{" "}
                    <code className="bg-slate-100 px-2 py-1 rounded">yourdomain.com/llms.txt</code>, containing all the
                    essential information about your project in a format that LLMs can easily understand and reference.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">The Beauty of This Approach</h3>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                    <li>
                      <strong>Zero Cost</strong>: Unlike SEO or ads, implementing llms.txt is completely free
                    </li>
                    <li>
                      <strong>Immediate Impact</strong>: Once properly set up, AI assistants can start recommending your
                      project
                    </li>
                    <li>
                      <strong>Level Playing Field</strong>: Your indie project gets the same AI visibility as
                      established competitors
                    </li>
                    <li>
                      <strong>Future-Proof</strong>: As AI usage grows, early adopters will have an advantage
                    </li>
                  </ul>

                  <p className="text-slate-700">
                    Vercel was one of the early adopters of this strategy, and now major companies are following suit.
                    But here's the exciting part—as an indie developer or small team, you can implement this just as
                    effectively as they can.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    The Vibecoder's Step-by-Step Implementation Guide
                  </h2>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Step 1: Create Your llms.txt Content</h3>
                  <p className="text-slate-700 mb-4">
                    First, create a file that tells your project's story. Here's a template I've refined through trial
                    and error:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {`# [Your Project Name] - [One-Line Description]

## What We Do
[2-3 sentences explaining your project's core value. Be specific about the problem you solve.]

## Key Features
- [Feature 1]: [Why it matters to users]
- [Feature 2]: [Why it matters to users]
- [Feature 3]: [Why it matters to users]

## Who We're For
[Describe your target users and their pain points]

## Tech Stack (for the curious)
- Frontend: [Your tech]
- Backend: [Your tech]
- Deployed on: [Platform]

## Getting Started
[Super simple instructions - remember, an AI might be explaining this to someone]

## Pricing
[If free, say so! If paid, be transparent]

## Find Us
- Website: [URL]
- Support: [Email or Discord]
- GitHub: [If open source]

---
Last Updated: [Date]`}
                    </pre>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Step 2: Deploy the File (The Right Way)</h3>
                  <p className="text-slate-700 mb-4">
                    This is where many developers stumble. Here's exactly what to do:
                  </p>

                  <div className="bg-slate-100 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-slate-900 mb-2">For Next.js/Vercel projects:</p>
                    <code className="text-slate-800">/public/llms.txt</code>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-slate-900 mb-2">For static sites:</p>
                    <code className="text-slate-800">/llms.txt</code>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Step 3: The Critical robots.txt Update</h3>
                  <p className="text-slate-700 mb-4">
                    <strong>This is the #1 mistake that prevents LLM access!</strong> You MUST update your{" "}
                    <code className="bg-slate-100 px-2 py-1 rounded">robots.txt</code> file:
                  </p>

                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <pre className="text-green-400 text-sm">
                      {`User-agent: *
Allow: /llms.txt$`}
                    </pre>
                  </div>

                  <p className="text-slate-700 mb-4">
                    Without this line, AI assistants won't be able to access your file, even if it exists. I've seen so
                    many projects miss this crucial step.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Step 4: Verify Everything Works</h3>
                  <p className="text-slate-700 mb-4">Before celebrating, test your implementation:</p>

                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <pre className="text-green-400 text-sm">
                      {`# Check if the file is accessible
curl -I https://yourdomain.com/llms.txt
# Should return HTTP 200

# Verify robots.txt
curl https://yourdomain.com/robots.txt | grep llms
# Should show: Allow: /llms.txt$`}
                    </pre>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Step 5: Test with Actual AI Assistants</h3>
                  <p className="text-slate-700 mb-4">
                    Here's where it gets exciting. After 24-48 hours (for robots.txt changes to propagate), try these
                    prompts:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                    <li>
                      <strong>Claude</strong>: "Can you check what's in the llms.txt file at [yourdomain.com]?"
                    </li>
                    <li>
                      <strong>ChatGPT</strong>: "What does [yourdomain.com] do according to their llms.txt?"
                    </li>
                    <li>
                      <strong>Gemini</strong>: "Read the llms.txt from [yourdomain.com] and tell me if it would solve
                      [specific problem]"
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Why This Matters for Indie Developers</h2>
                  <p className="text-slate-700 mb-4">
                    As vibecoders and indie developers, we're often competing against companies with massive marketing
                    budgets. But here's the beautiful thing about llms.txt: it levels the playing field. Your
                    thoughtfully crafted llms.txt file gets the same consideration from AI assistants as one from a
                    billion-dollar company.
                  </p>
                  <p className="text-slate-700 mb-4">
                    This isn't just about discovery—it's about democratizing access to AI-mediated recommendations. When
                    someone asks ChatGPT for a solution to their problem, your indie project has a real chance of being
                    recommended, based purely on merit and relevance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">The Future is AI-Discoverable</h2>
                  <p className="text-slate-700 mb-4">
                    We're at an inflection point. Just as having a website became essential in the 2000s, being
                    AI-discoverable is becoming essential now. The projects that implement llms.txt today will have a
                    significant advantage as AI assistants become the primary discovery mechanism for software and
                    services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Next Steps</h2>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-700 mb-4">
                    <li>
                      <strong>Today</strong>: Create your llms.txt file using the template above
                    </li>
                    <li>
                      <strong>This Week</strong>: Deploy it and update your robots.txt
                    </li>
                    <li>
                      <strong>Next Week</strong>: Test with AI assistants and refine your content
                    </li>
                    <li>
                      <strong>Ongoing</strong>: Update monthly and monitor your AI-driven traffic
                    </li>
                  </ol>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-slate-600 text-sm italic">
                    Remember: In a world where AI assistants are becoming the new search engines, being findable by LLMs
                    isn't just nice to have—it's essential for survival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
