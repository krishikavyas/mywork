import { ExternalLink } from "lucide-react"

const anandRathiAssignment = [
  {
    title: "Secure, Simple, and Smart - Open a Free Demat Account in Minutes!",
    url: "https://webpage-content-for-demat-account.netlify.app/",
  },
]

const spectraBlogs = [
  {
    title: "Forex Trading for Beginners | Learn to Identify Trends",
    url: "https://spectragloballtd.com/blog/forex-trading-for-beginners-how-to-identify-trends-and-patterns",
  },
  {
    title: "Investing in UAE Stocks: How to Choose the Best Stock Broker in Dubai",
    url: "https://spectragloballtd.com/blog/investing-in-uae-stocks-how-to-choose-the-best-stock-brokers-in-dubai",
  },
  {
    title: "How a Forex Calendar Can Improve Your Trading Accuracy",
    url: "https://spectragloballtd.com/blog/forex-trading-for-beginners-how-to-identify-trends-and-patterns",
  },
  {
    title: "Demo Trading Account vs Real Trading: Key Differences & Best Practices",
    url: "https://spectragloballtd.com/blog/demo-trading-account-vs-real-trading-key-differences-&-best-practices",
  },
  {
    title: "The Launch of $TRUMP & $MELANIA: A New Era in Cryptocurrency",
    url: "https://spectragloballtd.com/blog/the-launch-of-trump-melania-new-era-in-cryptocurrency",
  },
  {
    title: "Spectra Global Shines at iFX Expo Dubai 2025 as Gold Sponsor",
    url: "https://spectragloballtd.com/blog/spectra-global-shines-ifx-expo-dubai-2025-gold-sponsor",
  },
  {
    title: "Spectra Global Wraps Up a Successful iFX Expo Dubai 2025 with Gold Coin Giveaway",
    url: "https://spectragloballtd.com/blog/spectra-global-wraps-up-successful-ifx-expo-dubai-2025-gold-coin-giveaway",
  },
  {
    title: "How Forex Trading Works: 6 Key Concepts You Must Understand",
    url: "https://spectragloballtd.com/blog/forex-trading-concepts",
  },
  {
    title: "Mastering Forex Trading in UAE: A Step-by-Step Guide",
    url: "https://spectragloballtd.com/blog/mastering-forex-trading-in-uae-a-step-by-step-guide",
  },
  {
    title: "Beginner's Guide: How to Trade with MetaTrader 5",
    url: "https://spectragloballtd.com/blog/beginners-guide-how-to-trade-with-metatrader-5",
  },
  {
    title: "What Is Indices Trading and What Are the Best Strategies for Trading Indices?",
    url: "https://spectragloballtd.com/blog/what-is-indices-trading-and-what-are-the-best-strategies-for-trading-indices",
  },
]

const personalBlogs = [
  {
    title: "Introduction to SEO: A Beginner's Guide to Search Engine Optimization",
    url: "https://krishikavyas.site/blog/Introduction-to-SEO-A-Beginners-Guide-to-Search-Engine-Optimization",
  },
  {
    title: "Understanding Off-Page SEO: A Beginner's Guide",
    url: "https://krishikavyas.site/blog/Understanding-Off-Page-SEO-A-Beginners-Guide",
  },
  {
    title: "On-Page SEO for Beginners: A Simple Guide to Improve Your Website",
    url: "https://krishikavyas.site/blog/On-Page-SEO-for-Beginners",
  },
  {
    title: "Technical SEO for Beginners: A Simple Guide",
    url: "https://krishikavyas.site/blog/Technical-SEO-for-Beginners",
  },
  {
    title: "Broken as: Why They Hurt SEO and How to Fix Them",
    url: "https://krishikavyas.site/blog/broken-as-seo-how-to-fix",
  },
  {
    title: "Unlock SEO Success: A Beginner's Guide to Pillar Pages",
    url: "https://krishikavyas.site/blog/pillar-pages-seo-guide",
  },
]

function BlogCard({ title, url }) {
  return (
    <div className="border border-[#e6f0ff] rounded-lg p-6 h-full transition-all hover:shadow-md hover:border-blue-300 bg-white">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="mt-4">
        <a
          href={url}
          target="_blank"
          className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm font-medium"
        >
          Read Article <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

function Blogs() {
  return (
    <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12 max-w-7xl mx-auto">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">My Blog Portfolio</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          This page showcases the blog content I've written across various niches including SEO, finance, trading, and
          investment.
        </p>
      </div>

      <div className="space-y-16">
        {/* Anand Rathi Section */}
        <section>
          <h2 className="text-2xl  mb-6">Investment: Anand Rathi Assignment</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {anandRathiAssignment.map((blog, index) => (
              <BlogCard key={`anand-${index}`} title={blog.title} url={blog.url} />
            ))}
          </div>
        </section>

        {/* Spectra Section */}
        <section>
          <h2 className="text-2xl  mb-6">Finance & Trading: Spectra Global</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spectraBlogs.map((blog, index) => (
              <BlogCard key={`spectra-${index}`} title={blog.title} url={blog.url} />
            ))}
          </div>
        </section>

        {/* SEO Section */}
        <section>
          <h2 className="text-2xl  mb-6">SEO Content: Personal Blogs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personalBlogs.map((blog, index) => (
              <BlogCard key={`personal-${index}`} title={blog.title} url={blog.url} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blogs
