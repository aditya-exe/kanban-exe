export type Task = {
  title: string;
  description: string;
  subtasks: string[];
};

export type Board = {
  boardName: string;
  boardColumns: Task[];
};