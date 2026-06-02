import { ArrowUpRight, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "/src/component/AnimatedBorderButton.jsx";
const baseUrl = import.meta.env.BASE_URL;
const projects = [
  {
    title: "AI-Powered Risk Intelligence & Compliance RAG Engine",
    description:
      "A comprehensive system Transforming Compliance, Audit, and Patient Access Operations with Generative AI.",
    image: `${baseUrl}project/project1.png`,
    tags: ["Retrieval-Augmented Generation (RAG)", "LangChain", "Large Language Models (LLMs)"],
    link: "#",
    github: "https://github.com/G-Subramani/AI-Powered-Risk-Intelligence-Compliance-RAG-Engine",
  },
  {
    title: "Fraud & Anomaly Detection System",
    description:
      "Leveraging Machine Learning and Graph Analytics to Detect Financial Irregularities and Operational Risk.",
    image: `${baseUrl}project/project2.png`,
    tags: ["Unsupervised Learning (Isolation Forest)", "Graph Networks", "XGBoost", "PostgreSQL", "Power BI"],
    link: "#",
    github: "https://github.com/G-Subramani/Fraud-Anomaly-Detection-System",
  },
  {
    title: "Customer Segmentation & Personalization Engine",
    description:
      "Leveraging Machine Learning and Customer Analytics to Drive Growth, Retention, and Personalized Shopping Experiences.",
    image: `${baseUrl}project/project3.png`,
    tags: ["Customer Segmentation", "K-Means Clustering", "Random Forest", "Recommendation System","Power BI"],
    link: "#",
    github: "https://github.com/G-Subramani/Customer-Segmentation-Personalization-Engine",
  },
  {
    title: "Supply Chain Optimization & Demand Forecasting System",
    description:
      "Transforming Inventory Planning and Customer Demand Forecasting through Machine Learning.",
    image: `${baseUrl}project/project4.png`,
    tags: ["SARIMA Models", "Facebook Prophet", "XGBoost Forecasting Models","MongoDB", "AWS","Google Analytics 4 (GA4)",],
    link: "#",
    github: "https://github.com/G-Subramani/Supply-Chain-Optimization-Demand-Forecasting-System",
  },
    {
    title: "Protein Engineering & Drug Discovery Engine",
    description:
      "Accelerating Therapeutic Research for Neurodegenerative Diseases Using Generative AI and Computational Biology.",
    image: `${baseUrl}project/project5.png`,
    tags: ["Generative AI", "LLMs(Hugging Face)", "Python", "Bioinformatics", "Machine Learning", "NLP", "Transformers"],
    link: "#",
    github: "https://github.com/G-Subramani/Protein-Engineering-Drug-Discovery-Engine",
  },
      {
    title: "Enzyme Activity Prediction & Research Analytics",
    description:
      "Accelerating Enzyme Discovery Through Machine Learning and Experimental Intelligence",
    image: `${baseUrl}project/project6.png`,
    tags: ["Machine Learning", "XGBoost", "Random Forest", "Python", "Power BI", "Dash (Plotly)." ],
    link: "#",
    github: "https://github.com/G-Subramani/Enzyme-Activity-Prediction-Research-Analytics-",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of my data science and AI projects, from predictive modeling and deep
            learning to intelligent systems that deliver measurable impact.
          </p>
        </div>  

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};