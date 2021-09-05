import Title from "./Title";
import Card from "./Card";
import { useState, useEffect } from "react";

const Portfolio = () => {
  // basic portfolios
  const [portfolios, setPortfolios] = useState([
    {
      img: "react1",
      detail: "react is very popular javaScript library",
      tags: ["recent", "react", "featured", "all"],
    },
    {
      img: "react2",
      detail: "react is very popular javaScript library",
      tags: ["react", "featured", "all"],
    },
    {
      img: "ui1",
      detail: "ui is my so nice  favorite hobby",
      tags: ["ui", "featured", "all"],
    },
    {
      img: "ui2",
      detail: "ui is my number one  favorite hobby",
      tags: ["recent", "ui", "all"],
    },
    {
      img: "ui3",
      detail: "ui is not my favorite hobby and i like that ",
      tags: ["ui", "all"],
    },
    {
      img: "ui4",
      detail: "ui is one of  my favorite hobby",
      tags: ["featured", "ui", "all"],
    },
    { img: "ui5", detail: "ui is my favorite hobby", tags: ["ui", "all"] },
  ]);

  // arranged portfolios
  const [portfoliosFiltered, setPortfoliosFiltered] = useState([]);

  //state tab
  const [tab, setTab] = useState("all");

  useEffect(() => {
    switch (tab) {
      case "all":
        setPortfoliosFiltered(
          portfolios.filter((item) => item.tags.includes("all"))
        );
        break;
      case "featured":
        setPortfoliosFiltered(
          portfolios.filter((item) => item.tags.includes("featured"))
        );
        break;
      case "recent":
        setPortfoliosFiltered(
          portfolios.filter((item) => item.tags.includes("recent"))
        );
        break;
      case "react":
        setPortfoliosFiltered(
          portfolios.filter((item) => item.tags.includes("react"))
        );
        break;
      case "ui":
        setPortfoliosFiltered(
          portfolios.filter((item) => item.tags.includes("ui"))
        );
        break;
    }
  }, [tab]);

  return (
    <div>
      <Title title="portfolio" />
      <section className="portfolio">
        <ul className="tabs">
          <li
            className={`${tab === "all" && "active"}`}
            onClick={(e) => setTab("all")}
          >
            All
          </li>
          <li
            className={`${tab === "featured" && "active"}`}
            onClick={(e) => setTab("featured")}
          >
            Featured
          </li>
          <li
            className={`${tab === "recent" && "active"}`}
            onClick={(e) => setTab("recent")}
          >
            Recent
          </li>
          <li
            className={`${tab === "react" && "active"}`}
            onClick={(e) => setTab("react")}
          >
            React
          </li>
          <li
            className={`${tab === "ui" && "active"}`}
            onClick={(e) => setTab("ui")}
          >
            UI
          </li>
        </ul>
        <article className="cards">
          {portfoliosFiltered.map((card) => (
            <Card info={card} key={parseInt(Math.random() * 1000)} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default Portfolio;
