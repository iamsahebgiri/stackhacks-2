import { createStore, action, thunk } from "easy-peasy";
import axios from "axios";

const store = createStore({
  categories: [],
  addCategory: action((state, payload) => {
    state.categories.push(payload);
  }),
  getAllCategories: thunk((actions, payload) => {
    axios
      .get("http://localhost:3030/api/categories")
      .then((response) => {
        const categories = response.data.category;
        categories.map((category) => {
          actions.addCategory(category);
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }),
});

export default store;
