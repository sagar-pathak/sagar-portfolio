import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/sagar-pathak" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sagar-pathak/" },
    { icon: <FaTwitter />, path: "https://x.com/pathaksagar" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)=>{
                return (
                    <Link key={index} href={item.path} className={iconStyles}  target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social
