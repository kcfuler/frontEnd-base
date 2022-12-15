<template>
  <div :class="testContainer">
    <slot></slot>
  </div>

  <button @click="boxState = 'large'">large</button>
  <button @click="boxState = 'medium'">medium</button>
  <button @click="boxState = 'small'">small</button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

type BoxState = "large" | "medium" | "small";
type BoxContainerStyle =
  | "testBox--large"
  | "testBox--medium"
  | "testBox--small";

const boxState = ref<BoxState>("large");

const testContainer = computed<BoxContainerStyle>(() => {
  switch (boxState.value) {
    case "large":
      return "testBox--large";
    case "medium":
      return "testBox--medium";
    case "small":
      return "testBox--small";
  }
});
</script>

<style scoped lang="scss">
%box {
  background-color: pink;
}

.testBox--large {
  @extend %box;
  width: 500px;
  height: 500px;
}

.testBox--medium {
  @extend %box;
  width: 300px;
  height: 300px;
}

.testBox--small {
  @extend %box;
  width: 100px;
  height: 100px;
}
</style>
