import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "/src/component/Button.jsx";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";



const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "subramanig064@gmail.com",
    href: "mailto:subramanig064@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9986113699",
    href: "tel:+919986113699",
  },
  {
    icon: MapPin,
    label: "Karnataka,India",
    value: "Bengaluru",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your VITE_EMAILJS_* variables and restart the dev server.");
      }
      if (publicKey) {
        try { emailjs.init(publicKey); } catch (err) { console.warn('EmailJS init failed:', err); }
      }
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        message: formData.message,
      };
      console.log("Sending EmailJS request...");
      console.log({ serviceId, templateId, publicKey });
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.info('EmailJS response:', response);
      setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({ type: "error", message: err.text || err.message || JSON.stringify(err) || "Failed to send message. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Let's build <span className="font-serif italic font-normal text-white">something great.</span></h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">Have a challenging business problem or AI initiative in mind? I'd be excited to discuss how Data Science, Machine Learning, Generative AI, and advanced analytics can help transform your data into actionable insights and measurable business outcomes.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input id="name" type="text" required placeholder="Your name..." value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input id="email" type="email" required placeholder="subramanig064@gmail.com" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} required value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder="Your message..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
              </div>
              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? <>Sending...</> : <>Send Message <Send className="w-5 h-5"/></>}
              </Button>
              {submitStatus.type && (<div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`}><p className="text-sm">{submitStatus.message}</p></div>)}
            </form>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item,i)=>(<a key={i} href={item.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><item.icon className="w-5 h-5 text-primary"/></div><div><div className="text-sm text-muted-foreground">{item.label}</div><div className="font-medium">{item.value}</div></div></a>))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8 border border-primary/30"><div className="flex items-center gap-3 mb-4"><span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/><span className="font-medium">Currently Available</span></div><p className="text-muted-foreground text-sm">I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
