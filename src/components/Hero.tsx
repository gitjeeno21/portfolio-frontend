import { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Python Developer', 'AI/ML Engineer', 'Web Designer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1 shadow-hover animate-float">
                <img
                  src={profileImage}
                  alt="Jeenokanth Profile"
                  className="w-full h-full rounded-full object-cover border-4 border-background"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-secondary rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="mb-4">
              <span className="text-lg text-muted-foreground">Hi there! I'm a </span>
              <span className="text-lg font-semibold gradient-accent-text">
                {roles[currentRole]}
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 gradient-text animate-glow">
              Jeenokanth
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Passionate about Python, AI/ML, and cutting-edge web technologies. I create 
              scalable applications and design beautiful, interactive user experiences that 
              push the boundaries of what's possible on the web. 🚀
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card hover:bg-glass-elevated border-glass-border hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass-card flex items-center justify-center rounded-xl hover:bg-gradient-accent hover:shadow-glow transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;