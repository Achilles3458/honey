import axios from "axios";

const baseApi = "http://localhost:8080/apis/";

const readAll = () => {
  return axios.get(baseApi + "admin/readall", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

const createOne = (data) => {
  return axios.post(baseApi + "admin/createone", data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

const readOne = (id) => {
  return axios.get(baseApi + `admin/readone/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

const updateOne = (id, data) => {
  return axios.put(baseApi + `admin/updateone/${id}`, data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

const deleteOne = (id) => {
  return axios.delete(baseApi + `admin/deleteone/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

const saveOpenAIKey = (id, key) => {
  const key1 = { key: key };
  return axios.put(baseApi + `user/updateopenaikey/${id}`, key1, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

const getOpenAIKey = () => {
  const id = localStorage.getItem("id");
  return axios.get(baseApi + `user/getopenaikey/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export default {
  readAll,
  createOne,
  readOne,
  updateOne,
  deleteOne,
  saveOpenAIKey,
  getOpenAIKey,
};
