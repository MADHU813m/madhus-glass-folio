const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Get to know more about my journey and background
          </p>
        </div>

        <div className="glass rounded-2xl p-8 glass-hover fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="heading-md text-primary mb-4">Background</h3>
              <p className="text-muted-foreground mb-6">
                I'm a passionate web developer currently pursuing my BTech at SANKETHIKA ENGINEERING COLLEGE 
                with an impressive CGPA of 8.9. My journey in technology began during my schooling at 
                CHALAPATHI PUBLIC SCHOOL where I achieved a GPA of 9.8.
              </p>
              
              <p className="text-muted-foreground mb-6">
                I completed my Diploma in Mechanical Engineering at Sai Ganapathi Polytechnic with 74%, 
                which gave me a strong foundation in problem-solving and analytical thinking that I now 
                apply to web development.
              </p>

              <p className="text-muted-foreground">
                I'm proficient in multiple programming languages and frameworks, always eager to learn 
                new technologies and create innovative solutions.
              </p>
            </div>

            <div>
              <h3 className="heading-md text-secondary mb-4">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-foreground font-semibold">Frontend Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-foreground font-semibold">Backend Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Building robust applications with C, C++, Java, Python, and database management with SQL
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-foreground font-semibold">Problem Solving</h4>
                    <p className="text-muted-foreground text-sm">
                      Applying analytical thinking and creative solutions to complex challenges
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;