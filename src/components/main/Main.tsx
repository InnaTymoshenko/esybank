import wave from '../../images/bg-intro-desktop.svg'
import mobile from '../../images/bg-intro-mobile.svg'
import phones from '../../images/image-mockups.png'
import Button from '../button/Button'
import CardsServices from '../cardsServices/CardsServices'
import ArticlesCards from '../articlesCard/ArticlesCards'

import './Main.css'

const Main = () => {
	return (
		<div className="main_wrapper">
			<section>
				<div className="main_block_wrapper top-block">
					<div className="main_block top">
						<div className="main_top_text">
							<h1>Next generation digital banking</h1>
							<p>
								Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
								budgeting, investing, and much more.
							</p>
							<div className="main_top_btn">
								<Button text="Request Invite" />
							</div>
						</div>
						<div className="main_top_image">
							<div className="main_image wave-desktor">
								<img className="wave" src={wave} alt="wave" />
							</div>
							<div className="main_image wave-mobile">
								<img src={mobile} alt="wave" />
							</div>
							<div className="main_image phones">
								<img src={phones} alt="phones" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="main_block_wrapper center-block ">
					<div className="main_block center">
						<div className="main_center title">
							<h2>Why choose Easybank?</h2>
							<p>
								We leverage Open Banking to turn your bank account into your financial hub. Control your finances like
								never before.
							</p>
						</div>
						<div className="main_center service-card">
							<CardsServices />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="main_block_wrapper bottom-block">
					<div className="main_block bottom">
						<div className="main_bottom">
							<h2>Latest Articles</h2>
							<div className="main_bottom article-card">
								<ArticlesCards />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Main
