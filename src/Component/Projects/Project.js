import { Button } from "@mui/material";
import React from "react";
import "../../Assets/Css/Project.css";
import Image from "../../Assets/Image/profile-pic.jpg";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-head">
        <h1>MY PROJECTS</h1>
        <h4>Learnt with Passion</h4>
      </div>
      <p className="empty-border"></p>
      <div className="project-content">
        {/* <h2>BUNZO</h2> */}
        <div className="project-cards">
          <div className="project-card">
            <img
              className="project-pic"
              src="https://user-images.githubusercontent.com/107837537/201061310-f40c6e3c-9626-4618-adcf-ca94874b8263.png"
            />
            <h2>Bunzo</h2>
            <p>
              {" "}
              Bunzo - Grocery Order Management Application- It comes with a
login page, where user can select a store and items based on their
requirement.
            </p>
            <div>
              {" "}
              <Button
                sx={{ width: [400], marginTop: "20px", bgcolor: "black" }}
                variant="contained"
                onClick={() =>
                  window.open("https://tiny-valkyrie-08d139.netlify.app")
                }
              >
                LIVE
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/Bunzo_frontend")
                }
              >
                Frontend
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/Bunzo_backend/tree/master")
                }
              >
                Backend
              </Button>
            </div>
          </div>
          {/* <div className="project-card">
            <img
              className="project-pic"
              src="https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png"  />
            <h2>STACK OVERFLOW CLONE</h2>
            <p>
              {" "}
             StackOverFlow clone - Once logged in, you will have a lot of doubt
clarifying answers and also a option to ask you doubts and get it
clarified
            </p>
            <div>
              {" "}
              <Button
                sx={{ width: [400], marginTop: "20px", bgcolor: "black" }}
                variant="contained"
                onClick={() =>
                  window.open("https://tiny-valkyrie-08d139.netlify.app")
                }
              >
                LIVE
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/stack-overflow-clone/tree/master")
                }
              >
                Frontend
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/stackoverflow-backend/tree/master")
                }
              >
                Backend
              </Button>
            </div>
          </div> */}
          {/* <div className="project-card">
            <img
              className="project-pic"
              src="https://static.toiimg.com/thumb/msid-89720888,imgsize-97796,width-400,resizemode-4/89720888.jpg"   />
            <h2>YOUTUBE CLONE</h2>
            <p>
              {" "}
              Bunzo is an Indian company that delivers groceries and essentials,
              fruits and vegetables, meat, pet supplies and food in major
              cities. It also has a separate service to pick up and deliver
              packages within the same city.
            </p>
            <div>
              {" "}
              <Button
                sx={{ width: [400], marginTop: "20px", bgcolor: "black" }}
                variant="contained"
                onClick={() =>
                  window.open("https://tiny-valkyrie-08d139.netlify.app")
                }
              >
                LIVE
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/Bunzo_frontend")
                }
              >
                Frontend
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/Bunzo_backend/tree/master")
                }
              >
                Backend
              </Button>
            </div>
          </div> */}
          <div className="project-card">
            <img
              className="project-pic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5mRFy3Jo5JhMlYXpkh_bVTFQhmTjswXvSg&usqp=CAU"  />
            <h2>Movie Flix</h2>
            <p>
              {" "}
              Movie Flix - Here you have n number of movies. There is a
