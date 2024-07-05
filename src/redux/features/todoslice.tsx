import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id != action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>)=>{
      const task = state.todos.find((item) => item.id == action.payload);

        task!.isCompleted = !task?.isCompleted;
    
        // Reorder todos array
        state.todos.sort((a, b) => {
          if (a.isCompleted && !b.isCompleted) {
            return 1; // 'a' is completed, move 'a' to the end
          } else if (!a.isCompleted && b.isCompleted) {
            return -1; // 'b' is completed, keep 'b' at the current position
          } else {
            return 0; // No change in order if both are either completed or pending
          }
        });
      }
    }
  },
);

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
