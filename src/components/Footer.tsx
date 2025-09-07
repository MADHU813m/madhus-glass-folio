import { Heart, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-glass-border/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Name and Title */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">DADI Madhu</h3>
            <p className="text-muted-foreground">Web Developer & Technology Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:dadi.madhu241@gmail.com"
              className="w-10 h-10 glass rounded-full flex items-center justify-center glass-hover glow-hover"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            
            <a 
              href="https://github.com/Madhu1263"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center glass-hover glow-hover"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-secondary" />
            </a>
            
            <a 
              href="https://www.instagram.com/_._.madhu._.__?igsh=dGs0aHZ5d3Y1MXd3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center glass-hover glow-hover"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm">
            <span>&copy; {currentYear} DADI Madhu.</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>using React & TypeScript</span>
          </div>

          {/* Additional Footer Text */}
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Passionate about creating amazing web experiences</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;