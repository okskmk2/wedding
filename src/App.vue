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
      <div>THE WEDDING OF</div>
      <section>
        <div>Lee Eunsung</div>
        <div>Son of Mr Lee Daesok & Mrs In Sook</div>
      </section>
      <div>&</div>
      <section>
        <div>Yosie Ananda P</div>
        <div>
          Daughter of Mr Priyo Purnomo &<br />
          Mrs Siti Aminah
        </div>
      </section>
    </article>
    <article class="container">
      <div>Invited you to celebrate for our Wedding</div>
      <div>08 . 04 . 2025</div>
      <div>
        Dengan penuh cinta dan syukur kami siap melangkah bersama dalam ikatan
        pernikahan
      </div>
    </article>
    <article class="container">
      <div>LOVE STORY</div>
      <video
        controls
        width="305"
        poster="./assets/video_thumbnail.png"
        src="./assets/wedding.mp4"
        type="video/mp4"
      ></video>
    </article>
    <article class="container">
      <div>‘’Our Journey Begins Here’’</div>
      <img src="./assets/middle.png" alt="" />
      <div>WAKTU ACARA</div>
      <div>15.30 - 17.00</div>
      <div>Hadirmu melengkapi kebahagiaan kami</div>
    </article>
    <article class="container">
      <div>LOKASI PERNIKAHAN</div>
      <img src="./assets/middlephoto.png" alt="" />
      <div>WILTOP HOTEL JAMBI - INDONESIA</div>
      <div>SKY CAFE & BALCONY</div>
    </article>
    <article class="container">
      <img src="./assets/middle2.png" alt="" />
      <div>WEDDING GIFT</div>
      <div>
        Kepada Bapak/Ibu/Saudara/i yang ingin berbagi kebahagiaan dengan kami,
        dapat mengirimkan hadiah pernikahan melalui rekening berikut:
      </div>
      <section>
        <div>BCA</div>
        <div>
          123456789
          <button><img src="./assets/icons/icon-copy.png" alt="" /></button>
        </div>
        <div>A. N Eunsung Lee</div>
      </section>
      <section>
        <div>BRI</div>
        <div>
          123456789
          <button><img src="./assets/icons/icon-copy.png" alt="" /></button>
        </div>
        <div>A. N Yosie Ananda Putri</div>
      </section>
    </article>
    <article class="container">
      <div>UCAPAN / HARAPAN</div>
      <div>
        <div>
          <div>Ucapan / Harapan :</div>
          <div>500</div>
        </div>
        <textarea name="" id=""></textarea>
      </div>
      <div>
        <div>Nama :</div>
        <input type="text" />
      </div>
      <div>
        <button>KIRIM</button>
      </div>
    </article>
  </div>
</template>
