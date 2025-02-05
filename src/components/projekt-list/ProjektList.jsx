import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../store/store";

const ProjektList = () => {
  const dispatch = useDispatch();
  const repoList = useSelector((state) => state.projects.projects);

  useEffect(() => {
    fetch("https://api.github.com/users/Jonas-Eklof/repos")
      .then((response) => response.json())
      .then((data) => dispatch(setProjects(data)))
      .catch((error) => console.error("Error fetching repos", error));
  }, [dispatch]);
  return (
    <div className="projekt-content">
      <ul className="projekt-list">
        {repoList
          .slice()
          .reverse()
          .map((repo) => (
            <li className="projekt-item" key={repo.id}>
              <a href={repo.html_url} alt={repo.name} target="_blank">
                <h2>{repo.name}</h2>
              </a>
              <p>{repo.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProjektList;
