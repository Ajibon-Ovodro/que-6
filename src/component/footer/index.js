import React from "react";
import { connect } from "react-redux";
import { selectNotCompleted, selectCompleted } from "../../utils";
import { onFilterSelect, onClearCompleted } from "../../redux/action/action";
import { FILTERS } from "../../redux/type/type";

const Footer = ({
	itemsLeft,
	onFilterSelect,
	completedCount,
	onClearCompleted,
	filter,
}) => {
	const itemText = itemsLeft === 1 ? "item" : "items";
	const filterTitles = [
		{ key: FILTERS.all, value: "All" },
		{ key: FILTERS.active, value: "Active" },
		{ key: FILTERS.completed, value: "Completed" },
	];

	const handleClick = (key) => {
		onFilterSelect(key);
	};

	return (
		<div className="footer">
			<span className="todo-count">
				<strong>{itemsLeft}</strong>
				<span> {itemText} left</span>
			</span>
			<ul className="filters">
				{filterTitles.map((filterTitle) => (
					<li key={filterTitle.key}>
						<a
							href="./#"
							className={filterTitle.key === filter ? "selected" : "nothing"}
							onClick={() => handleClick(filterTitle.key)}
						>
							{filterTitle.value}
						</a>
					</li>
				))}
			</ul>
			{!!completedCount && (
				<button className="clear-completed" onClick={onClearCompleted}>
					Clear completed
				</button>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	filter: state.filter,
	itemsLeft: selectNotCompleted(state.todos).length,
	completedCount: selectCompleted(state.todos).length,
});

const mapDispatchToProps = (dispatch) => ({
	onFilterSelect: (data) => dispatch(onFilterSelect(data)),
	onClearCompleted: () => dispatch(onClearCompleted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
