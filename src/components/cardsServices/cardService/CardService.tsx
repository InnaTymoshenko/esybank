import React from 'react'
import { IService } from '../../../types/cardServiceTypes'

const CardService = ({ title, image, description }: IService) => {
	return (
		<React.Fragment>
			<div>
				<img src={image} alt={title} />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</React.Fragment>
	)
}

export default CardService
