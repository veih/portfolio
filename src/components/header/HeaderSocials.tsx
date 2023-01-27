
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/marcelo-evangelista-847515175/"
        target="_blank"
      > < BsLinkedin /></a>
      <a href="https://github.com/veih" target="_blank">< BsGithub /></a>
      <a href="https://www.facebook.com/veihbabal" target="_blank">< BsFacebook /></a>
    </div>
  );
}

export default HeaderSocials