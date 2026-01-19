export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-white text-xl">
              restaurant
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tighter text-text-dark">
            CRF
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {["about", "products", "process", "reviews", "contact"].map((x) => (
            <a
              key={x}
              href={`#${x}`}
              className="text-sm font-semibold text-text-gray hover:text-primary transition"
            >
              {x.toUpperCase()}
            </a>
          ))}
        </nav>

        <button className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-bold transition-transform hover:scale-105 cursor-pointer">
          Order Now
        </button>
      </div>
    </header>
  );
}
