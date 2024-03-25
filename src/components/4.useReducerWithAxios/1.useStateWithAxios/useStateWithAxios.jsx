import axios from "axios";
import React, { useEffect, useState } from "react";

function useStateWithAxios() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setErr("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setErr("something went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading..." : post.title}
      {err ? err : null}
    </div>
  );
}

export default useStateWithAxios;
