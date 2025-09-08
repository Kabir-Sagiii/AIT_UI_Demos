import axios from "axios";
const url = "https://randomuser.me/api/?results=50";
export function getUsers(setUsers) {
  axios
    .get(url)
    .then(function (res) {
      console.log(res.data.results);
      setUsers(res.data.results);
    })
    .catch(function (error) {
      alert("failed to get users data");
      console.log(error);
    });
}
