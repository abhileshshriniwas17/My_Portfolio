import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero">

      <motion.h1
        className="gradient-text"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Abhilesh Shriniwas 🚀
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ marginTop: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        <TypeAnimation
          sequence={[
            "AI/ML Developer 🤖",
            1500,
            "Full Stack Developer 💻",
            1500,
            " Data Analyst 📊",
            1500,
            "Building Real-World AI Systems 🚀",
            1500,
            "Open Source & Innovation Enthusiast 🔥",
            1500,
          ]}
          repeat={Infinity}
        />
      </motion.div>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        B.Tech CSE (AI & Analytics) | MIT-ADT University
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ marginTop: "25px" }}
      >

        <a
          href="https://github.com/abhileshshriniwas17"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">
            GitHub
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/abhilesh-shriniwas-569254347/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="btn"
            style={{ marginLeft: "15px" }}
          >
            LinkedIn
          </button>
        </a>

      </motion.div>

    </div>
  );
}

export default Hero;