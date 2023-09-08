import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complate-area">
      <p className="title">完了したTODO</p>
      <ul id="complate-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              {todo}
              <button className="btnBk" onClick={() => onClickBack(index)}>
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
