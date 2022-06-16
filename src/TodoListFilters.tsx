import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState, Filters } from "./atoms";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState<Filters>(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as Filters);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={Filters.showAll}>All</option>
        <option value={Filters.showCompleted}>Completed</option>
        <option value={Filters.showUncompleted}>Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
