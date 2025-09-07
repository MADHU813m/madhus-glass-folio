import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  // Placeholder certifications - user can update these
  const certifications = [
    {
      title: 'Web Development Fundamentals',
      issuer: 'Add Your Certification Provider',
      date: 'Add Date',
      description: 'Add description of what this certification covers and the skills learned.',
      link: '#', // User can add actual certification link
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'React Development',
      issuer: 'Add Your Certification Provider',
      date: 'Add Date',
      description: 'Add description of React certification and advanced concepts covered.',
      link: '#',
      skills: ['React', 'JSX', 'State Management']
    },
    {
      title: 'Programming Fundamentals',
      issuer: 'Add Your Certification Provider',
      date: 'Add Date',
      description: 'Add description of programming fundamentals and languages covered.',
      link: '#',
      skills: ['C++', 'Java', 'Python']
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and achievements
          </p>
        </div>

        {/* Placeholder Message */}
        <div className="glass rounded-2xl p-8 mb-12 text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="heading-md text-foreground mb-4">Update Your Certifications</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This section is ready for your certifications. Update the certifications array in the 
            Certifications component with your actual certificates, courses, and achievements. 
            Include the certification name, issuing organization, date, description, and any relevant links.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 glass-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-primary font-medium mb-3">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full glass-hover"
                asChild
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-delay-2">
          <h3 className="heading-md text-foreground mb-4">Ready to Add More</h3>
          <p className="text-muted-foreground mb-6">
            Continuously learning and earning certifications to stay updated with the latest technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="glass rounded-full px-6 py-3">
              <span className="text-foreground font-medium">Always Learning</span>
            </div>
            <div className="glass rounded-full px-6 py-3">
              <span className="text-foreground font-medium">Skill Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;