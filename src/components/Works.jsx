import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "./Tilt"; // Import the custom Tilt component

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview,
  isMobile,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt>
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-end m-3 space-y-1 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div className="relative group">
  <div
    onClick={() => window.open(live_preview, "_blank")}
    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  >
    <img
      src={web}
      alt="live preview"
      className="w-1/2 h-1/2 object-contain"
    />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.3 }}
    className="absolute top-0 right-12 bg-black text-white text-xs px-2 py-1 rounded shadow-md pointer-events-none hidden group-hover:block"
  
  >
    Live Preview
  </motion.div>
</div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
        
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size for mobile devices
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center items-center h-screen">
          <h2 className="text-white text-[20px] font-bold text-center">
            This section is best viewed on a larger screen. Please switch to a
            desktop or tablet for the full experience.
          </h2>
        </div>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos. They reflect my
              ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </motion.p>
          </div>

          <div className="mt-20 flex flex-wrap gap-7">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                isMobile={isMobile}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
