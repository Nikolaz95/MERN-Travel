import React from 'react'
import useCurrentYear from '../../../hooks/useCurrentYear';


//import css
import "./Footer.css";

//import imges
import Image from '../../Images/Image';
import { GitHub, Gmail, LinkeDin, Location, MyPortfolio } from '../../../../assets/Icons';

const MAPS_URL = "https://www.google.com/maps/place/Stockholm/@59.0968211,17.5065602,7.75z/data=!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM?entry=ttu";

const socialLinks = [
    { label: "Gmail", href: "mailto:nikolajoe95@gmail.com", icon: Gmail },
    { label: "GitHub", href: "https://github.com/Nikolaz95", icon: GitHub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nikola-zovko-a50779247/", icon: LinkeDin },
    { label: "Portfolio", href: "https://nikolazovkoportfolio.netlify.app/#home", icon: MyPortfolio },
];

const Footer = () => {
    const currentYear = useCurrentYear();

    return (
        <footer className="footerContent">
            <div className="footerMainContent">
                <section className="footerColumn">
                    <h2 className="footerHeaderText">Address</h2>
                    <address className="footerAddress">
                        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footerAddressLink">
                            <Image src={Location} alt="" variant="footerImg" />
                            Stockholm, Sweden
                        </a>
                    </address>
                </section>

                <section className="footerColumn">
                    <h2 className="footerHeaderText">Contact</h2>
                    <ul className="contactFooterLink">
                        {socialLinks.map(({ label, href, icon }) => (
                            <li key={label}>
                                <a href={href} className="footerSocialLink" aria-label={label} title={label}
                                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}>
                                    <Image src={icon} alt="" variant="footerImg" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <div className="footerBottom">
                <p>© {currentYear} Nikola Zovko. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
