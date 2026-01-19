export default function Hero() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Cuddalore Raw Foods
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-4 text-text-dark">
              Purely Natural.
              <br />
              Freshly Delivered.
            </h1>

            <p className="text-text-gray text-lg mt-6 max-w-lg">
              Cuddalore Raw Foods brings the freshest natural products directly
              from our coastal source to your doorstep. Experience the peak
              quality of premium raw meat and sustainably caught fish.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 shadow-lg shadow-red-200 flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_cart</span>
              Buy Now
            </button>

            <button className="border-2 border-gray-200 text-text-dark px-8 py-4 rounded-lg font-bold hover:bg-gray-50">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-xl rotate-3 hover:rotate-0 transition">
            <div className="size-48 bg-primary/5 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-8xl">
                eco
              </span>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-text-dark">100% Raw</h3>
              <p className="text-text-gray">No Preservatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
