import { useEffect, useState } from "react";
import "./HeroText.css"; // Lägg CSS i en separat fil

const HeroText = () => {
  const text =
    "Hej! Jag heter Jonas och är en frontendutvecklare med en passion för snygg, responsiv och användarvänlig design. Med erfarenhet inom React, JavaScript och moderna webbutvecklingsverktyg bygger jag interaktiva och engagerande webbapplikationer. Kika på mina projekt och tveka inte att kontakta mig!";

  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Dela upp texten i rader, "." används för att bryta mellan meningarna.
    setLines(
      text.split(". ").map(
        (line, index) =>
          // Sätter tillbaka punkt i slutet av alla meningar utom den sista.
          line + (index < text.split(". ").length - 1 ? "." : "")
      )
    );
  }, []);

  return (
    <p className="hero-text">
      {lines.map((line, index) => (
        // Ger varje mening en unik animeringsfördröjning för att skapa effekten att meningarna kommer in en och en och inte alla samtidigt.
        <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
          {line}
        </span>
      ))}
    </p>
  );
};
export default HeroText;
