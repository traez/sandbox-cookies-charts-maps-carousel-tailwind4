import Link from "next/link";

export default function Home() {
  // Sample data for feature highlights
  const features = [
    {
      title: "Cookie Management",
      description:
        "Learn about client-side storage with our JS Cookie implementation",
      icon: "🍪",
      link: "/jscookie",
    },
    {
      title: "Dynamic Charts",
      description: "Visualize data through interactive charts and graphs",
      icon: "📊",
      link: "/chart",
    },
    {
      title: "Interactive Maps",
      description:
        "Explore locations with our OpenStreetMap integration using Leaflet",
      icon: "🗺️",
      link: "/maps",
    },

    {
      title: "Image Carousel",
      description:
        "Browse through images with our customizable carousel component",
      icon: "🖼️",
      link: "/carousel",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <section className="mb-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sandbox 5 (Four + TailwindCSS V4)</h1>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-6">Featured Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Try it out →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">About This Sandbox</h2>
        <p className="text-gray-700 mb-4">
          Sandbox 5 is a testing environment for various frontend dependencies
          and components. It demonstrates integration with libraries like
          react-alice-carousel, Leaflet for maps, js-cookie for client-side
          storage, and more.
        </p>
        <p className="text-gray-700">
          Feel free to explore the different features and components accessible
          through the navigation menu. Each page demonstrates a specific
          functionality with interactive examples.
        </p>
      </section>
    </div>
  );
}
