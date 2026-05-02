import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      id="contact"
      className="container section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2>Contact</h2>

      <p>Email: abhileshshriniwas9@gmail.com</p>
      <p>Phone: +91 7249610635</p>
      <p>Pune, Maharashtra</p>
    </motion.div>
  );
}

export default Contact;