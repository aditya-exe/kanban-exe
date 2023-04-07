import { type Board } from "@/types";
import { create } from "zustand";

export type BoardState = {
  boardId: string;
  boardName: string;
}

type KanbanState = {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
  boards: BoardState[];
  setBoards: (boards: BoardState[]) => void;
  selectedBoard: Board | null;
  setSelectedBoard: (b: Board) => void;
}

export const useZustandStore = create<KanbanState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (sidebarOpen) => {
    set(() => ({
      sidebarOpen: !sidebarOpen,
    }))
  },
  boards: [],
  setBoards: (boardsFromFireStore) => {
    set(() => ({
      boards: boardsFromFireStore,
    }))
  },
  selectedBoard: null,
  setSelectedBoard: (b) => {
    set(() => ({
      selectedBoard: b,
    }))
  }
}));