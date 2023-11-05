/* eslint-disable react/no-unescaped-entities */
import { Player } from "@lottiefiles/react-lottie-player";
import Aboutanaimtion from "../assets/animations/About.json";
import Foundercard from "../components/Foundercard";

const founderdata=[
  {
    id:1,
    name:"Ayan Bhowal",
    position:"Co-Founder",
    images:"../src/assets/ayanbhowal.jpeg"

  },
  {
    id:2,
    name:"Sanidhya Agarwal",
    position:"Co-Founder",
    images:"../src/assets/sanidhya.jpeg"

  },
  {
    id:3,
    name:"Shrishti jain",
    position:"Co-Founder",
    images:"../src/assets/srishtijain.jpeg"

  },
]
const About = () => {
  return (
    <div className="mx-6 p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="headingfont md:text-5xl lg:text-8xl text-6xl">
          About us{" "}
        </h1>
        <div className="flex flex-wrap items-center justify-between align-items-center gap-5  ">
          <p className="md:text-base mt-2 mb-3 leading-relaxed tracking-widest font-light text-sm ">
            At Valsco, we are more than just a software development agency; we
            are your dedicated partner in harnessing the power of technology to
            drive your business forward. With a passion for innovation and a
            commitment to excellence, we specialize in crafting cutting-edge
            software solutions tailored to your unique needs. Our team of highly
            skilled developers, designers, and strategists collaborates closely
            with clients to transform ideas into tangible digital experiences.
            Whether you need a custom web application, mobile app, or a complete
            digital ecosystem, we have the expertise to make it happen. What
            sets us apart is our relentless pursuit of quality and our
            unwavering dedication to your success. We understand that every
            project is a reflection of your vision, and we take that
            responsibility seriously. Our goal is to not just meet your
            expectations but to exceed them. At Valsco, we believe in the power
            of technology to transform businesses and improve lives. Let's
            embark on this journey together and create something extraordinary.
            Your success is our success, and together, we can achieve greatness
            in the digital world.
          </p>
        </div>
        <div className="flex items-center justify-around  w-screen ">
          <div className="headingfont md:text-5xl lg:text-8xl text-6xl m-auto">
            Meet the team
          </div>
          <div className="hidden md:block">
            <Player
              autoplay
              loop
              src={Aboutanaimtion}
              style={{ height: "400px", width: "500px" }}
            ></Player>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-around w-screen">
          {founderdata.map((founder)=>{
            return(
              <div key={founder.id}>
              <Foundercard name={founder.name} position={founder.position} founderimg={founder.images}/> 
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

