import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h2>Todo List</h2>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
