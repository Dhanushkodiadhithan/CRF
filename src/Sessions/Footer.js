export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-24">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="size-8 bg-primary flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-white">
                  restaurant
                </span>
              </div>
              <h2 className="text-2xl font-black tracking-tighter text-text-dark">
                CRF
              </h2>
            </div>

            <p className="text-text-gray mb-8 leading-relaxed">
              Cuddalore Raw Foods is dedicated to delivering the finest natural
              produce. We believe in transparency, sustainability, and health.
            </p>

            <div className="flex gap-4">
              {["share", "public", "mail"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-text-dark"
                >
                  <span className="material-symbols-outlined text-xl">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-xl mb-8 border-b-2 border-primary w-fit pb-2 text-text-dark">
              Get in Touch
            </h4>

            <ul className="flex flex-col gap-6">
              {[
                ["mail", "hello@cuddalorerawfoods.com"],
                ["call", "+91 98765 43210"],
                ["location_on", "Harbour Road, Cuddalore, TN"],
              ].map(([icon, text], i) => (
                <li key={i} className="flex gap-4 items-center">
                  <span className="material-symbols-outlined text-primary">
                    {icon}
                  </span>
                  <span className="text-text-gray font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-black text-xl mb-8 border-b-2 border-primary w-fit pb-2 text-text-dark">
              Our Branches
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Cuddalore Main", "Harbour Side"],
                ["Chennai Hub", "Adyar Central"],
                ["Pondicherry", "White Town"],
                ["Bangalore", "Indiranagar"],
              ].map(([city, area], i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-100 rounded-xl hover:border-primary transition bg-gray-50/50"
                >
                  <p className="font-bold text-sm text-text-dark">{city}</p>
                  <p className="text-xs text-text-gray mt-1">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-sm font-bold text-gray-400">
              Collaborating with:
            </p>
            <div className="flex gap-2">
              {["school", "science"].map((icon) => (
                <div
                  key={icon}
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center p-1 border-2 border-primary"
                >
                  <div className="size-full rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-primary">
                      {icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-xs font-bold text-text-gray">
              NIT R&D Partner
            </span>
          </div>

          <div className="text-sm text-text-gray">
            © 2024 Cuddalore Raw Foods. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
