<template>
  <v-row>
    <v-col v-for="(card, id) in cards" :key="id" cols="12" xl="3" lg="4" md="6">
      <v-card :to="'/detail?key=' + id" :ripple="false" color="accent" flat>
        <v-img
          :src="'http://hustmaths.top/moon/upload/' + card.lists[0]"
          class="white--text align-end"
          height="180px"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>

        <v-card-actions>
          <div>{{ card.nick }}</div>
          <v-spacer />
          <v-btn color="primary" text @click.prevent="LikeAndComment({ id })">
            <span class="mr-1">{{ card.likes.length }}</span>
            <v-icon>
              {{
                card.likes.includes(user.id) ? "mdi-heart" : "mdi-heart-outline"
              }}
            </v-icon>
          </v-btn>

          <v-btn color="primary" text>
            <span class="mr-1">{{ card.comments.length }}</span>
            <v-icon>mdi-comment-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Fluid",
  props: { cards: Object },
  computed: { ...mapState(["user"]) },
  methods: { ...mapActions(["LikeAndComment"]) },
};
</script>
