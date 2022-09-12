import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const trelloSlice = createSlice({
  name: "column",
  initialState: initialState,
  reducers: {
    addColumn(state, action) {
      const newData = action.payload;
      state.todo.push({
        id: newData.id,
        title: newData.title,
        todos: [],
      });
    },
    addData(state, action) {
      const { data, id } = action.payload;
      state.todo.map((el) => {
        if (el.id === id) {
          el.todos.push({
            items: data,
          });
        }
      });
    },
  },
});
export const trelloActions = trelloSlice.actions;
export default trelloSlice;
