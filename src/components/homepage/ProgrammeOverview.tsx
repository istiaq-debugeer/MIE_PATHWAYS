'use client";'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, UserCheck } from "lucide-react";

export default function ProgrammeOverview() {
  const programmes = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "International Foundation Year (IFY)",
      description:
        "Prepare for undergraduate study at top universities with our comprehensive foundation programme designed for school leavers.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "International Year One (IYOne)",
      description:
        "Fast-track your undergraduate degree with direct entry to second year at partner universities after completion.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-blue-600" />,
      title: "Master’s Preparation Programme (MPP)",
      description:
        "Develop the skills and knowledge needed to excel in postgraduate studies at leading universities worldwide.",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Our Programmes</h2>
      <p className="text-gray-600 mb-12">
        Choose the pathway that matches your academic goals and unlock
        opportunities at world-class universities
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {programmes.map((p, i) => (
          <Card key={i} className="hover:shadow-lg transition">
            <CardHeader className="flex flex-col items-center gap-2">
              {p.icon}
              <CardTitle className="text-lg font-semibold">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>{p.description}</p>
              <a href="#" className="text-blue-600 font-medium inline-flex items-center mt-4">
                Learn More →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
