<template>
  <div class="pb-12 px-3">
    <v-img src="@/assets/logo.png" class="mx-16" />
    <v-container fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.title">
          <v-card color="accent" flat>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" text>
                <span class="mr-1">123</span>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>

              <v-btn color="primary" text>
                <span class="mr-1">123</span>
                <v-icon>mdi-comment-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Picture",
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
  }),
};
</script>

