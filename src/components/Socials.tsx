import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const Socials = () => {
  return (
    <ul className='w-full gap-6 text-2xl flex justify-start items-center'>
        <li><a href="https://mywebsite.com"><BsGithub/></a></li>
        <li><a href="https://mywebsite.com"><BsLinkedin/></a></li>
    </ul>
  )
}

export default Socials