import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        id="add-text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button id="add-button" className="btnAdd" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
