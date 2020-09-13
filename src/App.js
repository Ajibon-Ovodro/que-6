import React, { useEffect } from "react";
import Header from "./component/header";
import { loadTodos, storeTodos } from "./services";
import { connect } from "react-redux";
import { onLoad } from "./redux/action/action";
import List from "./component/list";
import Footer from "./component/footer";

const App = ({ onLoad, todos }) => {
  useEffect(() => {
    console.log(loadTodos());
    onLoad(loadTodos());
    return () => {
      console.log("app cleanup");
    };
  }, []);

  useEffect(() => {
    storeTodos(todos);
    return () => {
      console.log("app cleanup");
    };
  }, [todos]);
  return (
    <div className="App">
      <section className="todoapp">
        <Header />
        {!!todos.length && <List />}
        {!!todos.length && <Footer />}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (data) => dispatch(onLoad(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
