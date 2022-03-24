import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const MoreDetails = () => {
  const [mode, setMode] = useState(true);
  const [ModeIcon, setModeIcon] = useState(faMoon);
  const { state } = useLocation();
  const history = useHistory();
  
  const gohomeBtn = () => {
    history.push("/Countries");
  };

  useEffect(() => {
    if (localStorage.getItem("mode") === "Light Mode") {
      setMode("Light Mode");
      document.documentElement.classList.remove("dark");
      setModeIcon(faMoon);
    }
    if (localStorage.getItem("mode") === "Dark Mode") {
      setMode("Dark Mode");
      document.documentElement.classList.add("dark");
      setModeIcon(faSun);
    }
  }, []);

  const toggleDarkMode = () => {
    if (mode === "Light Mode") {
      document.documentElement.classList.add("dark");
      setMode("Dark Mode");
      setModeIcon(faSun);
      localStorage.setItem("mode", "Dark Mode");
    }
    if (mode === "Dark Mode") {
      document.documentElement.classList.remove("dark");
      setModeIcon(faMoon);
      setMode("Light Mode");
      localStorage.setItem("mode", "Light Mode");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="w-full shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white sm:mb-16 mb-4">
        <div className="flex sm:flex-row flex-col sm:mx-auto container">
          <h1 className="font-bold text-xl sm:mx-0 mx-auto">
            Where in the world
          </h1>
          <div className="sm:ml-auto sm:mx-0 mx-auto font-medium">
            <button
              onClick={() => toggleDarkMode()}
              className="sm:mt-0 mt-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={ModeIcon} /> {localStorage.getItem("mode")}{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:mb-16 mb-4 text-center">
        <FontAwesomeIcon className="position: absolute m-3" icon={faArrowLeftLong} />
        <button
          className="px-8 py-2 sm:w-1/4 w-5/6 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
          onClick={() => gohomeBtn()}
        >
          Back
        </button>
      </div>
      <div className="container flex justify-evenly sm:flex-row flex-col items-center mx-auto pb-8">
        <img src={state.flag} className="sm:w-1/2 w-5/6" alt={state.name} />
        <div className="p-8">
          <h2 className="font-bold text-2xl mb-8 text-center"> {state.name}</h2>
          <div className="grid sm:grid-cols-2 sm:gap-x-20 grid-cols-1 gap-x-10 gap-y-4">
            <p>
              Native Name :
              <span className="dark:text-gray-400 text-gray-700 text-sm ">
                {" "}
                {state.nativeName}
              </span>
            </p>
            <p>
              Population :
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {state.population.toLocaleString()}
              </span>
            </p>
            <p>
              Region :
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {state.region}
              </span>
            </p>
            <p>
              Sub Region :
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {state.subregion}
              </span>
            </p>
            <p>
              Capital :
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {state.capital}
              </span>
            </p>
            <p>
              Top Level Domain :
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {state.topLevelDomain[0]}
              </span>
            </p>
            <p>
              Currencies:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {state.currencies.map((cur) => cur.name)}
              </span>
            </p>
            <p>
              Languages:{" "}
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {state.languages.map((lang) => lang.name + ", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
