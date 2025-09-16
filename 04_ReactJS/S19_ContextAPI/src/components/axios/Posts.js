import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";
export function getPosts(setPosts) {
  //send a get request to server
  axios
    .get(url)
    .then(function (res) {
      setPosts(res.data);
    })
    .catch(function (error) {
      alert("Failed to get Post Data");
      console.log(error);
    });
}
