<template>
  <div class="mt-32">
    <!-- ログインしてないとき -->
    <section v-if="!this.$store.state.user">
      <p class="text-4xl font-bold">ログインしてください！！！！！</p>

      <button
        @click="login()"
        type="button"
        name="button"
        class="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded py-1 px-2 mt-5"
      >
        ログインする
      </button>
    </section>

    <!-- ログインしてるとき -->
    <section v-else>
      <p class="text-4xl font-bold">ようこそ！！！</p>
      <div class="flex flex-row items-center justify-center">
        <p class="text-2xl font-bold">{{ this.$store.state.user.displayName }}さん！</p>
        <img :src="this.$store.state.user.photoURL" class="w-16 h-16 rounded-full">
      </div>

      <button
        @click="logout()"
        type="button"
        name="button"
        class="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded py-1 px-2 mt-5"
      >
        ログアウトする
      </button>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logout(){
      firebase.auth().signOut();
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("setUser", { user: user });
      // userがnullじゃなかったらログインできているということ
      if (user) {
        console.log("ログインしました");
      } else {
        console.log("ログアウトしました");
      }
    });
  }
};
</script>
