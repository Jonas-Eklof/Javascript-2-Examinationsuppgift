import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../store/store";

const ProjektList = () => {
  const dispatch = useDispatch();
  const repoList = useSelector((state) => state.projects.projects);

  useEffect(() => {
    // Hämtar data från Githubs API och skickar datan med Redux dispatch()
    fetch("https://api.github.com/users/Jonas-Eklof/repos")
      .then((response) => response.json())
      .then((data) => dispatch(setProjects(data)))
      .catch((error) => console.error("Error fetching repos", error));
  }, [dispatch]);

  return (
    <section className="projekt-content" aria-labelledby="projekt-title">
      <ul className="projekt-list">
        {repoList
          .slice()
          .reverse()
          .map((repo) => (
            <li className="projekt-item" key={repo.id}>
              <article>
                <h2>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Öppna ${repo.name} på GitHub`}
                  >
                    {repo.name}
                  </a>
                </h2>
                {/* Om "repo.description" inte finns tillgänglig så visas istället strängen "Ingen beskrivning tillgänglig" */}
                <p>{repo.description || "Ingen beskrivning tillgänglig."}</p>
              </article>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ProjektList;
