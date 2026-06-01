import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "AI/ML",
    description:
      "Building intelligent models that transform raw data into actionable insights.",
  },
  {
    icon: Lightbulb,
    title: "Data Analytics",
    description:
      "Analyzing complex datasets to uncover trends, patterns, and opportunities.",
  },
  {
    icon: Rocket,
    title: "Data Engineering",
    description: "Designing scalable data pipelines and efficient data-driven systems.",
  },
  {
    icon: Users,
    title: "AI Innovation",
    description:
      "Exploring cutting-edge AI technologies to solve real-world problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Data Scientist and AI Engineer with experience in Machine Learning, Generative AI, Cloud Technologies, and Data Engineering. 
                Started my professional journey in the pharmaceutical domain, where working with research and scientific data sparked a strong 
                interest in solving real-world business problems through data-driven solutions. Passionate about reducing manual effort, 
                improving operational efficiency, optimizing costs, and building intelligent systems that create measurable impact.
              </p>
              <p>
                Experienced in developing end-to-end AI and analytics solutions including predictive modeling, fraud detection systems, 
                NLP applications, RAG-based AI assistants, automation workflows, and scalable ML pipelines. Skilled in Python, SQL, 
                Deep Learning, LLMs, MLOps, Azure, AWS, and modern data platforms. Strong understanding of both business requirements 
                and technical implementation, with the ability to transform complex data into actionable insights and scalable AI products.
              </p>
              <p>
                Continuously exploring advancements in AI, Agentic AI, and enterprise automation while focusing on building practical, 
                high-performance solutions for real-world challenges.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build intelligent, data-driven solutions that empower businesses to innovate, make confident decisions,
                 and create measurable impact."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};