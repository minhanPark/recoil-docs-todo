import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atoms";
import type { ITodo } from "./atoms";

type TodoItemProps = {
  item: ITodo;
};

function replaceItemAtIndex(
  arr: ITodo[],
  index: number,
  newValue: ITodo
): ITodo[] {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: ITodo[], index: number): ITodo[] {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const TodoItem = ({ item }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === item.id);

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
