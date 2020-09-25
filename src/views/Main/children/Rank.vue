<template>
  <div>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">排名</th>
            <th class="text-center">昵称</th>
            <th class="text-center">点赞数</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(item, i) in rank" :key="item.id">
            <td>{{ i + 1 }}</td>
            <td>{{ item.nick }}</td>
            <td>{{ item.likes.length }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="caption pa-3">
      排行榜按照个人最高赞数排行，排行越高，结算时积分越高。
    </div>
  </div>
</template>

<script>
export default {
  name: "Rank",
  computed: {
    rank() {
      let rank = [];
      const users = {};
      const cards = this.$store.state.cards;
      for (let key in cards) {
        const card = cards[key];

        if (!users[card.id]) {
          users[card.id] = card;
          continue;
        }
        if (users[card.id].likes.length < card.likes.length)
          users[card.id] = card;
      }
      for (let key in users) rank.push(users[key]);
      rank = rank.sort((a, b) => b.likes.length - a.likes.length);
      return rank;
    },
  },
};
</script>
