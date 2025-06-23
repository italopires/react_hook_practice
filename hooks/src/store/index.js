import reducer from "./reducers"

const initialState = {
    cart: [],
    products: [],
    user: null,
    // focus...
    number: 0
}

export {
  initialState,
  reducer,
}