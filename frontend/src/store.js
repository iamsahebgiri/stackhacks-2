import { createStore, action, thunk } from "easy-peasy";
import axios from "axios";

const store = createStore({
  categories: [],
  addCategory: action((state, payload) => {
    state.categories.push(payload);
  }),
  flushCategories: action((state) => {
    state.categories = [];
  }),
  deleteCategory: action((state, id) => {
    state.categories = state.categories.filter(
      (category) => category.id !== id
    );
  }),
  getAllCategories: thunk((actions, payload) => {
    actions.flushCategories();
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
  foodItems: [],
  flushFoodItem: action((state) => {
    state.foodItems = [];
  }),
  deleteFoodItem: action((state, id) => {
    state.foodItems = state.foodItems.filter((foodItem) => foodItem.id !== id);
  }),
  addFoodItem: action((state, payload) => {
    state.foodItems.push(payload);
  }),
  getAllFoodItems: thunk((actions, payload) => {
    actions.flushFoodItem();
    axios
      .get("http://localhost:3030/api/fooditems")
      .then((response) => {
        const foodItems = response.data.foodItems;
        foodItems.map((foodItem) => {
          actions.addFoodItem(foodItem);
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }),
  getFoodItemsByMe: thunk((actions, payload) => {
    actions.flushFoodItem();
    axios
      .get("http://localhost:3030/api/fooditems/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const foodItems = response.data.foodItems;
        console.log(response.data)
        foodItems.map((foodItem) => {
          actions.addFoodItem(foodItem);
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }),
});

export default store;
