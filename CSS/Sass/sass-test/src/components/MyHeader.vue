<template>
  <el-menu class="el-menu-demo" :mode="toggleMode" @select="handleSelect">
    <template v-for="subData1 in menuData">
      <el-menu-item v-show="subData1.child === null" :index="subData1.path">
        {{ subData1.path }}
      </el-menu-item>

      <el-sub-menu v-show="subData1.child !== null" :index="subData1.path">
        <template #title>{{ subData1.path }}</template>

        <el-menu-item v-for="subData2 in subData1.child" :index="subData2.path">
          {{ subData2.path }}
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

type ToggleMode = "horizontal" | "vertical";

const toggleMode = ref<ToggleMode>("horizontal");

const menuData = reactive([
  {
    path: "/user",
    child: [
      {
        path: "/private",
        child: null,
      },
    ],
  },
  {
    path: "/about",
    child: [
      {
        path: "/comment",
        child: [
          {
            path: "/text",
            child: null,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    child: [
      {
        path: "/comment",
        child: [
          {
            path: "/text",
            child: null,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    child: [
      {
        path: "/comment",
        child: [
          {
            path: "/text",
            child: null,
          },
        ],
      },
    ],
  },
  {
    path: "hello",
    child: null,
  },
]);

const handleSelect = (index: string, indexPath: string[]) => {
  console.log(index, indexPath);
};
</script>

<style scoped lang="scss"></style>
