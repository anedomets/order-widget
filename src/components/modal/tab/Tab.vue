<template>
  <div class="tabs">
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
  </div>
</template>

<script src="./tab.ts"></script>
<style src="./tab.css"></style>