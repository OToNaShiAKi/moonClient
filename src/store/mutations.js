const Account = (state, info) => {
  state.user = info;
};

const Info = (state, info) => {
  const user = state.user;
  user.name = info.name;
  user.phone = info.phone;
  user.uid = info.uid;
  state.user = { ...user };
};

const Notify = (state, { type, message = "网络连接失败" }) => {
  state.notify = {
    show: true,
    type,
    message,
  };
};

const Progress = (state, show) => {
  state.progress = show;
};

const Upload = (state, files) => {
  const cards = state.cards;
  state.cards = { [files.id]: files, ...cards };
  state.user.pictures += 1;
};

const GetCards = (state, cards) => {
  state.cards = cards;
};

const Like = (state, id) => {
  const cards = state.cards;
  const user = state.user.id;
  const index = cards[id].likes.indexOf(user);
  if (index === -1) cards[id].likes.push(user);
  else cards[id].likes.splice(index, 1);
  state.cards = { ...cards };
};

const Comment = (state, info) => {
  const cards = state.cards;
  const { id, nick } = state.user;
  cards[info.id].comments.push({ id, nick, text: info.text });
  state.cards = { ...cards };
};

const Remove = (state, { id, index }) => {
  const cards = state.cards;
  if (index >= 0) cards[id].comments.splice(index, 1);
  else {
    delete cards[id];
    state.user.pictures -= 1;
  }
  state.cards = { ...cards };
};

export default {
  Account,
  Notify,
  Progress,
  Info,
  Upload,
  GetCards,
  Like,
  Comment,
  Remove,
};
