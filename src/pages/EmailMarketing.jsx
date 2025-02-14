import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XIcon, EyeIcon } from "lucide-react";

export default function EmailMarketing() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const campaigns = [
    {
      name: "Spectra Global LTD IB Reward Programme 2024",
      url: "https://spectraglobalibemailcamp.netlify.app/",
      description: "Announces a contest for Introducing Brokers running from July 1 to December 31, 2024, with prizes including a Dream House, Maserati Gran-Turismo Sports Car, Rolex Watch, and more."
    },
    {
      name: "Exclusive Live Webinar: The Future of Leadership and Policy in 2024",
      url: "https://amazing-dieffenbachia-dd1b77.netlify.app/",
      description: "Invitation to a live webinar on November 5th, 2024, at 6:00 PM GST, discussing the evolving dynamics of leadership in 2024, the impact of U.S. elections, economic challenges, and policy trends."
    },
    {
      name: "Commodity Investment Insights: Gold vs. Oil",
      url: "https://incredible-gumption-761eed.netlify.app/",
      description: "Provides an analysis of investing in gold and oil, highlighting gold as a stable store of value and oil as an opportunity for dynamic growth, helping investors align their financial goals and trading styles."
    },
    {
      name: "Seasonal Trading Patterns: Unlock Profit Potential with Market Cycles",
      url: "https://benevolent-blini-f6ae01.netlify.app/",
      description: "Discusses how recognizing seasonal trends across commodities, indices, and currencies can give traders an edge, with a case study on the energy sector's seasonal cycles."
    },
    {
      name: "Post-Webinar Follow-Up: Discover the Secrets of Investment",
      url: "https://post-webinar-email.netlify.app/",
      description: "Thank you message for attending a webinar with Chief Business Development Officer Prateek Gautam, encouraging recipients to secure spots for upcoming webinars and stay connected for future updates."
    },
    {
      name: "Commodity Investment Insights: Gold vs. Oil",
      url: "https://incredible-gumption-761eed.netlify.app/",
      description: "Provides an analysis of investing in gold and oil, highlighting gold as a stable store of value and oil as an opportunity for dynamic growth, helping investors align their financial goals and trading styles."
    },
    {
      name: "Commodities Beyond Gold: Hidden Opportunities",
      url: "https://meek-tartufo-abec7c.netlify.app/",
      description: "Encourages traders to explore unique commodities like natural gas, coffee, and wheat to diversify their portfolios, providing key insights and opportunities for each."
    },
    {
      name: "Spectra Global's 2025 Outlook: Empowering Your Trading Journey",
      url: "https://dreamy-florentine-9e9242.netlify.app/",
      description: "Highlights Spectra Global's commitment to providing fresh market insights, innovative tools, and a stronger community to support traders in 2025."
    },
    {
      name: "Join Us at iFX EXPO Dubai 2025",
      url: "https://steady-unicorn-91d7ed.netlify.app/",
      description: "Invites clients to meet Spectra Global at Booth No. 53 during the iFX EXPO Dubai 2025 on January 15-16, to discuss market trends and explore new offerings."
    },
    {
      name: "Holiday Greetings and Trading Schedule",
      url: "https://imaginative-meerkat-465cdd.netlify.app/",
      description: "Extends holiday wishes to clients, provides a link to the December 2024 trading schedule, and advises on anticipated market conditions during the period."
    },
    {
      name: "The Future of Trading: Emerging Trends in 2025",
      url: "https://fastidious-phoenix-3aa5be.netlify.app/",
      description: "Discusses upcoming trends in trading for 2025, including AI-driven trading, sustainability-linked assets, and blockchain integration, emphasizing Spectra Global's innovative platform."
    },
    {
      name: "Manage Your Portfolio with Spectra Global",
      url: "https://krishikaemail.netlify.app/",
      description: "Introduces Spectra Global's secure online trading platform, emphasizing responsible trading across various assets, including currencies, equity indices, energies, precious metals, and CFDs. Highlights features like personalized services, market expertise, and strong partnerships."
    },
    {
      name: "Effortless Trading with Spectra Global",
      url: "https://spectraemailcampain.netlify.app/",
      description: "Promotes seamless trading experiences with tight spreads starting from 0.0 pips and zero commission. Emphasizes fast trade execution speeds of 10 milliseconds, catering to both seasoned traders and newcomers."
    },
    {
      name: "Gold Market Update - October 23, 2024",
      url: "https://helpful-brigadeiros-c39869.netlify.app/",
      description: "Reports on gold's surge to $2,772 per ounce due to geopolitical tensions, particularly the Israel-Iran conflict. Discusses factors like central bank purchases and economic conditions making gold an attractive investment."
    },
    {
      name: "Boost Your Strategy with Scaling Techniques",
      url: "https://serene-muffin-92c6d3.netlify.app/",
      description: "Educates traders on scaling in and out of trades to optimize returns and manage risk. Provides steps on implementing scaling strategies, including gradual position adjustments and managing emotions during market volatility."
    }
  ];

  const openModal = (campaign) => {
    setSelectedCampaign(campaign);
    setIsOpen(true);
  };

  return (
    <div className=" m-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Email Marketing Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden h-[700px] flex flex-col cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300"
            onClick={() => openModal(campaign)}
          >
            <div className="relative flex-grow">
              {/* Main iframe */}
              <iframe
                scrolling="no"
                src={campaign.url}
                title={campaign.name}
                className="w-full h-full pointer-events-none"
                loading="lazy"
              ></iframe>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 text-white">
                <p className="text-center text-lg font-semibold">{campaign.description}</p>
                <EyeIcon className="mt-4 w-10 h-10 text-white" />
              </div>
            </div>
            <div className="p-4 text-center bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-800">{campaign.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <XIcon size={24} />
          </button>
          {selectedCampaign && (
            <>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-gray-900">{selectedCampaign.name}</h2>
                <p className="text-gray-600 text-center mt-2">{selectedCampaign.description}</p>
              </div>
              <div className="flex-grow">
                <iframe
                  src={selectedCampaign.url}
                  title={selectedCampaign.name}
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}
