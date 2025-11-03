"use client";

import { Shield, Clock, Target, Globe2, Star, HeartHandshake } from "lucide-react";
import { use } from "react";

export default function WhyChooseSection() {
  const features = [
    { icon: <Shield />, title: "NCUK Accredited Centre", desc: "Internationally recognized qualifications from NCUK." },
    { icon: <Clock />, title: "Flexible Study Routes", desc: "Choose from multiple programmes to suit your goals." },
    { icon: <Target />, title: "Guaranteed Progression", desc: "Secure entry to over 65 partner universities." },
    { icon: <Globe2 />, title: "Affordable & Flexible", desc: "Start locally, reduce costs, and progress abroad seamlessly." },
    { icon: <Star />, title: "Quality Assured", desc: "Courses meet strict international academic standards." },
    { icon: <HeartHandshake />, title: "Personalised Guidance", desc: "Support at every step from application to visa." },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Why Choose NCUK Programmes at MIE Pathways
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Join thousands of successful students who have achieved their dreams through our proven pathway programmes.
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-lg hover:shadow-lg transition">
            <div className="flex justify-center text-blue-600 mb-4">{f.icon}</div>
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
