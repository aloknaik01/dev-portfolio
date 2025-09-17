import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("animated-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getMyTimeline = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://portfolio-backend-cqyk.onrender.com/timeline/getall",
        {
          withCredentials: true,
        }
      );
      setTimeline(data?.allTimeline);
      setLoading(false);
    };

    getMyTimeline();
  }, []);
  return (
    <>
      <section className="Timeline" id="animated-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 3 }}
        >
          <h1 className="text-tubeLight-effect overflow-x-hidden text-[2rem] sm:text-[1.75rem]md:text-[2.2rem] lg:text-[2.8rem] mb-6 font-extrabold">
            Timeline
          </h1>
          {!loading ? (
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {timeline &&
                timeline.map((item) => (
                  <li className="m-10" key={item?._id}>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {item?.title}
                    </h3>

                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500  ">
                      {item?.timeline?.from}-
                      {item?.timeline?.to ? item?.timeline?.to : "Present"}
                    </time>

                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 ">
                      {item?.description}
                    </p>
                  </li>
                ))}
            </ol>
          ) : (
            <div>
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-8 w-60 rounded-xl m-4" />
                    <Skeleton className="h-4 rounded-sm w-20  m-4" />
                    <Skeleton className="h-20 rounded-xl  m-4" />
                  </div>
                ))}
            </div>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default Timeline;
