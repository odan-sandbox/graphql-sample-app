<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      poyo
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

import { GetUser, User } from "../../../graphql/generated/client";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  async mounted() {
    const cache = new InMemoryCache();
    const link = new HttpLink({
      uri: "http://localhost:3000/graphql"
    });

    const client = new ApolloClient({
      // Provide required constructor fields
      cache: cache,
      link: link,

      // Provide some optional constructor fields
      name: "web-client",
      version: "1.3",
      queryDeduplication: false,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network"
        }
      }
    });
    const result = await client.query<User>({ query: GetUser })
    console.log(result)
    const user = result.data
    console.log(user)
  }
});
</script>
