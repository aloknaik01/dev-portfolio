import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Hero = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Alok_CV.pdf";
    link.download = "Alok_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setLoading(true);

    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://dev-alok.up.railway.app/user/me/portfolio"
        );

        setUser(data?.user);
        setLoading(false);
      } catch (error) {
        toast.error(error.respose.data.message);
        setLoading(false);
      }
    };

    getMyProfile();
  }, []);

  return (
    <>
      <div className="w-full relative ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="bg-green-400 rounded-full h-2 w-2"></span>
          <p>ONLINE</p>
        </motion.div>

        <motion.div
          initial={{ x: -90 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container">
            <span className="overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem]  tracking-[2px] mb-4 mr-4">
              Hey, I'm
            </span>
            <span
              className="glitch text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] "
              data-text="ALOK"
            >
              ALOK
            </span>
            <span className="glow ">ALOK</span>
          </div>

          <div className="container flex justify-start items-start w-full h-20 ">
            <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem]  tracking-[15px]  align-text-top">
              <Typewriter
                words={[
                  "FULLSTACK DEVELOPER",
                  "MERN DEVELOPER",
                  "REACT DEVELOPER",
                ]}
                loop={50}
                cursor
                typeSpeed={70}
                deLeteSpeed={70}
                deLaySpeed={100}
              />
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4 md:mt-8 lg:mt-10 overflow-hidden">
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/alok-kumar-naik-a18b4b365/"}
            >
              <Linkedin className="text-[#0A66C2] w-7 h-7" />
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/alok-kumar-naik-a18b4b365/"}
            >
              <Instagram className="text-[#E4405F] w-7 h-7" />
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/alok-kumar-naik-a18b4b365/"}
            >
              <Twitter className="text-[#1DA1F2] w-7 h-7" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 md:mt-8 lg:md-10 flex gap-3"
        >
          <Link to={user && user?.githubURL} target="_blank">
            <Button className="rounded-[30px] flex items-center gap-2 felx-row">
              <span>
                <Github />
              </span>
              <span>Github</span>
            </Button>
          </Link>
          <Link target="_blank">
            <Button
              className="rounded-[30px] flex items-center gap-2 flex-row"
              onClick={handleDownload}
            >
              <span>
                <ExternalLink />
              </span>
              <span>Resume</span>
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {!loading ? (
            <p className="mt-8 text-base font-normal text-gray-500 dark:text-gray-400 ">
              {user && user?.aboutMe}
            </p>
          ) : (
            <Skeleton className=" mt-8 w-full h-14" />
          )}
        </motion.div>

        <hr className="mt-6 md:mt-10" />
      </div>
    </>
  );
};

export default Hero;
