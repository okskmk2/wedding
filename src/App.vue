<template>
  <div>
    <article style="margin-bottom: 2rem">
      <div class="top">
        <img src="./assets/lefttop.png" alt="" />
        <select v-model="$i18n.locale">
          <option value="en">English</option>
          <option value="id">Bahasa Indonesia</option>
          <option value="ko">한국어</option>
        </select>
      </div>
      <img src="./assets/main.png" style="margin-top: -4rem" />
    </article>
    <article class="container">
      <h2>{{ $t("weddingOf") }}</h2>
      <section>
        <div class="italic t-45">{{ $t("groom") }}</div>
        <div class="pre" style="color: #555">{{ $t("groomFamily") }}</div>
      </section>
      <div class="italic t-45">&</div>
      <section>
        <div class="italic t-45">{{ $t("bride") }}</div>
        <div class="pre" style="color: #555">
          {{ $t("brideFamily") }}
        </div>
      </section>
      <div class="space"></div>
      <section>
        <div>{{ $t("invited") }}</div>
        <div class="keyword">{{ $t("weddingDate") }}</div>
        <div class="pre">
          {{ $t("weddingMessage") }}
        </div>
      </section>
    </article>
    <article class="container" v-if="isOpenVideo">
      <h2>{{ $t("loveStory") }}</h2>
      <video
        controls
        width="320"
        poster="./assets/video_thumbnail.png"
        src="./assets/wedding.mp4"
        type="video/mp4"
      ></video>
    </article>
    <article class="container">
      <h2>"Our Journey Begins Here"</h2>
      <section>
        <img src="./assets/middle.png" alt="" />
        <h3>{{ $t("weddingTime") }}</h3>
        <div class="keyword">{{ $t("eventTime") }}</div>
        <div>{{ $t("eventMessage") }}</div>
      </section>
      <div class="space"></div>
      <section>
        <h3>{{ $t("weddingLocation") }}</h3>
        <img src="./assets/middlephoto.png" alt="" />
        <div class="small pre" style="margin-top: 8px">
          {{ $t("weddingLocationDetails") }}
        </div>
      </section>
    </article>

    <article class="container">
      <img src="./assets/middle2.png" alt="" />
      <h2 class="medium">{{ $t("weddingGift") }}</h2>
      <div class="pre">
        {{ $t("giftMessage") }}
      </div>
      <div class="space"></div>
      <div class="bankaccounts">
        <section class="sans-serif bank-card">
          <div class="family">{{ $t("groomFamily") }}</div>
          <span class="role" style="background-color: #99e2ff">{{
            $t("groom_self")
          }}</span>
          {{ $t("groom") }}
          <div class="bank-row">
            <span class="bank-name">토스뱅크</span>
            1001 2328 3236
            <button
              v-if="!done1"
              class="copy-btn"
              @click="copyText('100123283236', 1)"
            >
              <img src="./assets/icons/icon-copy.png" alt="" />
            </button>
            <img v-else src="./assets/icons/check.png" alt="" class="inflex" />
          </div>
        </section>
        <section class="sans-serif bank-card">
          <div class="family">{{ $t("brideFamily") }}</div>
          <span class="role" style="background-color: #ff99b9">{{
            $t("bride_self")
          }}</span>
          {{ $t("bride") }}
          <div class="bank-row">
            <span class="bank-name">BRI</span>
            62210 10338 67530
            <button
              v-if="!done4"
              class="copy-btn"
              @click="copyText('622101033867530', 4)"
            >
              <img src="./assets/icons/icon-copy.png" alt="" /></button
            ><img v-else src="./assets/icons/check.png" alt="" class="inflex" />
          </div>
        </section>
      </div>
    </article>
    <article class="container">
      <h3>{{ $t("sendWishes") }}</h3>
      <div class="square">
        <div class="edit-top">
          <div>{{ $t("wishesLabel") }}</div>
          <span
            class="material-symbols-rounded heart"
            :style="`color:rgb(${wordCount * 14},0, 0)`"
            >favorite</span
          >
        </div>
        <textarea rows="3" v-model="text"></textarea>
      </div>
      <div class="input-name-box square">
        <label for="guest_name">{{ $t("nameLabel") }}</label>
        <input id="guest_name" type="text" v-model="guestName" />
      </div>
      <button class="send-btn square" @click="addPost">
        {{ $t("sendButton") }}
      </button>
    </article>
    <article class="container" v-if="posts.length > 0">
      <h3>Posts</h3>
      <div v-for="post in posts" class="post-card">
        <div style="display: flex; justify-content: space-between">
          <div class="post-name">{{ post.name }}</div>
          <div style="font-size: 13px; color: #555">
            {{ new Date(post.timestamp.seconds * 1000).toLocaleString() }}
          </div>
        </div>
        <div class="post-text">{{ post.text }}</div>
      </div>
    </article>
    <div class="space"></div>
  </div>
</template>
<script>
import { getVisitorInfo } from "./actions";
import { addData, fetchData } from "./firestore";

export default {
  computed: {
    wordCount() {
      return this.text.split(" ").length;
    },
  },
  data() {
    return {
      text: "",
      done1: false,
      done2: false,
      done3: false,
      done4: false,
      guestName: "",
      isOpenVideo: false,
      posts: [],
    };
  },
  methods: {
    copyText(text, num) {
      window.navigator.clipboard.writeText(text).then(() => {
        this[`done${num}`] = true;
        setTimeout(() => {
          this.done1 = false;
          this.done2 = false;
          this.done3 = false;
          this.done4 = false;
        }, 5000);
      });
    },
    addPost() {
      // console.log(this.wordCount);
      if (this.text.trim() && this.guestName.trim()) {
        addData("posts", {
          text: this.text,
          name: this.guestName,
        }).then(() => {
          alert(this.$t("sendComplete"));
          this.text = "";
          this.guestName = "";
        });
      } else {
        alert(this.$t("nameContentRequired"));
      }
    },
    getPosts() {
      fetchData("posts").then((res) => {
        console.log(res);
        this.posts = res;
      });
    },
  },
  created() {
    getVisitorInfo().then((data) => {
      addData("visitors", data);
    });
    let params = new URL(document.location).searchParams;
    let q_video = params.get("video");
    let q_posts = params.get("posts");
    if (Boolean(q_posts)) {
      this.getPosts();
    }
    this.isOpenVideo = Boolean(q_video);
  },
  watch: {
    "$i18n.locale": (nv) => {
      document.documentElement.lang = nv;
    },
  },
};
</script>
