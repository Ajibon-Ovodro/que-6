import React, { useState } from "react";
import { connect } from "react-redux";
import { onCreate } from "../../redux/action/action";
import { onCompleteAll, onRemove, onUpdate } from "../../redux/action/action";

const Header = ({ onCreate }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    onCreate(name);
    setName("");
  };

  return (
    <div className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onChange={handleChange}
        onKeyUp={handleSubmit}
        //onChange={() => {}}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCreate: (data) => dispatch(onCreate(data)),
});

export default connect(null, mapDispatchToProps)(Header);
