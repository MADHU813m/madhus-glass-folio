import { Mail, Github, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dadi.madhu241@gmail.com',
      href: 'mailto:dadi.madhu241@gmail.com',
      color: 'primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Madhu1263',
      href: 'https://github.com/Madhu1263',
      color: 'secondary'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@_._.madhu._.__',
      href: 'https://www.instagram.com/_._.madhu._.__?igsh=dGs0aHZ5d3Y1MXd3',
      color: 'accent'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Ready to work together? Let's connect and create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="fade-in">
              <h3 className="heading-md text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or just having a conversation about web development and technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="glass glass-hover p-4 fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <div className={`w-12 h-12 bg-${contact.color}/20 rounded-xl flex items-center justify-center group-hover:bg-${contact.color}/30 transition-colors`}>
                      <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-foreground font-semibold">{contact.label}</h4>
                      <p className="text-muted-foreground text-sm">{contact.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form / CTA */}
          <div className="fade-in-delay-2">
            <Card className="glass p-8">
              <h3 className="heading-md text-foreground mb-6">Ready to Start a Project?</h3>
              
              <p className="text-muted-foreground mb-8">
                Whether you need a new website, want to improve an existing one, or have a unique project in mind, 
                I'd love to hear from you. Let's discuss how we can bring your ideas to life.
              </p>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-primary hover:glow glow-hover"
                  asChild
                >
                  <a href="mailto:dadi.madhu241@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send me an Email
                  </a>
                </Button>

                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1 glass-hover" asChild>
                    <a href="https://github.com/Madhu1263" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="flex-1 glass-hover" asChild>
                    <a href="https://www.instagram.com/_._.madhu._.__?igsh=dGs0aHZ5d3Y1MXd3" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-glass-border">
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Available for Remote Work</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;