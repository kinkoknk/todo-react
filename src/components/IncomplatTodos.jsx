import React from "react";

export const IncomplatTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplate-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplate-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              {todo}
              <button className="btnCmp" onClick={() => onClickComplete(index)}>
                完了
              </button>
              <button className="btnDlt" onClick={() => onClickDelete(index)}>
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
