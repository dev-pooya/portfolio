import React from "react";
import Title from "./Title";
import Progress from "./Progress";

const Skills = () => {
  return (
    <div className="skills">
      <Title title="Skills" />
      <section className="grid-container">
        <article>
          <Progress title="HTML" value="90" />
        </article>
        <article>
          <Progress title="CSS" value="80" />
        </article>
        <article>
          <Progress title="javaScript" value="75" />
        </article>
        <article>
          <Progress title="react" value="60" />
        </article>
        <article>
          <Progress title="UI-UX" value="40" />
        </article>
      </section>
    </div>
  );
};

export default Skills;