option to add movie, edit movie details and also delete movies. And
from info button, you'll get the info of the movie
            </p>
            <div>
              {" "}
              <Button
                sx={{ width: [400], marginTop: "20px", bgcolor: "black" }}
                variant="contained"
                onClick={() =>
                  window.open("https://super-tarsier-3f4add.netlify.app")
                }
              >
                LIVE
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/Movie_app")
                }
              >
                Frontend
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "20px",
                  padding: "10px",
                  width: [150],
                  bgcolor: "black",
                }}
                onClick={() =>
                  window.open("https://github.com/ArunaDevi-B/Movies_app-node")
                }
              >
                Backend
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="project-content">
        <h2>STACK OVERFLOW CLONE</h2>
        <div className="project-cards">
          <div className="project-card">
            <img
              className="project-pic"
              src="https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png"
            />
            <p>
              {" "}
              Stack Overflow is a question and answer website for professional
              and enthusiast programmers. It is the flagship site of the Stack
              Exchange Network.{" "}
              <a
                href="https://extraordinary-cocada-d05eba.netlify.app"
                target={"_blank"}
              >
                Stack OverFlow CLONE
              </a>
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-pic"
              src="https://user-images.githubusercontent.com/107837537/201062615-6beefa5c-af1f-49bc-8578-71b72c7e3da8.png"
            />
            <p>
              {" "}
              Stack Overflow was created in 2008 by Jeff Atwood and Joel
              Spolsky. It features questions and answers on a wide range of
              topics in computer programming.
            </p>
            <a
              href="https://extraordinary-cocada-d05eba.netlify.app"
              target={"_blank"}
            >
              Stack OverFlow CLONE
            </a>
          </div>
          <div className="project-card">
            <img
              className="project-pic"
              src="https://go.dev/blog/stackoverflow/stackoverflow.png"
            />
            <p>
              {" "}
              Stack Overflow has about 50 million questions and answers on every
              possible technology topic like Python to scripting languages like
              JavaScript to cloud technologies like AWS and so on.
            </p>
            <a
              href="https://extraordinary-cocada-d05eba.netlify.app"
              target={"_blank"}
            >
              Stack OverFlow CLONE
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h2>YOUTUBE CLONE</h2>
        <div className="project-cards">
          <div className="project-card">
            <img
              className="project-pic"
              src="https://static.toiimg.com/thumb/msid-89720888,imgsize-97796,width-400,resizemode-4/89720888.jpg"
            />
            <h3>YouTube</h3>
            <p>
              {" "}
              YouTube is an American online video sharing and social media
              platform. It was launched on February 14, 2005, by Steve Chen,
              Chad Hurley, and Jawed Karim. It is currently owned by Google, and
              is the second most visited website, after Google Search.{" "}
              <a
                href="https://stirring-lokum-30046e.netlify.app"
                target={"_blank"}
              >
                YouTube Clone
              </a>
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-pic"
              src="https://techsparx.com/blog/2019/10/img/youtube-ui-categories.jpg"
            />
            <h3>YouTube</h3>
            <p>
              {" "}
              YouTube clone has the structure and design of the YouTube.If you
              enter the channel id, you will get the Subscriber, Videos and
              Views count. There are lot of filters like Live, Music, Comedy,
              Sports, Education.
            </p>
            <a
              href="https://stirring-lokum-30046e.netlify.app"
              target={"_blank"}
            >
              YouTube Clone
            </a>
          </div>
          <div className="project-card">
            <img
              className="project-pic"
              src="https://i.ytimg.com/vi/aqrNCCA2BFI/hqdefault.jpg"
            />
            <h3>YouTube</h3>
            <p>
              {" "}
              Enjoy the videos, movies and music you love, upload original
              content, and share it all with friends, family, and the world on
              YouTube.
            </p>
            <a
              href="https://stirring-lokum-30046e.netlify.app"
              target={"_blank"}
            >
              YouTube Clone
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h2>MOVIE APP</h2>
        <div className="project-cards">
          <div className="project-card">
            <img
              className="project-pic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5mRFy3Jo5JhMlYXpkh_bVTFQhmTjswXvSg&usqp=CAU"
            />
            <h3>Movie Flix</h3>
            <p>
              {" "}
              A Movie Flix is an movie app which has the movie description, Like
              and Dislike button. You can find a ratings. And a info icon which
              will take you to the movie video page.
            </p>
            <a
              href="https://glistening-yeot-d8bb04.netlify.app"
              target={"_blank"}
            >
              Visit Movie Flix
            </a>
          </div>
          <div className="project-card">
            <img
              className="project-pic"
              src="https://top10tale.com/wp-content/uploads/2016/08/Apps-to-watch-movies.jpg"
            />
            <h3>Movie Flix</h3>
            <p>
              {" "}
              A mobile application or app is a computer program or software
              application designed to run on a mobile device such as a phone,
              tablet, or watch. It looks really attractive. It has a good
              UserInterface.
            </p>
            <a
              href="https://glistening-yeot-d8bb04.netlify.app"
              target={"_blank"}
            >
              Visit Movie Flix
            </a>
          </div>
          <div className="project-card">
            <img
              className="project-pic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0k3yKnQxhbVwdXnL5ueqot8vri4p_16DI7A&usqp=CAU"
            />
            <h3>Movie Flix</h3>
            <p>
              {" "}
              In Movie Flix, you can also add a new movie by clicking the Add
              Movie button in the navbar. Also there is an delete and edit Icon
              which helps to delete and edit the movie and movie details
              respectively.
            </p>
            <a
              href="https://glistening-yeot-d8bb04.netlify.app"
              target={"_blank"}
            >
              Visit Movie Flix
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
