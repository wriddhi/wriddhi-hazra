import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

type SocialProps = {
  className?: string
}

const socials = [
  {
    name: "Github",
    icon: BsGithub,
    link: "https://github.com/wriddhi"
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/wriddhi-hazra/"
  }
]

const Socials = ({className = ""} : SocialProps) => {
  return (
    <ul className={className}>
        {
          socials.map(({name, icon: Icon, link}) => (
            <li key={name}>
              <a className="focus:text-white hover:text-white transition-all" title={name} href={link}>
                <Icon/>
              </a>
            </li>
          ))
        }
    </ul>
  )
}

export default Socials