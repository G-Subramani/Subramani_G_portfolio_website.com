import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
{
quote:
"Subramani has been instrumental in driving our AI and risk analytics initiatives. His ability to combine machine learning, business strategy, and compliance requirements into scalable solutions has significantly strengthened our decision-making capabilities.",
author: "Kashif",
role: "CTO & Chief Growth Officer, Medybiz Pharma",
},
{
quote:
"Subramani consistently transformed complex customer and supply chain data into actionable business insights. His forecasting and customer intelligence solutions played a key role in improving operational efficiency and business growth.",
author: "Manikant Mani",
role: "Co-Founder, Outzidr",
},
{
quote:
"Working alongside Subramani on Generative AI and computational biology projects was an exceptional experience. His understanding of Transformers, LLMs, and biological data enabled the team to accelerate research and innovation significantly.",
author: "Brijesh Singh",
role: "AI/ML Engineer, Katamaran Industries",
},
{
quote:
"Subramani demonstrated a rare ability to bridge scientific research and machine learning. His predictive modeling work helped researchers prioritize high-potential enzyme candidates and make faster, data-driven decisions.",
author: "Pravin Paul",
role: "Founder & Chief Scientific Officer, K-Cat Enzymatic",
},
{
quote:
"His analytical rigor and statistical expertise consistently contributed to improving quality monitoring and process reliability. Subramani was highly dependable and always approached challenges with a problem-solving mindset.",
author: "Kondru Nagendra",
role: "Assistant Manager, Biocon Biologics",
},
{
quote:
"Subramani's strength lies in his ability to transform experimental data into meaningful scientific insights. His curiosity, analytical thinking, and commitment to research excellence made him a valuable contributor to our research programs.",
author: "Sampath Kumar Rajanna",
role: "General Manager, Anthem Biosciences",
},
];


export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-indigo-700 text-white flex items-center justify-center text-sm font-semibold ring-2 ring-primary/20">
                  {testimonials[activeIdx].author
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};