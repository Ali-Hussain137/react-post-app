import axios from "axios";


const insertUser = async (user) => {
  let formData = new FormData();
  formData.append("name", user.name);
  formData.append("password", user.password);
  formData.append("email", user.email);
  return await axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "POST",
    data: formData,
  });
};

const getUser = async (user) => {
  return await axios({
    url: `https://jsonplaceholder.typicode.com/users?email=${user.email.value}`,
    method: "GET",
  });
};

export default (insertUser, getUser);
