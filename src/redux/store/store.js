import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { ourSettingsReducer } from "../ourSettings/ourSettingsReducer";
import { cartReducer } from "../cartSlice/cartSlice";
// import { categoriesReducer } from "../catalog/catalogReducer";
import { sliderReducer } from "../sliderSlice/sliderSlice";
import { authReducer } from "../authSlice/authSlice";
import { catalogeAPI, productsAPI } from "../API/catalogeAPI";

const persistConfig = {
  key: "client-root",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    // catalog: categoriesReducer,
    //favorites: persistedFavoritesReducer,
    ourSettings: ourSettingsReducer,
    cart: cartReducer,
    slider: sliderReducer,
    [catalogeAPI.reducerPath]: catalogeAPI.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(catalogeAPI.middleware)
      .concat(productsAPI.middleware),
});

export const persistor = persistStore(store);
