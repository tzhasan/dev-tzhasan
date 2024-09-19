import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SocialConnect() {
  return (
    <div className="flex items-center gap-5 pt-8">
      <h6 className="font-bold dark">Share:</h6>
      <div className="flex items-center gap-4 ">
        {/* Need to use array of links[0] to make it dynamic  */}
        <Link href={""}>
          <FaFacebook className="dark" />
        </Link>
        <Link href={""}>
          <FaLinkedin className="dark" />
        </Link>
        <Link href={""}>
          <FaXTwitter className="dark" />
        </Link>
        <Link href={""}>
          <FaGithub className="dark" />
        </Link>
        <Link href={""}>
          <FaYoutube className="dark" />
        </Link>
        <Link href={""}>
          <FaInstagram className="dark" />
        </Link>
      </div>
    </div>
  );
}
