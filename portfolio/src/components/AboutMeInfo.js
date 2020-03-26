import React from "react";
import "../assets/css/style.css";

function AboutMeInfo() {
    return (
        <div class="uk-container-center" id="about-me">
        <div class="header">
          <h2>About Me</h2>
          <img
            src="assets/img/selfie.jpg"
            alt="profile-img"
            class="uk-border-circle uk-align-center selfie"
          />
        </div>
        <div class="body">
          <p>
            My name is Elizabeth Garcia-Quilinquin. I'm orginally from a small
            island in Hawaii and decided to move out to the Continent for better
            opportunities. I have my Bachelors Degree in Science for Astronomy,
            but my work background is very extensive. I love to learn new things
            which I've done with my whole working career. I've worked in retail,
            hospitality, astronomy outreach/planetarium, customer service, food
            industry, and now I want to try my hands on coding and web
            development. I've worked with it in college for classes and worked
            with some of it for and electronics elective in highschool. My work
            ethic will usually speak for itself and for an employer to determine
            it. I never try to explain how great of a worker I can be but I
            always try to prove myself and raise my expectation for myself in a
            work environment. I try to learn the basics as quickly as possible
            and will always have questions later. "There is always room for
            improvement."
          </p>
          <p id="info" hidden>
            Some things about me: I love food, hence I do love to cook. One
            reason that I got into the food industry is to try out different
            food and flavors of different places in the world, and learn about
            them from different cooks. I will always try most new things and
            usually I really love it. Some say I'm a picky eater but I just want
            to eat something different everyday. I love books!!! "Zero batteries
            required". I'm improving on my reading now because a TV series
            adaptation is catching up to where I am on with the books now. I
            mostly read fiction, romance, and trying to get into science
            fiction. I zen out to books, music, and app games, but when I want
            to challenge my mind, I solve puzzles: jiggzaw, sudoku, karuko,
            mostly number puzzles. I also like solving crossword puzzles, and it
            forces me to learn a little something from them when I don't know a
            solution.
            <br />
          </p>
          <a href="#info" data-uk-toggle="{target:'#info'}">Read More</a>
        </div>
      </div>
    )
}

export default AboutMeInfo;