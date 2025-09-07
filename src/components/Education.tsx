import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: 'Bachelor of Technology',
      institution: 'SANKETHIKA ENGINEERING COLLEGE',
      duration: 'Current',
      grade: 'CGPA: 8.9',
      status: 'In Progress',
      description: 'Currently pursuing BTech with excellent academic performance and hands-on project experience.',
      color: 'primary'
    },
    {
      level: 'Diploma in Mechanical Engineering',
      institution: 'Sai Ganapathi Polytechnic',
      duration: 'Completed',
      grade: '74%',
      status: 'Completed',
      description: 'Gained strong foundation in engineering principles and problem-solving methodologies.',
      color: 'secondary'
    },
    {
      level: 'Secondary Education',
      institution: 'CHALAPATHI PUBLIC SCHOOL',
      duration: 'Completed',
      grade: 'GPA: 9.8',
      status: 'Completed',
      description: 'Achieved outstanding academic performance with focus on mathematics and science.',
      color: 'accent'
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-${edu.color} ring-4 ring-${edu.color}/20`}></div>
                
                {/* Education Card */}
                <div className="ml-16 glass rounded-2xl p-6 glass-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-start space-x-3 mb-4 md:mb-0">
                      <GraduationCap className={`w-6 h-6 text-${edu.color} flex-shrink-0 mt-1`} />
                      <div>
                        <h3 className="heading-md text-foreground mb-1">{edu.level}</h3>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end text-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className={`w-4 h-4 text-${edu.color}`} />
                        <span className={`text-${edu.color} font-semibold`}>{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${edu.status === 'In Progress' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary/20 text-secondary'
                      }
                    `}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 text-center glass-hover fade-in-delay">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Current CGPA</h4>
            <p className="text-2xl font-bold text-primary">8.9</p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center glass-hover fade-in-delay-2">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">School GPA</h4>
            <p className="text-2xl font-bold text-secondary">9.8</p>
          </div>
          
          <div className="glass rounded-xl p-6 text-center glass-hover fade-in-delay-3">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-foreground font-semibold mb-2">Diploma</h4>
            <p className="text-2xl font-bold text-accent">74%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;