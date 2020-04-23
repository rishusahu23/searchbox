import React from 'react'

class Items extends React.Component{

	
	
	render(){
		const {id,name,email}=this.props.data
		return(
			<div className="flex-items box">
				<img  
					 src={`https://robohash.org/${name}`}
					 alt="none" />
				<p>{id}</p>
				<p>{name}</p>
				<p>{email}</p>
			</div>
			)
	}
}


export default Items