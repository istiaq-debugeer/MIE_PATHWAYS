export default function USPSection() {
  const steps = [
    {
      num: "01",
      title: "Start Pathway Programme in BD",
      desc: "Begin your journey at MIE Pathways study centre in Bangladesh",
    },
    {
      num: "02",
      title: "Receive Offer Letter",
      desc: "Get conditional or unconditional offers from partner universities",
    },
    {
      num: "03",
      title: "Admission & VISA Support",
      desc: "Complete assistance with university admission and visa processing",
    },
    {
      num: "04",
      title: "Direct Progression to Uni Abroad",
      desc: "Guaranteed entry to your chosen university overseas",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-4">Your Journey to Success</h2>
      <p className="text-gray-600 mb-12">
        Follow our proven pathway from Bangladesh to your dream university abroad
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl font-bold text-blue-600 mb-2">{s.num}</div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
