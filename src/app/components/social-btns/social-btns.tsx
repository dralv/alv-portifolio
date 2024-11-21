import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LikedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"
export function SocialBtns(){
  return(
    <div className="social">
      <a href="https://www.linkedin.com/in/alvaro-t-araujo/">
       <LikedinIcon/>
      </a>
      <a href="https://github.com/dralv">
        <GithubIcon/>
      </a>
      <a href="">
        <InstaIcon/>
      </a>        
    </div>
  )
}