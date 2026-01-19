export default function Reviews() {
  return (
    <section id="reviews" className="bg-primary py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Customer Chronicles
          </h2>
          <p className="opacity-90">
            Don't just take our word for it—see what our regular buyers say.
          </p>
        </div>

        {/* Avatars */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {["Chef Anita", "Rahul Sharma", "Sarah J.", "Mr. Karthik"].map(
            (name, i) => (
              <div
                key={i}
                className="aspect-9/16 bg-black/20 rounded-2xl overflow-hidden relative group border border-white/20"
              >
                <div className="absolute inset-0 bg-gray-400 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/20">
                  <span className="material-symbols-outlined text-5xl">
                    play_circle
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 text-xs font-bold bg-primary px-2 py-1 rounded">
                  {name}
                </p>
              </div>
            )
          )}
        </div>

        {/* Text Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              text:
                "The freshness of the seer fish reminded me of my childhood in Cuddalore. Truly authentic and prompt delivery.",
              name: "Mrs. Lakshmi K.",
            },
            {
              text:
                "Finally a service that doesn't use chemicals. The mutton was so tender and flavorful.",
              name: "Dr. Vikram Raj",
            },
            {
              text:
                "The packing is world-class. Everything arrived cold and vacuum sealed.",
              name: "Priya S.",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className="material-symbols-outlined fill-1"
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="italic mb-6 opacity-95 text-lg leading-relaxed">
                "{r.text}"
              </p>
              <p className="font-bold">— {r.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-primary px-10 py-4 rounded-xl font-black hover:scale-105 transition flex items-center gap-2 mx-auto shadow-2xl">
            <span className="material-symbols-outlined">rate_review</span>
            GIVE A REVIEW
          </button>
        </div>
      </div>
    </section>
  );
}
