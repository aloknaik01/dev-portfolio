import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectBanner, setProjectBanner] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [stack, setStack] = useState("");
  const [deployed, setDeployed] = useState("");
  const [technologies, setTechnologies] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      axios
        .get(`https://dev-alok.up.railway.app/project/getone/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTitle(res.data.project.title);
          setDescription(res.data.project.description);
          setProjectBanner(res.data.project.projectBanner);
          setGitLink(res.data.project.gitLink);
          setDeployed(res.data.project.deployed);
          setProjectLink(res.data.project.projectLink);
          setTechnologies(res.data.project.technologies);
          setStack(res.data.project.stack);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
    getProject();
  }, [id]);

  const descriptionInList = description.split(". ");
  const technologiesInList = technologies.split(", ");

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4 sm:pl-14">
        <div className="w-[100%] px-5 md:w-[650px]">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 flex flex-col gap-5 container mx-4 md:mx-auto">
                <div className="w-full sm:col-span-4">
                  <h1 className="text-2xl font-bold mb-4">{title}</h1>
                  <img
                    src={projectBanner ? projectBanner.url : " "}
                    alt={title}
                    className="w-80 h-auto"
                  />
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Description</p>
                  <ul className="list-disc">
                    {descriptionInList.map((items, index) => (
                      <li key={index}>{items}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Technologies</p>
                  <ul className="list-disc">
                    {technologiesInList.map((items, index) => (
                      <li key={index}>{items}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Stack :</p>
                  <p>{stack}</p>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Deployed :</p>
                  <p>{deployed}</p>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Gitbhub Repo Link :</p>
                  <Link to={gitLink} target="_blank" className="text-sky-700">
                    {gitLink}
                  </Link>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Project Link :</p>
                  <Link
                    to={projectLink ? projectLink : "/"}
                    target="_blank"
                    className="text-sky-700"
                  >
                    {projectLink ? projectLink : "Still Not Deployed"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
