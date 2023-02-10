<template>
<!--  <div class="tabs">
    <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
    <label for="tab-btn-1">Создание поручение</label>
    <input type="radio" name="tab-btn" id="tab-btn-2" value="">
    <label for="tab-btn-2">Просмотр поручений</label>
    <div id="content-1">
      <Form/>
    </div>
    <div id="content-2">
      У Вас нет поручений
    </div>
  </div>-->
  <div class="main-tabs">
    <div class="top-tabs">
      <input class="tab-input" id="tab1" type="radio" value="tab1" v-model="selectTab" checked>
      <label :class="['tab-label',selectTab=='tab1'?'tab-label-select':'']" for="tab1">Создание поручения</label>
      <input class="tab-input" id="tab2" type="radio" value="tab2" v-model="selectTab">
      <label :class="['tab-label',selectTab=='tab2'?'tab-label-select':'']" for="tab2">Просмотр поручений</label>
    </div>
    <div class="work-place-tabs">
      <template v-if="selectTab=='tab1'">
        <Form/>
      </template>
      <template v-if="selectTab=='tab2'">
        Tab2
      </template>
    </div>
  </div>
</template>

<script src="./tab.ts"></script>
<style src="./tab.css"></style>