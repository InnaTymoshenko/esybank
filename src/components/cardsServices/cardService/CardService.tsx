import React from 'react'
import { IService } from '../../../types/cardServiceTypes'

const CardService = ({ title, image, description }: IService) => {
	return (
		<React.Fragment>
			<div>
				<img src={image} alt={title} />
			</div>
			<h4>{title}</h4>
			<p>{description}</p>
		</React.Fragment>
	)
}

export default CardService
