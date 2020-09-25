<template>
  <div>
    <back />
    <v-container>
      <section class="d-flex mb-3 align-center justify-space-between">
        <section class="d-flex align-center">
          <v-img
            eager
            width="60px"
            class="mr-3"
            style="flex-grow: 0"
            src="@/assets/person.png"
          />
          <div class="primary--text">
            <h5 class="text-h5">{{ user.nick }}</h5>
            <div class="caption">{{ card.upTime }}</div>
          </div>
        </section>
        <v-btn
          @click="remove"
          v-if="user.id === card.id"
          color="primary"
          icon
          class="float-right"
        >
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </section>

      <v-carousel
        height="100%"
        cycle
        hide-delimiters
        progress
        :show-arrows="false"
      >
        <v-carousel-item v-for="(item, i) in card.lists" :key="i">
          <v-img eager :src="'http://hustmaths.top/moon/upload/' + item">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <div class="ma-3 d-flex align-center justify-space-between">
        <p class="ma-0">{{ card.text }}</p>
        <v-btn
          color="primary"
          text
          @click.prevent="LikeAndComment({ id: card._id })"
        >
          <span class="mr-1">{{ card.likes.length }}</span>
          <v-icon>{{
            card.likes.includes(user.id) ? "mdi-heart" : "mdi-heart-outline"
          }}</v-icon>
        </v-btn>
      </div>
      <section class="mt-6" style="position: relative">
        <v-textarea v-model="text" auto-grow outlined :rows="3" />
        <v-btn
          :disabled="!text.length"
          absolute
          text
          right
          bottom
          small
          color="primary"
          class="mb-4"
          @click="comment"
          >提交</v-btn
        >
      </section>
      <div class="mx-3" v-for="(item, index) in card.comments" :key="index">
        <section class="d-flex align-center justify-space-between">
          <section class="d-flex align-center">
            <v-img
              eager
              width="30px"
              class="mr-3"
              style="flex-grow: 0"
              src="@/assets/smile.png"
            />
            <div class="text-subtitle-1">{{ item.nick }}</div>
          </section>
          <v-btn
            v-if="user.id === item.id"
            @click="remove(index)"
            color="primary"
            icon
            class="float-right"
          >
            <v-icon small>mdi-delete-outline</v-icon>
          </v-btn>
        </section>
        <p class="mt-1 text-body-2">{{ item.text }}</p>
      </div>
    </v-container>
    <v-dialog light v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>确认删除？</v-card-title>
        <v-card-actions>
          <v-btn color="error" text @click="dialog = false">取消</v-btn>
          <v-spacer />
          <v-btn color="success" text @click="confirm">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Back from "./../../components/Back.vue";

const FormatDay = (date) => {
  date = new Date(date);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${month}-${day} ${hour}:${minutes}`;
};

export default {
  name: "Detail",
  data: () => ({ card: {}, text: "", dialog: false, index: null }),
  computed: { ...mapState(["user"]) },
  components: { Back },
  created() {
    const key = this.$route.query.key;
    const detail = this.$store.state.cards[key];
    detail.upTime = FormatDay(detail.upTime);
    this.card = detail;
  },
  methods: {
    ...mapActions(["LikeAndComment", "Remove"]),
    comment() {
      this.LikeAndComment({ id: this.card._id, text: this.text });
      this.text = "";
    },
    remove(index) {
      this.dialog = true;
      this.index = index;
    },
    confirm() {
      console.log(this.index >= 0);
      this.Remove({ id: this.card._id, index: this.index });
      this.dialog = false;
      this.index = null;
    },
  },
};
</script>
