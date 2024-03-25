import axios from "axios";
import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_Success":
      return {
        loading: false,
        post: action.payload,
        err: false,
      };
    case "err":
      return {
        loading: false,
        post: {},
        err: true,
      };
    default:
      return state;
  }
};
function useReducerWithAxios() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    err: "",
    post: {},
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "Fetch_Success", payload: response.data });
      })
      .catch(dispatch({ type: "err" }));
  }, []);
  return (
    <div>
      {state.loading ? "loading..." : state.post.title}
      {state.err ? "something went wrong" : null}
    </div>
  );
}

export default useReducerWithAxios;
