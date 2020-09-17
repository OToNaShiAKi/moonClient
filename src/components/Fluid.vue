<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="card in cards" :key="card.title">
        <v-card color="accent" flat>
          <v-img
            :src="card.lists[0]"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="180px"
          >
            <v-card-title>{{ $store.state.user.nick }}</v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text>
              <span class="mr-1">{{card.likes}}</span>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>

            <v-btn color="primary" text>
              <span class="mr-1">{{card.comments}}</span>
              <v-icon>mdi-comment-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Fluid",
  props: {
    cards: Array,
  },
};
</script>
