import React, { useEffect, useState } from "react";

const ProjektList = () => {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Jonas-Eklof/repos")
      .then((response) => response.json())
      .then((data) => setRepoList(data))
      .catch((error) => console.error("Error fetching repos", error));
  }, []);
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
