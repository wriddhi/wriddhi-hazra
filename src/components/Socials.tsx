import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

type SocialProps = {
  className?: string
}

const Socials = ({className = ""} : SocialProps) => {
  return (
    <ul className={className}>
        <li><a href="https://github.com/wriddhi"><BsGithub/></a></li>
        <li><a href="https://www.linkedin.com/in/wriddhi-hazra/"><BsLinkedin/></a></li>
    </ul>
  )
}

export default Socials