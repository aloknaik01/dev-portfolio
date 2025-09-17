import Pic from "@/components/Picture";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMyApps = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "http://localhost:4000/application/getall",
          {
            withCredentials: true,
          }
        );

        setApps(data?.allApp);
        setLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };

    getMyApps();
  }, []);
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12 justify-center items-center overflow-x-hidden">
      <div className="text-tubeLight-effect  w-full flex flex-col gap-8 sm:gap-12">
        <h1 className="flex gap-4 overflow-x-hidden items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold">
          APPLICATIONS
        </h1>
        {!loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
            {apps &&
              apps.map((items) => (
                <Card
                  key={items.name}
                  className="h-fit p-7 flex flex-col justify-center items-center gap-3 overflow-hidden text-wrap"
                >
                  <Pic
                    img={items && items.svg.url}
                    alt={items.name}
                    className="h-12 sm:h-24 w-auto"
                  />
                  <p className="text-muted-foreground text-center">
                    {items.name}
                  </p>
                </Card>
              ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-screen w-full mx-auto">
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-44 w-auto"  />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApps;
