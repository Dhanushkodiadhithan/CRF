import ProductCard from "@/Components/ProductCard";

export default function Products() {
  return (
    <section id="products" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black text-text-dark">
              What We Sell
            </h2>
            <p className="text-text-gray mt-2">
              Curated selection of our best raw produce
            </p>
          </div>
          <a
            href="#"
            className="text-primary font-bold flex items-center gap-2 hover:underline"
          >
            View Catalog{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard
            title="Wild Sea Bass"
            price={549}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCY9s2iSMhH9F75t4mGFP3Mm6VdqDb7Lk9B6Ob2ee8tPhagrff_9opYFpAy7ULi9Uodt1BAeTlc6ElD5hPifN4Hepfi1Xd3bpkke738wplXMM0az_x-5F4Ze-9QmpP6nerCXg2ECPBKSxBG9dPJUzkX7P6g4lCKZyNA5KqjLBmeEVNPoqLdOrQSpkfLv_QWxmkpoexRFiFdxs4uYI1OoVQSllmwRjbH51UBtU4IVn_HIwAKrFptFGCup9cwWL1QrihT5Supcq8XYwa5"
            description="Freshly caught daily from the Bay of Bengal. Cleaned and cut to your preference."
          />

          <ProductCard
            title="Premium Lamb"
            price={899}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCFv0ubntP-n0JBSOpBeU93f1CLdpzaKJ1zDA_KYNAPuBe2xd-5ZDX6n6_kmR0_bRXMcwVBdqCPdST6pgLj_BYmJrKDNVPrj72Ec1LUfRcKVSr1my-Lq8Q1WN73cj7nuBB0QgLZ-a1Dg85X_LY0Uzd3BgO5WEwfUUSKgz6IWb900WoKF18C_PKe9Kw2nA2hrPp-NJZJoDEOpVqAOHqixH1BJgVm5VNPE3BHCbpjgHSDb4pE0eT-msAQISKNSI-4zg8sBgjGprgovy4J"
            description="Pasture-raised, grain-free lamb. Tender cuts perfect for curries and roasts."
          />

          <ProductCard
            title="Jumbo King Prawns"
            price={720}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC5sO-DTvx0Z-5aReUkmKNpJJH-NH4MxYTQvF4-fp5bhXUQb7InUHb-K-QQC5MuZ0GEKSvfjerRNYxi3hpX7wJYWelcDBiHhmk64FKddOeBOmrCgGW9EH-y1CN0EIFmJHXg17m6_XOywYJecBOgIZJD9XiDb9aFlDXS8LY7t6HbE5OQpsrBa_tDPdoi0dLekAIVSqsHfgcdu6lXPzxaaz9QglLVx1nqmFBDIuk9sia7xct2s1vhkpYiZL3Bjdg5QSP5b8ORK9Ao5WGD"
            description="Large sized tiger prawns. De-veined and ready to cook."
          />
        </div>
      </div>
    </section>
  );
}
