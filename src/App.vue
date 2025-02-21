<template>
  <div>
    <article>
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
      <h2>THE WEDDING OF</h2>
      <section>
        <div class="italic t-45">Lee Eunsung</div>
        <div>Son of Mr Lee Daesok & Mrs In Sook</div>
      </section>
      <div class="italic t-45">&</div>
      <section>
        <div class="italic t-45">Yosie Ananda P</div>
        <div>
          Daughter of Mr Priyo Purnomo &<br />
          Mrs Siti Aminah
        </div>
      </section>
      <section>
        <div>Invited you to celebrate for our Wedding</div>
        <div class="keyword">08 . 04 . 2025</div>
        <div>
          Dengan penuh cinta dan syukur kami siap melangkah bersama dalam ikatan
          pernikahan
        </div>
      </section>
    </article>
    <article class="container">
      <h2>LOVE STORY</h2>
      <video
        controls
        width="305"
        poster="./assets/video_thumbnail.png"
        src="./assets/wedding.mp4"
        type="video/mp4"
      ></video>
    </article>
    <article class="container">
      <h2>"Our Journey Begins Here"</h2>
      <section>
        <img src="./assets/middle.png" alt="" />
        <h3>WAKTU ACARA</h3>
        <div class="keyword">15.30 - 17.00</div>
        <div>Hadirmu melengkapi kebahagiaan kami</div>
      </section>
      <div class="space"></div>
      <section>
        <h3>LOKASI PERNIKAHAN</h3>
        <img src="./assets/middlephoto.png" alt="" />
        <div class="t-12">
          WILTOP HOTEL JAMBI - INDONESIA<br />
          SKY CAFE & BALCONY
        </div>
      </section>
    </article>

    <article class="container">
      <img src="./assets/middle2.png" alt="" />
      <h2 class="medium">WEDDING GIFT</h2>
      <div>
        Kepada Bapak/Ibu/Saudara/i yang ingin berbagi kebahagiaan dengan kami,
        dapat mengirimkan hadiah pernikahan melalui rekening berikut:
      </div>
      <div class="space"></div>
      <section class="sans-serif bank-card">
        <div>BCA</div>
        <div class="t-12">
          123456789
          <button class="copy-btn">
            <img src="./assets/icons/icon-copy.png" alt="" />
          </button>
          <br />A. N Eunsung Lee
        </div>
      </section>
      <section class="sans-serif bank-card" style="margin-top: 10px">
        <div>BRI</div>
        <div class="t-12">
          123456789
          <button class="copy-btn">
            <img src="./assets/icons/icon-copy.png" alt="" />
          </button>
          <br />A. N Yosie Ananda Putri
        </div>
      </section>
    </article>
    <article class="container">
      <h3>UCAPAN / HARAPAN</h3>
      <div class="square">
        <div class="edit-top">
          <div>Ucapan / Harapan :</div>
          <div>500</div>
        </div>
        <textarea></textarea>
      </div>
      <div class="input-name-box square">
        <div>Nama :</div>
        <input type="text" />
      </div>
      <button class="send-btn square">KIRIM</button>
    </article>
    <div class="space"></div>
  </div>
</template>
