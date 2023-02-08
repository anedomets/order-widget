<template>
  <div>
    <div v-for="(item, index) in this.currency" v-bind:key="index">
      <div>
        <img :src="getImageFlag(item.charCode)" height="20" width="30" v-bind:alt="item.charCode"/>
          {{getSymbol(item.charCode)}} {{item.value}}  ({{(item.value - item.previous).toFixed(2)}})</div>
      <br/>
    </div>
  </div>
</template>

<script src="./currencyCar.ts"></script>
<style src="./currencyCar.css"></style>