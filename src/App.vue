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
        <div class="pre">{{ $t("groomFamily") }}</div>
      </section>
      <div class="italic t-45">&</div>
      <section>
        <div class="italic t-45">{{ $t("bride") }}</div>
        <div class="pre">
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
    <article class="container">
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
      <section class="sans-serif bank-card">
        <div>토스뱅크</div>
        <div class="small">
          <div class="rowaic">
            100123283236
            <button
              v-if="!done1"
              class="copy-btn"
              @click="copyText('100123283236', 1)"
            >
              <img src="./assets/icons/icon-copy.png" alt="" />
            </button>
            <img v-else src="./assets/icons/check.png" alt="" class="inflex" />
          </div>
          이은성
        </div>
      </section>
      <section class="sans-serif bank-card" style="margin-top: 10px">
        <div>BRI</div>
        <div class="small">
          <div class="rowaic">
            622101033867530
            <button
              v-if="!done2"
              class="copy-btn"
              @click="copyText('622101033867530', 2)"
            >
              <img src="./assets/icons/icon-copy.png" alt="" /></button
            ><img v-else src="./assets/icons/check.png" alt="" class="inflex" />
          </div>
          A. N Yosie Ananda Putri
        </div>
      </section>
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
        <div>{{ $t("nameLabel") }}</div>
        <input type="text" />
      </div>
      <button class="send-btn square">{{ $t("sendButton") }}</button>
    </article>
    <div class="space"></div>
  </div>
</template>
<script>
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
    };
  },
  methods: {
    copyText(text, num) {
      window.navigator.clipboard.writeText(text).then(() => {
        this[`done${num}`] = true;
        setTimeout(() => {
          this.done1 = false;
          this.done2 = false;
        }, 5000);
      });
    },
  },
  watch: {
    "$i18n.locale": (nv) => {
      document.documentElement.lang = nv;
    },
  },
};
</script>
