export default function ProductCard({ title, price, image, description }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary hover:shadow-xl transition">
      <div className="h-64 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold mb-2 text-text-dark">{title}</h3>
        <p className="text-text-gray text-sm mb-6">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-black text-primary">
            ₹{price}{" "}
            <span className="text-xs text-text-gray font-normal">/kg</span>
          </span>
          <button className="bg-text-dark text-white p-3 rounded-lg hover:bg-primary transition-colors">
            <span className="material-symbols-outlined">
              add_shopping_cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
