import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

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
};

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

const tools = {
  "SEO": [
    {"name": "Google Search Console", "url": "https://search.google.com/search-console"},
    {"name": "Google Analytics", "url": "https://analytics.google.com/"}, 
    {"name": "SEMrush", "url": "https://www.semrush.com/"}, 
    {"name": "Ahrefs", "url": "https://ahrefs.com/"}, 
    {"name": "Screaming Frog", "url": "https://www.screamingfrog.co.uk/seo-spider/"}, 
    {"name": "Moz", "url": "https://moz.com/"}, 
    {"name": "Ubersuggest", "url": "https://neilpatel.com/ubersuggest/"}, 
    {"name": "Yoast SEO", "url": "https://yoast.com/"}
  ],
  "Content Writing": [
    {"name": "Grammarly", "url": "https://www.grammarly.com/"}, 
    {"name": "Hemingway Editor", "url": "http://www.hemingwayapp.com/"}, 
    {"name": "ProWritingAid", "url": "https://prowritingaid.com/"}, 
    {"name": "Google Docs", "url": "https://docs.google.com/"}
  ],
  "Social Media": [
    {"name": "Buffer", "url": "https://buffer.com/"}, 
    {"name": "Canva", "url": "https://www.canva.com/"}
  ],
  "Management": [
    {"name": "Trello", "url": "https://trello.com/"}, 
    {"name": "Asana", "url": "https://asana.com/"}, 
    {"name": "Jira", "url": "https://www.atlassian.com/software/jira"}
  ],
  "Email Marketing": [
    {"name": "HubSpot", "url": "https://www.hubspot.com/"}, 
    {"name": "Mailchimp", "url": "https://mailchimp.com/"}
  ],
  "CMS": [
    {"name": "AWS", "url": "https://aws.amazon.com/"}, 
    {"name": "WordPress", "url": "https://wordpress.org/"}
  ],
};


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">My Portfolio of Digital Work</h1>

      <p className="text-lg text-center text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
        Explore my contributions across SEO, social media strategy, content development, and email marketing crafted to inform, engage, and convert.
      </p>

      {/* NGO Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Content Strategy & Execution</h2>
        <p className="text-base text-gray-600 mb-8">
          A showcase of campaigns and media crafted with storytelling, visual design, and data-driven strategy to engage audiences across platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Link
            to="/blogs"
            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all border border-gray-200 hover:border-blue-500 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-medium mb-1 text-gray-800">Blogs</h3>
              <p className="text-sm text-gray-600">Created and edited engaging content for Instagram and other platforms.</p>
            </div>
            <div className="mt-4 text-blue-500 group-hover:text-blue-600 flex items-center gap-1 font-medium">
              Explore <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            to="/social-media"
            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all border border-gray-200 hover:border-blue-500 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-medium mb-1 text-gray-800">Social Media</h3>
              <p className="text-sm text-gray-600">Crafted strategy and managed content across platforms for client outreach.</p>
            </div>
            <div className="mt-4 text-blue-500 group-hover:text-blue-600 flex items-center gap-1 font-medium">
              Explore <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            to="/email-marketing"
            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all border border-gray-200 hover:border-blue-500 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-medium mb-1 text-gray-800">Email Marketing</h3>
              <p className="text-sm text-gray-600">Designed and implemented successful email campaigns for various clients.</p>
            </div>
            <div className="mt-4 text-blue-500 group-hover:text-blue-600 flex items-center gap-1 font-medium">
              Explore <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-3">NGO Projects</h2>
        <p className="text-base text-gray-600 mb-8">Developed detailed storyboards for educational content on women's health.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-sm text-blue-600 hover:underline">View Document</p>
            </a>
          ))}
        </div>
      </section>

      {/* SEO Achievements */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">SEO Achievements</h2>
        <p className="text-base text-gray-600 mb-8">Successfully ranked keywords for various categories.</p>

        {Object.entries(keywords).map(([category, words]) => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 capitalize">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {words.map((keyword, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border-l-1 border-blue-500"
                >
                  <p className="text-gray-800 text-sm">{keyword}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tools</h2>
        <p className="text-base text-gray-600 mb-8">These are the tools I regularly use across various domains.</p>

        {Object.entries(tools).map(([category, toolsList]) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {toolsList.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 hover:border-blue-500 text-sm text-gray-800 text-center block"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
