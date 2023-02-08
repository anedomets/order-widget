<template>
  <div>
    <div>
      <h2>Курсы валют ЦБ РФ на {{this.funcDate}}</h2>
      <div></div>
    </div>
    <div>
      <vue-good-table
          title="vue-good-table"
          theme="nocturnal"
          styleClass="vgt-table condensed"
          :columns="this.columns"
          :rows="this.funcCurrencies"
          :paginate="true"
          :lineNumbers="true"
          :fixed-header="true"
          @on-cell-click="onCellClick"
          :pagination-options="{
            enabled: true,
            nextLabel: 'далее',
            prevLabel: 'назад',
          }"
          :search-options="{
            enabled: true
          }"
          max-height="500px"/>
    </div>
  </div>
</template>

<script src="./currency.ts"></script>
<style src="./currency.css"></style>