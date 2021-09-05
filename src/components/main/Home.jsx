import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const Home = () => {
  return (
    <div className="home">
      <h1>
        Hi I'm <span>Lorem Ipsum</span>
      </h1>
      <h3>Designer And Developer</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
        quos nihil, quae eos minus rem enim delectus animi, sit excepturi quia
        architecto dolorum minima consequuntur? Amet obcaecati natus rerum alias
        repellat soluta, temporibus inventore rem. Neque obcaecati beatae
        nostrum quaerat ea nesciunt commodi culpa error ullam ipsum amet itaque
        magni vel dicta quia, quasi excepturi corrupti . consectetur sed neque
        soluta reprehenderit nulla, doloribus quo odio, aspernatur, sint porro!
      </p>
      <ul>
        <li>
          <FacebookIcon fontSize="large" />
        </li>
        <li>
          <InstagramIcon fontSize="large" />
        </li>
        <li>
          <GitHubIcon fontSize="large" />
        </li>
      </ul>
    </div>
  );
};

export default Home;
