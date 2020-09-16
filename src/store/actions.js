import request from "./../plugins/request";
import router from "./../router/";
import { setItem } from "./../plugins/storage";

const Account = async ({ commit }, info) => {
  try {
    const result = await request.post("/user/account", info);
    setItem("user", info);
    commit("Account", result.data);
    router.replace("/main/home");
  } catch (error) {
    console.log(error);
    if (router.history.current.name === "Login") router.replace("/login");
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

export const GameRank = async () => {
  try {
    const result = await request.get("/user/rank");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  Account,
  Info,
};
