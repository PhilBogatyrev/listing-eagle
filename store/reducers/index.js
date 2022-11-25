import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import session from "redux-persist/lib/storage/session"; // defaults to localStorage for web
//import AsyncStorage from "@react-native-community/async-storage";
//import { CookieStorage } from "redux-persist-cookie-storage";
//import Cookies from "cookies-js";
import cardReducer from "./card";
import productsReducer from "./products";
import searchReducer from "./search";

// WHITELIST
const persistConfig = {
  key: "root",
  // storage: new CookieStorage(Cookies), //session,
  storage: session,
  whitelist: ["card", "search"], // only card will be persisted
};

const rootReducer = combineReducers({
  card: cardReducer,
  product: productsReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
