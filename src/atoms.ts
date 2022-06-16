import { atom, selector } from "recoil";

interface ITodo {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodo[]>({
  key: "TodoList",
  default: [],
});

export enum Filters {
  showAll = "Show All",
  showCompleted = "Show Completed",
  showUncompleted = "Show Uncompleted",
}

export const todoListFilterState = atom<Filters>({
  key: "TodoListFilter",
  default: Filters["showAll"],
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case Filters.showCompleted:
        return list.filter((item) => item.isComplete);
      case Filters.showUncompleted:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export type { ITodo };
