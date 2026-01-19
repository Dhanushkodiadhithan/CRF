export default function Intention() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="p-8 bg-primary rounded-2xl text-white shadow-xl shadow-red-100">
            <span className="material-symbols-outlined text-4xl mb-4">
              handshake
            </span>
            <h4 className="font-bold text-xl mb-2">Direct Sourcing</h4>
            <p className="text-sm opacity-90">
              From Cuddalore fishermen and local farmers to your home.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl mt-8 border border-gray-100">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">
              health_and_safety
            </span>
            <h4 className="font-bold text-xl mb-2 text-text-dark">
              Health First
            </h4>
            <p className="text-sm text-text-gray">
              Zero additives, chemicals or storage preservatives used.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 text-right">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-text-dark">
            CRF Intention
          </h2>
          <div className="w-24 h-2 bg-primary ml-auto mb-8" />
          <p className="text-lg text-text-gray leading-relaxed">
            Our mission is to bridge the gap between pure natural resources and
            your kitchen. We prioritize ethical sourcing, supporting local
            farmers, and strictly adhering to zero-preservative standards to
            ensure your family consumes only the healthiest, most natural food.
          </p>
        </div>
      </div>
    </section>
  );
}
