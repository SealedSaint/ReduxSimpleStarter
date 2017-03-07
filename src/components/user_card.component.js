import React from 'react'

export default ({ name, email, company: { name: company } }) => {
	return (
		<div className="card card-block">
			<h4 className="card-title">{name}</h4>
			<p>{company}</p>
			<a href={`mailto:${email}`} className="btn btn-primary">Email</a>
		</div>
	)
}
