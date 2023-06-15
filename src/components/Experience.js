import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Development Engineer"
            company="IDC Technologies"
            companyLink="https://idctechnologies.com/"
            time="2022-Present"
            address="Banglore, Karnataka, India"
            work="As a member of a software development team, I actively contributed to the design, development, and maintenance of software applications. My responsibilities included writing clean and efficient code, collaborating with stakeholders to understand requirements, and translating them into technical specifications. I also played a crucial role in troubleshooting issues and actively participating in code reviews. Through these efforts, I contributed to the development of reliable and innovative software solutions."
          />

          <Details
            position="Associate Software Developer"
            company="SDLC Corp"
            companyLink="https://sdlccorp.com/"
            time="2020-2022"
            address="Noida, Delhi NCR."
            work="AS an integral part of a dynamic team tasked with developing a cutting-edge app feature. My primary focus revolved around crafting an immersive user experience through the design and implementation of an intuitive user interface. In addition, I played a vital role in constructing the robust backend infrastructure required to seamlessly support this feature. Through collaborative efforts, I made significant contributions to the successful implementation and seamless integration of this exciting new functionality into the app."
          />






        </ul>
      </div>
    </div>
  );
};

export default Experience;
