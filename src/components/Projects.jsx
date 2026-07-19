import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Energy Optimization Dashboard",
    desc: "Published ML system for monitoring and optimizing energy consumption (IRJET)",
  },
  {
    title: "AI Guardian on Road",
    desc: "Helmet detection system using computer vision for road safety",
  },
  {
    title: "Nextgen-ai-interview-system",
    desc: "AI-based system for interview evaluation with resume based and emotion detection",
  },
  {
    title: "GAN Image Colorizer",
    desc: "Deep learning model to convert grayscale images into color",
  },
  {
    title: "WeatherSphere Pro",
    desc: "Real-time weather application using APIs with responsive UI",
  },
  {
    title: "Water Leakage Detection System",
    desc: "IoT + ML based system to detect and prevent water leakage in real-time",
  },
];

function Projects() {
  return (
    <div id="projects" className="container section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;