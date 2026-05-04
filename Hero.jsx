import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero">

      <motion.h1
        className="gradient-text"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Abhilesh Shriniwas 🚀
      </motion.h1>

      <TypeAnimation
        sequence={[
          "AI/ML Developer",
          1500,
          "Full Stack Developer",
          1500,
          "Building Real-World AI Systems",
          1500,
        ]}
        repeat={Infinity}
      />

      <p className="subtitle">
        B.Tech CSE (AI & Analytics) | MIT-ADT University
      </p>

      <a href="https://github.com/abhileshshriniwas17" target="_blank">
        <button className="btn">GitHub</button>
      </a>

      <a href="https://www.linkedin.com/in/abhilesh-shriniwas-569254347/" target="_blank">
        <button className="btn" style={{ marginLeft: "10px" }}>LinkedIn</button>
      </a>
    </div>
  );
}

export default Hero;