export default function Process() {
  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-black text-center mb-16 text-text-dark">
        The CRF Packing Process
      </h2>

      {/* Video Block */}
      <div className="mb-16 rounded-3xl overflow-hidden aspect-video bg-text-dark flex items-center justify-center relative group cursor-pointer border border-gray-100 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtQj3HltI01g4wyBYwIog7LLzJDsyiyFAf05mvx4mizmGguGZV-7wjKRDaCWCaAGqGAlDTAS8Jo2bOhYmaX8uur-9VT_NMgHDlAE4tJV56GEaaGQEAZdkj-hkpLoTm6cqfrSdzBkXBRph-t0Fc93ZAZiWhsGXbNH6kOmBCgDe_-ZEXB9jI5T5-WrnjzqKl9Mnpaj0FshnJImUIftzzx5Na51PYCLWhTbw_KlUTjYBpPNRT7m8Wlj_wCkXtBu9UOzLr6W5A-aYNS2Yq')",
          }}
        />
        <div className="relative z-10 size-24 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-white text-5xl translate-x-1">
            play_arrow
          </span>
        </div>
        <p className="absolute bottom-8 left-8 text-white font-bold text-xl">
          See how we pack for freshness
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Steps */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-6">
            <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-text-dark">
                Artisan Cleaning
              </h4>
              <p className="text-text-gray">
                Expert handlers clean and prep your order using ozone-washed
                water to ensure maximum hygiene.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-text-dark">
                Vacuum Sealing
              </h4>
              <p className="text-text-gray">
                Airtight medical-grade packaging prevents oxidation and keeps
                the natural juices locked in.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-text-dark">
                Thermal Isolation
              </h4>
              <p className="text-text-gray">
                Orders are packed in insulated boxes with cold-packs to maintain
                a steady 2°C temperature.
              </p>
            </div>
          </div>
        </div>

        {/* Guides */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-text-dark">
            <span className="material-symbols-outlined text-primary">
              slow_motion_video
            </span>
            Product Guides
          </h4>

          <div className="flex flex-col gap-4">
            {[
              "How to prep Seer Fish",
              "Lamb Cutting Guide",
              "De-veining Prawns 101",
            ].map((title, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition cursor-pointer border border-transparent hover:border-gray-100"
              >
                <div className="size-20 rounded-lg bg-gray-200" />
                <div className="flex-1">
                  <p className="font-bold text-sm text-text-dark">{title}</p>
                  <p className="text-xs text-text-gray">
                    {i === 0 ? "2:15 mins" : i === 1 ? "1:45 mins" : "3:02 mins"}
                  </p>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">
                  play_circle
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
