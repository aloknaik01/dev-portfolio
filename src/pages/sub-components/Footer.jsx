import React from "react";

const Footer = () => {
 

  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-5 mt-6 w-full max-w-[1050px] mx-auto">
      <hr />
      <h1 className="text-3xl mb-16 flex mt-5 justify-center sm:justify-start tracking-[8px] text-tubeLight-effect ">
        Thanks For Scrolling
      </h1>

      <div className="p-4 text-center">
        <p
          variant="small"
          className="mb-0 text-center font-normal text-blue-gray-900 md:mb-0"
        >
          &copy; {currentYear} . All Rights Reserved.
        </p>
        <p className="text-neutral-800 dark:text-neutral-400">Alok Kumar</p>
      </div>

    </footer>
  );
};

export default Footer;
