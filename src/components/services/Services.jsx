import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = ({ scrollToPortfolio }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Pixels in Progress:
          <br /> A Junior Frontend Developer's Portfolio Journey
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Cycle</motion.b>Through
          </h1>
        </div>
        <div className="title">
          <h1>
            Your&nbsp;
            <motion.b whileHover={{ color: "orange" }}>
              Digital Horizon.
            </motion.b>{" "}
          </h1>
          <button onClick={scrollToPortfolio}>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>A Junior Frontend Developer's Journey</h2>
          <p>
            Creating polished websites as a junior frontend developer, I fuse
            imagination with coding to craft immersive digital experiences that
            leave a lasting impact on users.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Exploring the Creative Frontier of Web Design</h2>
          <p>
            Delving into the realm of web design, I merge artistic flair with
            technical expertise to construct visually stunning and intuitive
            websites that captivate and inspire online audiences
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Empowering Inclusive Web Experiences</h2>
          <p>
            Dedicated to enhancing web accessibility, I prioritize inclusive
            design principles to ensure seamless and enjoyable experiences for
            users of all abilities, fostering a more inclusive online community.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
