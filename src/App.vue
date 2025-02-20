<template>
  <div>
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="id">Bahasa Indonesia</option>
      <option value="ko">한국어</option>
    </select>
    <div>{{ $t("message.hello") }}</div>
  </div>
</template>
