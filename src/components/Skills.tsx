import { Code, Database, Globe, Server, Cpu, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'HTML5', level: 90, icon: Globe },
        { name: 'CSS3', level: 85, icon: Layout },
        { name: 'JavaScript', level: 88, icon: Code },
        { name: 'React', level: 82, icon: Code },
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      skills: [
        { name: 'C', level: 85, icon: Cpu },
        { name: 'C++', level: 80, icon: Cpu },
        { name: 'Java', level: 78, icon: Code },
        { name: 'Python', level: 75, icon: Code },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'SQL', level: 80, icon: Database },
        { name: 'Database Design', level: 75, icon: Server },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and programming languages I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="glass rounded-2xl p-6 skill-card h-full">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="heading-md text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="fade-in-delay" style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <skill.icon className="w-4 h-4 text-muted-foreground mr-2" />
                          <span className="text-foreground font-medium">{skill.name}</span>
                        </div>
                        <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="heading-md text-center text-foreground mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'GitHub', 'VS Code', 'Responsive Design', 'Web APIs', 'Problem Solving'].map((tech, index) => (
              <div 
                key={tech}
                className="glass rounded-full px-6 py-3 glass-hover fade-in-delay-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-foreground font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;