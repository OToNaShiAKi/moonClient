import request from "./../plugins/request";
import router from "./../router/";
import { setItem } from "./../plugins/storage";

const Account = async ({ commit }, info) => {
  try {
    const result = await request.post("/user/account", info);
    setItem("user", info);
    commit("Account", result.data);
    const name = router.history.current.name;
    if (name === "Login") router.replace("/main/home");
  } catch (error) {
    console.log(error);
  }
};

const Info = async ({ commit }, info) => {
  try {
    await request.post("/user/info", info);
    commit("Info", info);
  } catch (error) {
    console.log(error);
  }
};

const Upload = async ({ commit }, files) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  try {
    const result = await request.post("/picture/upload", files, config);
    commit("Upload", result.data);
    router.replace("/main/home");
  } catch (error) {
    console.log(error);
  }
};

const GetCards = async ({ commit }, sort) => {
  try {
    const result = await request.get("/picture/cards", { params: { sort } });
    result.sort = sort;
    commit("GetCards", result.data);
  } catch (error) {
    console.log(error);
  }
};

const LikeAndComment = async ({ commit }, info) => {
  try {
    await request.post("/picture/like", info);
    if (info.text) commit("Comment", info);
    else commit("Like", info.id);
  } catch (error) {
    console.log(error);
  }
};

const Remove = async ({ commit }, info) => {
  try {
    await request.get("/picture/remove", { params: info });
    commit("Remove", info);
    if (!(info.index >= 0)) router.replace("/main/home");
  } catch (error) {
    console.log(error);
  }
};

const Logout = async ({ commit }) => {
  try {
    await request.get("/user/logout");
    commit("Account", {});
    setItem("user", {});
    router.replace("/main/home");
  } catch (error) {
    console.log(error);
  }
};

export default {
  Account,
  Info,
  Upload,
  GetCards,
  LikeAndComment,
  Remove,
  Logout,
};
