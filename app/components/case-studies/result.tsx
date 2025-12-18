interface ResultsCard {
  title: string;
}

interface ResultsSectionProps {
  results: ResultsCard[];
  description?: string; // dynamic paragraph
}


export default function ResultsSection() {
  const results = [
    {
      title: "It stressed humor and gamer habits, increasing relevance.",
    },
    {
      title: "Achieved ~800K video views across multiple gaming categories.",
    },
    {
      title: "Achieved a 4.52% clickthrough rate (CTR), dramatically exceeding the industry average for the format.",
    },
  ];

  return (
    <section className="bg-[#0B1A3B] py-16">
      <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-12">RESULTS</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {results.map((res, index) => (
            <div
              key={index}
              className="bg-[#14235C] p-6 rounded-xl text-white text-sm md:text-base flex items-center justify-center min-h-[120px] md:min-h-[140px]"
            >
              {res.title}
            </div>
          ))}
        </div>

        <p className="text-white/70 text-xs md:text-sm">
          In doing so, Chupa Chups had become a native part of the gaming moment,
          and not just a break in the action. It succeeded in targeting gaming
          audiences and in-game moment branding.
        </p>
      </div>
    </section>
  );
}

