import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Brainwave Landing Page",
    img: "/brainwave1.png",
    desc: "Brainwave023, hosted on Netlify, merges React and Tailwind CSS for an immersive experience. It offers curated insights and tools for exploring neuroscience. Dive into Brainwave023.netlify.app for the latest in brain science.",
    link: "https://brainwave023.netlify.app/",
  },
  {
    id: 2,
    title: "Nike Landing Page",
    img: "/nike2.png",
    desc: "Nike023, powered by React and styled with Tailwind CSS, offers an immersive experience on Netlify. Dive into curated content and tools exploring all things.",
    link: "https://nike023.netlify.app/",
  },
  {
    id: 3,
    title: "Putuk Truno Camping App",
    img: "/camping3.png",
    desc: "Putuk Truno Camping App, employs React and Tailwind CSS for a seamless user experience. Discover curated camping content and tools.",
    link: "https://campingapp.netlify.app/",
  },
  {
    id: 4,
    title: "React Job Finder",
    img: "/reactjobs4.png",
    desc: "ReactFind is your go-to solution for discovering exciting job opportunities in the dynamic world of React development. Developed entirely in React, our app offers a seamless user experience, powered by cutting-edge technology to connect you with the perfect job match.",
    link: "https://github.com/pesicnikola023/react-jobs",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  // Determine button text based on the title
  const buttonText =
    item.title === "React Job Finder" ? "See GitHub Page" : "See Demo";

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="_blank">
                {buttonText}
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
