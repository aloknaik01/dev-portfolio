import Pic from "@/components/Picture";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMySkills = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://dev-alok.up.railway.app/skill/getall",
        {
          withCredentials: true,
        }
      );
      setSkills(data?.allSkill);
      setLoading(false);
    };

    getMySkills();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col gap-8 sm:gap-12">
        <h1
          data-text="Skills"
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold"
        >
          Skills
        </h1>
        {!loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
            {skills &&
              skills.map((items) => (
                <Card
                  key={items.title}
                  className="p-7 flex flex-col justify-center items-center gap-3 hover:scale-90 duration-200 "
                >
                  <Pic
                    img={items && items.svg.url}
                    alt={items.title}
                    className="h-12 sm:h-24 w-auto "
                  />

                  <p className="text-muted-foreground text-center text-tubeLight-effect">
                    {items.title}
                  </p>
                </Card>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-screen w-full">
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-44 w-auto" />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
