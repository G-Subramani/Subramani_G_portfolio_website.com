const experiences = [
  {
    period: "June 2025-May 2026",
    role: "Manager – Data Science & Risk Analytics",
    company: "Medybiz pharma pvt ltd",
    description:
      "Leading enterprise AI and risk analytics programs, developing fraud detection, anomaly detection, and RAG-powered investigation platforms that improve compliance monitoring, governance, and executive decision-making.",
    technologies: ["Python", "LangChain", "RAG", "LLMs", "AWS Bedrock", "Amazon SageMaker", "Amazon S3", "AWS Lambda", "AWS Glue", "Amazon Athena", "Amazon RDS", "CloudWatch", "Power BI", "Isolation Forest", "XGBoost", "Graph Analytics", "MLOps"],
    current:true,
  },
  {
    period: "January 2025 – May 2025 ",
    role: "Senior Data Scientist",
    company: "Digital Solutions Co.",
    description:
      "Built AI-driven customer intelligence and supply chain optimization solutions, leveraging demand forecasting, churn prediction, customer segmentation, and recommendation systems to improve inventory planning, customer retention, and marketing performance. Developed scalable AWS-based data pipelines for advanced analytics and forecasting.",
    technologies: ["Python", "AWS S3", "AWS Glue", "Amazon Athena", "Amazon EC2", "Amazon RDS", "Forecasting Models", "Customer Segmentation", "Recommendation Systems", "Data Engineering", "Power BI"],
    current: false,
  },
  {
    period: "July 2024 – December 2024 ",
    role: "Computational Biologist (Generative AI)",
    company: "Katamaran Industries Pvt. Ltd.",
    description:
      "Developed Generative AI solutions for computational biology, leveraging Transformer models, protein embeddings, and LLM-powered research workflows to accelerate protein sequence analysis, candidate generation, and high-throughput screening for therapeutic discovery.",
    technologies: [" Python", " Generative AI", " Hugging Face", " LangChain", " AWS Bedrock", " SageMaker", " FAISS/Pinecone", " Transformers", " Bioinformatics"],
    current: false,
  },
  {
    period: "June 2023 – July 2024 ",
    role: "Research Scientist (Data Science Focus)",
    company: "K-Cat Enzymatic Pvt. Ltd.",
    description:
      "Built AI-driven enzyme activity prediction models using XGBoost and Random Forest to accelerate enzyme discovery and experimental optimization. Developed real-time research analytics platforms that enabled scientists to monitor assay performance, evaluate candidates, and make data-driven decisions.",
    technologies: ["Python","Machine Learning","XGBoost","Random Forest","Power BI","Dash (Plotly)","Predictive Analytics","Enzyme Engineering","Research Analytics",],
    current: false,
  },
  { period: "May 2020 – May 2023",
    role: "Executive – Data Analytics",
    company: "Biocon Biologics Limited",
    description:
      "Leveraged statistical analytics and quality intelligence to monitor pharmaceutical manufacturing processes, ensuring regulatory compliance and product consistency. Developed data-driven insights through batch analysis, stability studies, and process performance monitoring to support quality assurance and operational excellence",
    technologies: ["SQL","SAS","Power BI","Statistical Quality Control","Quality Analytics","cGMP","Manufacturing Analytics","Process Validation","ETL","Data Analysis",],
    current: false,
  },
  { period: "September 2017 – May 2020 ",
    role: "Scientist (Data & Research Support)",
    company: "Anthem Biosciences Pvt. Ltd.",
    description:
      "Leveraged statistical modeling and experimental analytics to support drug discovery and early-stage research initiatives. Designed data-driven validation frameworks, performed hypothesis testing, and developed analytical reports that improved research accuracy and accelerated scientific decision-making.",
    technologies: ["Excel","Statistical Analysis","Regression Modeling","Hypothesis Testing","Experimental Design","Data Visualization","Research Analytics","Scientific Reporting",],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            My professional evolution from research scientist to data science leader, applying Machine Learning, Generative AI, and advanced analytics to solve complex challenges across biotechnology, healthcare, retail, and risk management.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing Timeline Line - Enhanced */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 z-0">
            {/* Main Timeline */}
            <div className="w-full h-full bg-gradient-to-b from-primary via-primary/80 to-transparent" />
            {/* Outer Glow Layer 1 */}
            <div className="absolute inset-0 w-full h-full blur-md bg-gradient-to-b from-primary/60 via-primary/30 to-transparent opacity-80 animate-pulse" />
            {/* Outer Glow Layer 2 */}
            <div className="absolute -inset-1 w-[6px] h-full blur-lg bg-gradient-to-b from-primary/40 via-primary/20 to-transparent opacity-60" style={{ left: '-2px' }} />
            {/* Box Shadow Glow */}
            <div className="absolute inset-0 w-full h-full shadow-[0_0_30px_rgba(32,178,166,1),0_0_60px_rgba(32,178,166,0.5)]" />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot - Enhanced */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-20 flex items-center justify-center">
                  {/* Outer Glow Ring */}
                  <div className="absolute w-4 h-4 rounded-full bg-primary/20 animate-pulse" />
                  {/* Middle Glow Ring */}
                  <div className="absolute w-2 h-2 rounded-full bg-primary/40 blur-sm animate-pulse animation-delay-100" />
                  {/* Main Dot */}
                  <div className="relative w-1.5 h-1.5 bg-primary rounded-full ring-2 ring-background shadow-lg shadow-primary/60">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-full bg-primary blur-sm opacity-80" />
                    {/* Current Indicator Pulse */}
                    {exp.current && (
                      <>
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                        <span className="absolute -inset-1 rounded-full border border-primary/50 animate-pulse" />
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass relative p-6 rounded-2xl border border-primary/50 hover:border-primary transition-all duration-500 overflow-hidden group`}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-primary/10 text-xs rounded-full text-primary border border-primary/30 hover:border-primary/70 hover:bg-primary/20 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;