import React from 'react'
import "../../Assets/Css/Project.css";
import Image from "../../Assets/Image/profile-pic.jpg"


const Project = () => {
  return (
    <div className='project-container'>
      <div className='project-head'>
        <h1>MY PROJECTS</h1>
        <h4>Learnt with Passion</h4>
        </div>
        <p className='empty-border'></p>

      <div className='project-content'>
        <h4>YOUTUBE CLONE</h4>
        <div className='project-cards'>
          <div className='project-card'>
                   <img className="project-pic"
                   src="https://static.toiimg.com/thumb/msid-89720888,imgsize-97796,width-400,resizemode-4/89720888.jpg" />
                   <h3>YouTube</h3>
                   <p> YouTube is an American online video sharing and social media platform. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is currently owned by Google, and is the second most visited website, after Google Search. <a href="https://stirring-lokum-30046e.netlify.app" target={"_blank"}>YouTube Clone</a></p>
              </div>
              <div className='project-card'>
                   <img className="project-pic" src="https://techsparx.com/blog/2019/10/img/youtube-ui-categories.jpg" />
                   <h3>YouTube</h3>
                   <p> YouTube clone has the structure and design of the YouTube.If you enter the channel id, you will get the Subscriber, Videos and Views count. There are lot of filters like Live, Music, Comedy, Sports, Education.</p>
                   <a href="https://stirring-lokum-30046e.netlify.app" target={"_blank"}>YouTube Clone</a>
              </div>
            <div  className='project-card'>
                   <img className="project-pic" src="https://i.ytimg.com/vi/aqrNCCA2BFI/hqdefault.jpg" />
                   <h3>YouTube</h3>
                   <p> Enjoy the videos, movies and music you love, upload original content, and share it all with friends, family, and the world on YouTube.</p>
                   <a href="https://stirring-lokum-30046e.netlify.app" target={"_blank"}>YouTube Clone</a>
              </div>
        </div>
      </div>
      <div className='project-content'>
        <h4>MOVIE APP</h4>
        <div className='project-cards'>
          <div className='project-card'>
                   <img className="project-pic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5mRFy3Jo5JhMlYXpkh_bVTFQhmTjswXvSg&usqp=CAU" />
                    <h3>Movie Flix</h3>
                   <p> A Movie Flix is an movie app which has the movie description, Like and Dislike button. You can find a ratings. And a info icon which will take you to the movie video page.</p>
                   <a href="https://glistening-yeot-d8bb04.netlify.app" target={"_blank"}>Visit Movie Flix</a>
              </div>
              <div className='project-card'>
                   <img className="project-pic" 
                   src="https://top10tale.com/wp-content/uploads/2016/08/Apps-to-watch-movies.jpg" />
                   <h3>Movie Flix</h3>
                   <p> A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. It looks really attractive. It has a good UserInterface.</p>
                   <a href="https://glistening-yeot-d8bb04.netlify.app" target={"_blank"}>Visit Movie Flix</a>
              </div>
              <div className='project-card'>
                   <img className="project-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0k3yKnQxhbVwdXnL5ueqot8vri4p_16DI7A&usqp=CAU" />
                   <h3>Movie Flix</h3>
                   <p> In Movie Flix, you can also add a new movie by clicking the Add Movie button in the navbar. Also there is an delete and edit Icon which helps to delete and edit the movie and movie details respectively.</p>
                   <a href="https://glistening-yeot-d8bb04.netlify.app" target={"_blank"}>Visit Movie Flix</a>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Project