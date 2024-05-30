import CardService from './cardService/CardService'
import { services } from '../../data'

import './CardsServices.css'

const CardsServices = () => {
	return (
		<div className="block-services">
			{services?.map((card, i) => {
				return (
					<div key={i} className="service_card">
						<CardService title={card.title} image={card.image} description={card.description} />
					</div>
				)
			})}
		</div>
	)
}

export default CardsServices
