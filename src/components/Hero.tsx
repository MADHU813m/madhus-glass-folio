import { Github, Instagram, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/DADI_Madhu_Resume.pdf';
    link.download = 'DADI_Madhu_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="glass rounded-2xl p-6 hero-float">
                <img
                  src="/lovable-uploads/9113dca5-8b38-4125-8344-2aaf5621553b.png"
                  alt="DADI Madhu - Web Developer"
                  className="w-80 h-80 object-cover rounded-xl shadow-glass"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-primary/20 blur-xl"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left lg:order-1 fade-in">
            <h1 className="heading-xl gradient-text mb-6">
              Hi, I'm <span className="text-primary">DADI Madhu</span>
            </h1>
            
            <h2 className="heading-lg text-muted-foreground mb-8 fade-in-delay">
              Passionate <span className="text-secondary">Web Developer</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl fade-in-delay-2">
              Skilled in modern web technologies including HTML, CSS, JavaScript, React, 
              and backend languages like C, C++, Java, Python, and SQL. Currently pursuing 
              BTech with a strong academic background and passion for creating amazing digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 fade-in-delay-3">
              <Button 
                onClick={downloadResume}
                className="bg-gradient-primary hover:glow glow-hover"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              
              <Button variant="outline" asChild className="glass-hover">
                <a href="mailto:dadi.madhu241@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start fade-in-delay-3">
              <Button variant="ghost" size="icon" asChild className="glass-hover glow-hover">
                <a 
                  href="https://github.com/Madhu1263" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="ghost" size="icon" asChild className="glass-hover glow-hover">
                <a 
                  href="https://www.instagram.com/_._.madhu._.__?igsh=dGs0aHZ5d3Y1MXd3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;