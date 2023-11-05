/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import womenweb from "../assets/womenweb.svg";
import { motion } from "framer-motion";
import Featurescard from "../components/Featurescard"
import { Link } from "react-router-dom";

const Home = () => {
  const cardVariants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };
  return (
    <div className=" px-8 bg-black">
      <div className="max-w-screen-xl h-[70vh] grid grid-flow-col  md:flex-none items-center  ">
        <div className="">
          <div className="headingfont md:text-5xl lg:text-8xl  text-6xl ">
            Elevate Your Digital Presence with{" "}
            <span className="animate-charcter headingfont">Valsco</span>
            <p className="text-left text-wrap md:text-lg text-sm  ">
              Our company provides software products and services to businesses
              and individuals to help them meet their software needs. We strive
              to specialize in developing software solutions tailored to the
              unique needs of our clients.
            </p>
          </div>
          <Link to="/Contact">
          <button
            type="button"
            className="text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-700 my-3"
          >
            Consult Now
          </button></Link>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="hidden md:block"
        >
          <motion.div className="card" variants={cardVariants}>
            <img
              src={womenweb}
              alt="Womenintech"
              className="md:h-[400px] md:w-[600px] h-[200px] w-[400px]"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="grid items-center align-middle">
        <h1 className="headingfont md:text-5xl lg:text-8xl text-6xl">What do we do?</h1>
        <p className="md:text-base mt-2 mb-7 leading-relaxed tracking-widest font-light text-sm  ">
          At Valsco, we are passionate about technology and dedicated to helping
          businesses thrive in the digital age. With a team of highly skilled
          developers, designers, and innovators, we bring your ideas to life
          through custom software solutions.Our journey began with a simple
          mission: to deliver cutting-edge software that not only meets but
          exceeds our clients' expectations. Over the years, we've honed our
          expertise and built a reputation for delivering excellence in every
          project. What we have to offer?
        </p>
        <div className="flex flex-wrap gap-1 items-start justify-between md:mt-11">
          <Featurescard
            title={"Expertise"}
            description={
              "Our team consists of experts in various technologies, ensuring you get the best solutions for your unique needs."
            }
          />
          <Featurescard
            title={"Innovation"}
            description={
              "We love challenges and are constantly pushing boundaries to create innovative and tailored software"
            }
          />
          <Featurescard
            title={"Client-Centric"}
            description={
              "Your success is our success. We collaborate closely with you to understand your goals and deliver solutions that drive results."
            }
          />
          <Featurescard
            title={"Quality"}
            description={
              "We are committed to delivering top-quality, bug-free software that stands the test of time."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


