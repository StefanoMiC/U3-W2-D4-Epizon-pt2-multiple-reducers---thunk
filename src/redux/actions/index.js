// qui dentro definiamo i TYPE come COSTANTI
export const ADD_TO_CART = "ADD_TO_CART";
// sbagliare l'import di una costante ci avvertirà a "compile-time" (in VSCode) che c'è un problema, in anticipo
// ci permette di evitare errori "silenziosi", che non produrrebbero un vero e proprio errore in console.
// riusciamo quindi così ad avere errori più "parlanti" che riescono a darci un indizio vero se un problema si presenta
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SELECT_BOOK = "SELECT_BOOK";
export const SET_ADMIN = "SET_ADMIN";
export const SET_USER = "USER";

// ACTION CREATORS
// funzioni che tornano l'azione (oggetto)

// export const addToCartAction = (bookSelected) => {
//     return { type: ADD_TO_CART, payload: bookSelected }
// }
export const addToCartAction = bookSelected => ({ type: ADD_TO_CART, payload: bookSelected });
export const removeFromCartAction = i => ({ type: REMOVE_FROM_CART, payload: i });
export const selectBookAction = book => ({ type: SELECT_BOOK, payload: book });
export const setAdminAction = str => ({ type: SET_ADMIN, payload: str });
export const setUserNameAction = str => ({ type: SET_USER, payload: str });
