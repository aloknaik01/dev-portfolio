import React from "react";

const NoInternet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl text-center">
        <div className="text-5xl sm:text-6xl md:text-7xl mb-5">📶❌</div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">
          You're Offline
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 px-2 sm:px-4">
          It seems you've lost internet connection. Don't worry—we’ll reconnect
          you automatically once you're back online.
        </p>

        <div className="flex justify-center">
          <span className="inline-flex h-4 w-4 rounded-full bg-red-500"></span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-4">
          Monitoring connection status...
        </p>
      </div>
    </div>
  );
};

export default NoInternet;
