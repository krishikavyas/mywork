import React from "react";
import { Link } from "react-router";

const keywords = {
  "top 10": [
      "Wet n joy ticket price",
      "Wet and joy ticket price",
      "Great escape ticket price",
      "Magic mountain amusement park price",
      "Water kingdom ticket price",
      "Wonderla bangalore",
      "Wonderla kochi",
      "Best waterpark in mumbai",
      "Best waterparks in and around mumbai",
      "Sai teerth",
      "Shangrila waterpark ticket price",
      "Smaash",
      "Essel world",
      "Global broker",
      "Global trading platform",
      "Dynamic trading platforms",
      "World leading metatrader 5 platform",
      "Indices trading platform in UAE",
      "Indices trading platform UAE",
      "Advanced futures trading platform",
      "CFD global trading",
      "Online metatrader 5 trading in UAE",
      "CFD global app",
      "Metatrader 5 for beginners",
      "Limitless forex"
    ],
    "top 100": [
      "Online trading",
      "Trading online",
      "Multi-assets global broker",
      "Download and install metatrader 5",
      "Metatrader 5 multi-asset platform",
      "Best trade platform in UAE",
      "Online trading Dubai",
      "Dubai online trading platform",
      "How to use MT5",
    ]
  }

const projects = [
  {
    title: "Female Reproductive System",
    url: "https://docs.google.com/document/d/1aroxk2TWhqtih4JpoJ3uXoZumSXobrIevtci1cPQ_ic/edit?tab=t.0#heading=h.x02ygn841mst",
  },
  {
    title: "Feminine Hygiene",
    url: "https://docs.google.com/document/d/1V3PEdbXOVyKKSqJaO8y6MU9HXhmxrX4NAfdUk_OgAaM/edit?tab=t.0",
  },
  {
    title: "Menstrual Cramps",
    url: "https://docs.google.com/document/d/1cMogmslIygtjPo1uy6EbYsmYpEeVKBoFiEMXnLwCbwI/edit?tab=t.0#heading=h.x02ygn841mst",
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
    <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">Showcasing My Work</h1>
    <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      This page highlights the projects and work I've done in SEO, social media management, NGO projects, and email marketing.
    </p>


      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <Link to="/social-media" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col border border-blue-500 text-blue-600 cursor-pointer">
          <h3 className="text-2xl font-semibold mb-2">Social Media</h3>
          <p className="text-gray-600">Created and edited engaging content for Instagram and other platforms.</p>
        </Link>
        <Link to="/email-marketing" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col border border-blue-500 text-blue-600  cursor-pointer">
          <h3 className="text-2xl font-semibold mb-2">Email Marketing</h3>
          <p className="text-gray-600">Designed and implemented successful email campaigns for various clients.</p>
        </Link>
      </section>


      {/* SEO Achievements */}
      <section className="mb-16">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">SEO Achievements</h2>
      <p className="text-lg text-gray-600 mb-6">
        Successfully ranked keywords for various categories.
      </p>
      
      {Object.entries(keywords).map(([category, words]) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-4 capitalize">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {words.map((keyword, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-l-4 border-blue-500"
              >
                <p className="text-gray-800 text-lg font-medium">{keyword}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>

      {/* NGO Projects */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">NGO Projects</h2>
        <p className="text-lg text-gray-600 mb-6">Developed detailed storyboards for educational content on women's health.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-500 hover:bg-blue-50"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-blue-600 hover:underline">View Document</p>
            </a>
          ))}
        </div>
      </section>

      
    </div>
  );
}