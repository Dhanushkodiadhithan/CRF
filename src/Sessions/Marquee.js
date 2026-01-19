export default function Marquee() {
  const items = [
    {
      title: "Premium Seer Fish",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB23dJVHHr8gWmiUp94Y28G4mZ2m2v5y6WlyKTA4CT57Pyw6BZGTunJtpK8IttYmtmpFCyzePJwUkEIQmkG2C_Helebp3y695dgkQoVEdQ8dQ1p6cKSPDeeFDcvbYe2FG6c2mWDjr-T1bNrMTRwHaniLhxJbMtrsKOoKs23FjgwJ4ot3pSTvZ3swhzQvBaCa1ehyPy4MX68zjt-HP0lN9iIqdumo0TJFfR7RSDm5mvwmLGKlXcuereE9XAs913wK4zE9tWHbueuRSXk",
    },
    {
      title: "Country Mutton",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKGVZs7NH9vGiNCFK7BbvGeDWH9TMYQX5bOC7nvex557vA4Buf2oh8pKudNslSvqedKXDt_vr4O0jA1j70SajsnRa9NrmyCA2d808xS60XZU_Jixy0oAs4Y2RLkZapBKyCl5Ia95HPLuIpgdOUFD6noTSmjopgA1UMxmGlGK8gedj4wWMTlyaAKOI5-zOy1u9f0xgUN_3W24gYAABSIc8T6GL03QObNMZafp1B4-WNflZe91mTfdHzNcZHTVgzNg_YACIrMunMyPCX",
    },
    {
      title: "Coastal Prawns",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVmeVulXJcez_RpfOoXwRZ7AoAsD74BVgWwonalo57DFc2lODKca9rxklaTSGKEg2-ZnQN751cmuiV0BnIYtirriqi_-gL-8Yq4xRf7mD_Ueg8chRUUtEsX4e6xoeS7bopXVXQXmcXplTLIbCD7potzqFDNFsyQ52PnaAAN-CWkpko-cpWnsE8L1Sg1KlQPHOIEuF502J3dPzhZIZmPQR_t6J4_tiLGFugWIrE0KkKn2UesYfTvx80jphEcT92gwFlXOGt1YaCUOKA",
    },
    {
      title: "Organic Chicken",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHz5A6MyG40pXEnkNq2Vbens_ZhRqkVq31dU1VWpCp-YitFcqvkV-v1ntxPWbMpGQpHVU0u0uTumcps_rcOwiXqp9Ot1pfJUdg9N3Xx-zU5fqb2F9Iwvt7dhMGjctLFG-6AbFUiHw2hy0GacI4135WVcUgjgfKeHFcNDQNYlXnm1Pu-TFxukM_o8_C-hvmuLq8-G2VXXLdAPtmd31pfSANLM1rjzz09IbU9gk-mC3UIEFq4TMZmaOiePT3zfmFFEwLhNvDwt6-jtpB",
    },
  ];

  return (
    <section className="py-12 border-y border-gray-100 overflow-hidden bg-gray-50">
      <div className="flex gap-8 animate-marquee px-4">
        {items.concat(items).map((item, i) => (
          <div
            key={i}
            className="w-80 h-48 rounded-xl overflow-hidden relative shadow-md"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-4">
              <p className="text-white font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
