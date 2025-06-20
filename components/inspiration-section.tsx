export function InspirationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Inspiration Behind This Guide</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Andrej Karpathy's insights on how AI is changing discovery sparked the creation of this comprehensive guide.
            Watch his talk that inspired thousands of developers to rethink their approach to AI discoverability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LCEmiRjPEtQ?si=dTbTG7nMZfZxOzIB"
                title="Andrej Karpathy - AI Discovery Talk"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-2xl"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400">
              This talk fundamentally changed how we think about making projects discoverable in the AI era.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
