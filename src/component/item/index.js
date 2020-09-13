import React, { useState, useEffect } from "react";

const Item = ({ todo, onUpdate, onRemove }) => {
	const [name, setName] = useState("");
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		setName(todo.name);
		return () => {
			console.log("cleanup item");
		};
	}, []);

	const handleEdit = () => {
		setEditing(true);
	};

	const handleCompleted = () => {
		onUpdate({
			id: todo.id,
			completed: !todo.completed,
		});
	};

	const handleRemove = () => {
		onRemove(todo.id);
	};

	const handleChange = (event) => {
		setName(event.target.value);
	};

	const handleBlur = () => {
		onUpdate({
			id: todo.id,
			name: name,
		});
		setEditing(false);
	};

	const class_name = () => {
		let class_name = "nothing";
		if (todo.completed) class_name = "completed";
		if (editing) class_name = "editing";
		return class_name;
	};

	return (
		<li className={class_name()}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={todo.completed}
					onChange={handleCompleted}
				/>
				<label onDoubleClick={handleEdit}>{name}</label>
				<button className="destroy" onClick={handleRemove} />
			</div>
			{editing && (
				<input
					className="edit"
					value={name}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			)}
		</li>
	);
};

export default Item;
