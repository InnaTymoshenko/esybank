import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { ReactComponent as IClose } from '../../images/icon-close.svg'
import { ReactComponent as IMenu } from '../../images/icon-hamburger.svg'
import Button from '../button/Button'

import './Root.css'
import '../../index.css'

const Root = () => {
	const [isOpen, setIsOren] = useState(false)

	return (
		<React.Fragment>
			<div className="wrapper">
				<div className="header_fixed">
					<div className="header_wrapper">
						<div className="header_logo">
							<img src={logo} alt="logo" />
						</div>
						<div className={!isOpen ? 'header_nav' : 'header_nav nav_active'}>
							<nav>
								<ul className="header_navItem">
									<li>
										<NavLink
											className={({ isActive }) => (isActive ? 'active' : 'link')}
											to={'/'}
											onClick={() => setIsOren(false)}
										>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink
											className={({ isActive }) => (isActive ? 'active' : 'link')}
											to={'about'}
											onClick={() => setIsOren(false)}
										>
											About
										</NavLink>
									</li>
									<li>
										<NavLink
											className={({ isActive }) => (isActive ? 'active' : 'link')}
											to={'contact'}
											onClick={() => setIsOren(false)}
										>
											Contact
										</NavLink>
									</li>
									<li>
										<NavLink
											className={({ isActive }) => (isActive ? 'active' : 'link')}
											to={'blog'}
											onClick={() => setIsOren(false)}
										>
											Blog
										</NavLink>
									</li>
									<li>
										<NavLink
											className={({ isActive }) => (isActive ? 'active' : 'link')}
											to={'careers'}
											onClick={() => setIsOren(false)}
										>
											Careers
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>
						<div className="header_btn">
							<Button text="Request Invite" />
						</div>
						<div className="nav_mobile_btn" onClick={() => setIsOren(!isOpen)}>
							{!isOpen ? <IMenu /> : <IClose />}
						</div>
					</div>
				</div>
				<div className={isOpen ? 'nav_modal modal-active' : 'nav_modal'} onClick={() => setIsOren(!isOpen)}></div>

				<Outlet />
			</div>
		</React.Fragment>
	)
}

export default Root
