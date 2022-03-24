import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from "../Components/Details";
import Loading from "../Components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState("Light Mode");
  const [isLoading, setIsLoading] = useState(false);
  const [ModeIcon, setModeIcon] = useState(faMoon);

  useEffect(() => {
    getCountries();
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

  const cardsLoading = () => {
    return (
      <div className="container h-full sm:w-screen w-5/6 text-center grid md:grid-cols-4 sm:grid-cols-2 gap-16 mx-auto">
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  };

  const getCountries = async (dontLoad) => {
    !dontLoad && setIsLoading(true);
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    setCountries(data);
    setIsLoading(false);
  };

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

  const searchCountry = async (name) => {
    if (name.length === 0) {
      getCountries(1);
      return;
    }
    const res = await fetch(`https://restcountries.com/v2/name/${name}`);
    const data = await res.json();
    setCountries(data);
  };

  const filterByRegion = async (region) => {
    if (region === "") return;
    if (region === "all") {
      getCountries(1);
    }
    const res = await fetch(`https://restcountries.com/v2/region/${region}`);
    const data = await res.json();
    setCountries(data);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white oveflow-hidden">
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
      <div className="flex container mx-auto sm:mb-16 mb-4 sm:flex-row flex-col text-center">
        <div>
          <FontAwesomeIcon className="position: absolute m-3" icon={faSearch} />
          <input
            type="text"
            placeholder="Search Country"
            className="pl-10 p-2 w-5/6 shadow-md rounded-md dark:bg-gray-700"
            onChange={(term) => searchCountry(term.target.value)}
          />
        </div>
        <select
          className="sm:ml-auto sm:mx-0 sm:w-auto mx-auto w-5/6 my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700 dark"
          onChange={(val) => filterByRegion(val.target.value)}
        >
          <option value="all">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="container grid md:grid-cols-4 sm:grid-cols-2 gap-16 mx-auto">
        {isLoading && cardsLoading()}
        {countries.length > 0 &&
          countries.map((country, index) => (
            <Link to={{ pathname: "Countries/details", state: country }} key={index}>
              <Details
                title={country.name}
                img_url={
                  country.name !== "Andorra"
                    ? country.flag
                    : "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"
                }
                population={country.population.toLocaleString()}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
