import HeroText from "../components/hero-section/HeroText";
import profilepicture from "../assets/images/profile-picture.jpg";
import movieWebsite from "../assets/images/movie-website.png";
import todo from "../assets/images/todo.png";
import photoGallery from "../assets/images/photo-gallery.png";
import "./OmMig.css";
import LatestProjects from "../components/latest projects/LatestProjects";

const OmMig = () => {
  return (
    <main>
      <section className="hero">
        <HeroText />
        <figure className="profile">
          <img
            src={profilepicture}
            className="profile-img"
            alt="Profilbild - självporträtt"
          />
        </figure>
      </section>

      <section className="latest-wrapper">
        <h2>Mina senaste projekt</h2>
        <div className="latest-projects">
          <article>
            <LatestProjects
              projectTitle="Movie Website"
              projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/movie-website"
              imgUrl={movieWebsite}
            />
          </article>
          <article>
            <LatestProjects
              projectTitle="Todo App"
              projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/todo-app"
              imgUrl={todo}
            />
          </article>
          <article>
            <LatestProjects
              projectTitle="Gallery App"
              projectUrl="https://github.com/Jonas-Eklof/KYH/tree/main/javascript-2/gallery-app"
              imgUrl={photoGallery}
            />
          </article>
        </div>
      </section>
    </main>
  );
};

export default OmMig;
