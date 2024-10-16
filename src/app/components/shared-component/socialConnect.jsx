import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { data } from '../../../../public/data';

export default function SocialConnect({social_links}) {
  return (
    <div className="flex items-center gap-5 pt-8">
      <h6 className="font-bold dark">Share:</h6>
      <div className="flex items-center gap-4 ">
        {/* Need to use array of links[0] to make it dynamic  */}
        <Link target="_blank" href={social_links[0]}>
          <FaFacebook className="dark" />
        </Link>
        <Link target="_blank" href={social_links[1]}>
          <FaLinkedin className="dark" />
        </Link>
        <Link target="_blank" href={social_links[2]}>
          <FaXTwitter className="dark" />
        </Link>
        <Link target="_blank" href={social_links[3]}>
          <FaGithub className="dark" />
        </Link>
        <Link target="_blank" href={social_links[4]}>
          <FaYoutube className="dark" />
        </Link>
        <Link target="_blank" href={social_links[5]}>
          <FaInstagram className="dark" />
        </Link>
      </div>
    </div>
  );
}
