import React, { useRef } from "react";

const Editor = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef(null);

  const onClickAdd = () => {
    if (todo.trim() === "") {
      alert("내용 입력안하나!! 캌씌ㅣ");
      inputRef.current.focus(); // 입력창에 포커스
      return;
    }
    handleAdd();
  };

  // 엔터 키 입력 시 추가
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickAdd();
    }
  };

  return (
    <div className="editor">
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={onKeyDown} // 엔터 감지했는데 2개가 추가된 건에 대하여...
        placeholder="새로운 Todo..."
      />
      <button onClick={onClickAdd}>추가</button>
    </div>
  );
};

export default Editor;