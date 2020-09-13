import React from "react";
import { connect } from "react-redux";
import { selectVisible } from "../../utils";
import { onCompleteAll, onRemove, onUpdate } from "../../redux/action/action";
import Item from "../item";

const List = ({
	areAllCompleted,
	onCompleteAll,
	visibleTodos,
	onUpdate,
	onRemove,
}) => {
	return (
		<section className="main">
			<input
				id="toggle-all"
				className="toggle-all"
				type="checkbox"
				checked={areAllCompleted}
				readOnly
			/>
			<label htmlFor="toggle-all" onClick={onCompleteAll} />

			<ul className="todo-list">
				{visibleTodos.map((todo) => (
					<Item
						key={todo.id}
						todo={todo}
						onUpdate={onUpdate}
						onRemove={onRemove}
					/>
				))}
			</ul>
		</section>
	);
};

const mapStateToProps = (state) => ({
	areAllCompleted:
		state.todos.length && state.todos.every((todo) => todo.completed),
	visibleTodos: selectVisible(state.todos, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
	onCompleteAll: () => dispatch(onCompleteAll()),
	onUpdate: (data) => dispatch(onUpdate(data)),
	onRemove: (data) => dispatch(onRemove(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
