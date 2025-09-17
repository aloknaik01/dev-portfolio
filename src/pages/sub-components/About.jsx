import Pic from "@/components/Picture";
import { Skeleton } from "@/components/ui/skeleton";
import { SplineScene } from "@/components/ui/splite";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMyProfile = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://portfolio-backend-cqyk.onrender.com/user/me/portfolio"
      );

      setUser(data?.user);
      setLoading(false);
    };
    getMyProfile();
  }, []);

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <div className=" flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div>
            <h1
              className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold"
              style={{ background: "hsl(222.2 84%) 4.9%" }}
            >
              ABOUT
              <span className="text-tubeLight-effect font-extrabold">ME</span>
            </h1>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 my-8 sm:my-20 gap-14">
            <div className="flex justify-center items-start">
              <TooltipProvider className="absolute">
                <Tooltip>
                  <TooltipTrigger>
                    {!loading ? (
                      // <Pic
                      //   img={user && user?.avatar?.url}
                      //   className="p-5 sm:p-6 h-[460px] sm:h-[420px] md:h-[440px] lg:h-[500px] rounded-full"
                      // />
                      <img src="/Boy.png"/>
                      // <div className="w-[1000px] h-[500px]">
                      //   <SplineScene
                      //     scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      //     className="w-full h-full"
                      //   />
                      // </div>
                    ) : (
                      <Skeleton className="h-96 w-96 rounded-full" />
                    )}
                  </TooltipTrigger>
                  <TooltipContent className="relative top-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 rounded-full h-2 w-2 text-center"></span>
                      <p>Online</p>
                    </div>
                    <div />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex justify-center flex-col tracking-[1.2px] leading-7 text-base gap-12 font-normal text-gray-500 dark:text-gray-400">
              <p>
                Hi, I’m Alok and i'm 20 years old a web developer who loves
                creating websites, When I’m not coding, you’ll often find me
                playing video games or experimenting in the kitchen
              </p>
              <p>
                I’m always excited to take on new challenges and work with
                people who are just as passionate about building cool things as
                I am. Let’s create something awesome together!
              </p>
            </div>
          </div>
          <p className="tracking-[1px] text-base font-normal text-gray-500 dark:text-gray-400">
            I’m a Full-stack web developer fueled by innovation and committed to
            pushing boundaries, delivering impactful projects before deadlines
            strike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
