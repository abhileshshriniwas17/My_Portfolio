import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      className="container section"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <h2>About Me</h2>
      <p>
          I am Abhilesh Shriniwas, a B.Tech Computer Engineering (AI & Analytics) student at MIT-ADT University, Pune, with a CGPA of 7.97. 
          I previously completed a Diploma in Computer Engineering with 83.13%, building a strong technical foundation early in my journey.

          I have hands-on experience through internships where I worked on Machine Learning models, real-time systems, and full-stack development using MERN and Django. 
          I am particularly interested in Artificial Intelligence, Web Development, and Data Analytics, and I enjoy building intelligent applications that solve real-world problems.

          Along with AI/ML, I also explore data-driven decision making using tools like Power BI and Tableau, focusing on visualization and insights generation.

          I have developed multiple projects including an AI-based Energy Optimization Dashboard (published in IRJET), Helmet Detection System, and AI Interview Simulator.

          <b>I am currently open to internships and entry-level opportunities in AI/ML, Web Development, and Data Analytics.</b>
      </p>
    </motion.div>
  );
}

export default About;