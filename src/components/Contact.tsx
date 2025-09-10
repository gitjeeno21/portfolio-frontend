import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL 
        ? `${import.meta.env.VITE_API_URL}/api/messages`
        : "http://localhost:5000/api/messages";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully! Thank you for reaching out. I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      alert(error.message || "Server error. Please try again later.");
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jeenojk01@gmail.com',
      href: 'mailto:jeenojk01@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 xxxxxxxxxx',
      href: 'tel:+917867836030'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamilnadu,India',
      href: '#'
    }
  ];

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/20"></div>
        
        {/* Floating ambient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-rose-300/20 rounded-full blur-3xl animate-pulse delay-2000 opacity-30"></div>
      </div>

      <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-20 z-10">
        <div className="container mx-auto">
          <div className="backdrop-blur-3xl bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent text-center mb-12 animate-pulse">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-slate-700">
                    Let's work together
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    I'm always interested in new opportunities and interesting projects. 
                    Whether you have a question or just want to say hi, I'll try my best 
                    to get back to you!
                  </p>
                </div>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 backdrop-blur-2xl bg-white/15 border border-white/30 rounded-xl hover:bg-white/25 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">{info.label}</div>
                        <div className="text-slate-700 font-medium">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full backdrop-blur-2xl bg-white/15 border border-white/30 focus:border-cyan-400 h-12 rounded-xl px-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full backdrop-blur-2xl bg-white/15 border border-white/30 focus:border-cyan-400 h-12 rounded-xl px-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full backdrop-blur-2xl bg-white/15 border border-white/30 focus:border-cyan-400 rounded-xl px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;