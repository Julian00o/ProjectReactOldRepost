import React from 'react'

function Products({ name, price, image, add, button }) {
	return (
		<div style={{
			textAlign: "center",
			borderRadius: "15px",
			padding: "10px",
		}}>
			<img 
				src={image} 
				alt={name} 
				style={{
					width: "100%",
					height: "150px",
					objectFit: "cover",
					borderRadius: "10px"
				}} 
			/>
			<h3 style={{ margin: "10px 0 5px", fontSize: "18px" }}>{name}</h3>
			<p style={{ fontSize: "16px", color: "black"}}>{price}</p>
			<p style={{ fontSize: "16px", color: "black"}}>{add}</p>
			<button style={{ fontSize: "16px", color: "black", backgroundColor: "green"}}>{button}</button>

		</div>
	)
}

export default Products

