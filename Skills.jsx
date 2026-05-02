import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      id="skills"
      className="container section"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <h2>Skills</h2>

      <p><b>Programming:</b> Java, Python, JavaScript</p>
      <p><b>Frontend:</b> React, HTML, CSS</p>
      <p><b>Backend:</b> Node.js, REST APIs</p>
      <p><b>Database:</b> MongoDB, MySQL, Firebase</p>
      <p><b>AI/ML:</b> NumPy, Pandas, Scikit-learn</p>
    </motion.div>
  );
}

export default Skills;