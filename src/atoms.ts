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

export type { ITodo };
