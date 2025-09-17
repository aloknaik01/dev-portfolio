import Pic from "@/components/Picture";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMyProjects = async () => {
      setLoading(true);
      const { data } = await axios.get("http://localhost:4000/project/getall", {
        withCredentials: true,
      });
      setProjects(data?.allProjects);
      setLoading(false);
    };
    getMyProjects();
  }, []);

  return (
    <>
      <div className="relative mb-12">
        <div>
          <h1
            className=" hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold"
            style={{ background: "hsl(222.2 84%) 4.9%" }}
          >
            MY
            <span className="text-tubeLight-effect font-extrabold">
              PORTFOLIO
            </span>
          </h1>
          <h1
            className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold"
            style={{ background: "hsl(222.2 84%) 4.9%" }}
          >
            MY
            <span className="text-tubeLight-effect font-extrabold">WORK</span>
          </h1>
        </div>

        <div className="h-full w-fit">
          {!loading ? (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20">
                {viewAll
                  ? projects &&
                    projects.map((item) => (
                      <Link key={item._id} to={`/project/${item._id}`}>
                        <Pic
                          img={item.projectBanner?.url}
                          alt={projects.title}
                        />
                      </Link>
                    ))
                  : projects &&
                    projects.slice(0, 6).map((item) => (
                      <Link key={item._id} to={`/project/${item._id}`}>
                        <Pic
                          img={item.projectBanner?.url}
                          alt={projects.title}
                        />
                      </Link>
                    ))}
              </div>
              {projects && projects.length > 6 && (
                <div className="w-full text-center my-9">
                  <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
                    {viewAll ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="h-screen w-full">
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-44 w-52 md:w-44" />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
