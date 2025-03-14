const pageChart = () => {
  const metrics = [
    {
      title: "Pie Chart",
      description: "Visualize distribution of user growth across years",
      icon: "🥧",
    },
    {
      title: "Bar Chart",
      description: "Compare users gained vs lost with side-by-side bars",
      icon: "📊",
    },
    {
      title: "Line Chart",
      description: "Track trends in user metrics over time",
      icon: "📈",
    },
  ];

  return (
    <div className="py-2 w-full max-w-4xl mx-auto">
      <section className="flex flex-col justify-between items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Chart Dashboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to the interactive chart dashboard. Select a chart type from
            the navigation above to explore different visualizations of user
            data from 2016-2020.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
          {metrics.map((chart, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4 text-center">{chart.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-center">
                {chart.title}
              </h2>
              <p className="text-gray-600 text-center">{chart.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100 max-w-2xl">
          <h3 className="font-medium text-lg mb-2">About This Dashboard</h3>
          <p className="text-gray-700">
            This dashboard uses Chart.js and React to visualize sample user
            data. Each chart offers different insights into user acquisition and
            retention metrics. Click on the chart links above to explore each
            visualization type.
          </p>
        </div>
      </section>
    </div>
  );
};

export default pageChart;
