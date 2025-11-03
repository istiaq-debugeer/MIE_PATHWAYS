import Image from "next/image";

export default function AlumniSection() {
  const testimonials = [
    {
      quote:
        "MIE Pathways provided exceptional support throughout my journey. The teaching and guidance helped me secure my dream university.",
      name: "Anika Rahman",
      uni: "University of Manchester",
      img: "/images/student1.jpg",
    },
    {
      quote:
        "The International Foundation Year prepared me perfectly for undergraduate studies. I'm now studying Computer Science in the UK.",
      name: "Fahim Ahmed",
      uni: "University of Bristol",
      img: "/images/student2.jpg",
    },
    {
      quote:
        "From application to visa, MIE Pathways supported me at every step. I couldn't have asked for better preparation for studying abroad.",
      name: "Nabila Khan",
      uni: "University of Melbourne",
      img: "/images/student3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Alumni Success Stories</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Hear from our graduates about their journey from MIE Pathways to world-class universities.
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <div className="flex items-center justify-center gap-3">
              <Image src={t.img} alt={t.name} width={50} height={50} className="rounded-full" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-600">{t.uni}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        View All Reviews
      </button>
    </section>
  );
}
