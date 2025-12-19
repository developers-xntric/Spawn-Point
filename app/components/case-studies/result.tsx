interface ResultsCard {
  title: string;
}

interface ResultsSectionProps {
  results: ResultsCard[];
  description?: string;

  sectionClass?: string;
  containerClass?: string;
  titleClass?: string;
  gridClass?: string;
  cardClass?: string;
  descriptionClass?: string;
}

export default function ResultsSection({
  results,
  description,
  sectionClass = "",
  containerClass = "2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto text-center",
  titleClass = "text-[50px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase text-white tracking-[1.5px] mb-6",
  gridClass = "grid md:grid-cols-3 gap-6 mb-6",
  cardClass = "bg-[#14235C] p-6 rounded-xl text-white text-sm md:text-base flex items-center justify-center min-h-[120px] md:min-h-[140px]",
  descriptionClass = "text-white/70 text-xs md:text-sm",
}: ResultsSectionProps) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <h2 className={titleClass}>RESULTS</h2>

        <div className={gridClass}>
          {results.map((res, index) => (
            <div key={index} className={cardClass}>
              {res.title}
            </div>
          ))}
        </div>

        {description && (
          <p className={descriptionClass}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
