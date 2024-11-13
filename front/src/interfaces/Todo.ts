export interface Todo {
  tno: number;
  title: string;
  writer: string;
  complete: boolean;
  dueDate: string;
}

export type TodoInputType = Omit<Todo, "tno" | "complete">;
