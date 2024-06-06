import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { ReactComponent as Logo } from '../../images/logo_copy.svg'
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg'
import { ReactComponent as Youtube } from '../../images/icon-youtube.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'
import { ReactComponent as Pinterest } from '../../images/icon-pinterest.svg'
import { ReactComponent as Insta } from '../../images/icon-instagram.svg'

import './Footer.css'

const Footer = () => {
	return (
		<div className="footer_wrapper">
			<div className="footer_block">
				<div className="footer_image">
					<div className="footer_image_block">
						<div className="footer_logo">
							<Logo />
						</div>
						<div className="footer_social">
							<Link to={'#'}>
								<Facebook className="icon_social" />
							</Link>
							<Link to={'#'}>
								<Youtube className="icon_social" />
							</Link>
							<Link to={'#'}>
								<Twitter className="icon_social" />
							</Link>
							<Link to={'#'}>
								<Pinterest className="icon_social" />
							</Link>
							<Link to={'#'}>
								<Insta className="icon_social" />
							</Link>
						</div>
					</div>
					<div className="footer_nav">
						<Link to={'/about'}>About Us</Link>
						<Link to={'/careers'}>Careers</Link>
						<Link to={'/contact'}>Contact</Link>
						<Link to={'#'}>Support</Link>
						<Link to={'/blog'}>Blog</Link>
						<Link to={'#'}>Privacy Policy</Link>
					</div>
				</div>
				<div className="footer_btn">
					<Button text="Request Invite" />
					<div>© Easybank. All Rights Reserved</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
