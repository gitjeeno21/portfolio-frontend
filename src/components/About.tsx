const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="glass-card hover-lift p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8 animate-glow">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm an engineering student with an insatiable curiosity for artificial intelligence, 
            machine learning, and modern web development. My journey in tech is driven by a passion 
            for solving complex real-world problems and creating digital experiences that matter. 
            I believe in the power of clean code, innovative design, and the endless possibilities 
            that emerge when creativity meets technology. 🌟
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-accent-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-accent-text mb-2">3+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-accent-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-accent-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;