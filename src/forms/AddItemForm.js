import React, { useState } from 'react'

const AddItemForm = props => {
	const initialFormState = { id: null, name: '' }
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!item.name) return
				props.addItem(item)
				setItem(initialFormState)
			}}
		>
			<div className="mb-3 mt-3">
				<label className="form-label">Add item to list:</label>
				<input type="text" className="form-control" name="name" placeholder="Enter name of item" value={item.name} onChange={handleInputChange} />
			</div>
			<button type="submit" className="btn btn-primary">Add item</button>
		</form>
	)
}

export default AddItemForm;
