<template>
  <div class="container">
    <h1>Добавить карточку</h1>

    <p>
      <label for="name">Наименование карточки: </label>
      <input type="text" name="name" id="name">
    </p>
    <p>
      <input type="submit" value="Создать" @click="insertInst"/>
      <input type="submit" onclick="javascript:history.back(); return false;" value="Отменить">
    </p>

  </div>
</template>
