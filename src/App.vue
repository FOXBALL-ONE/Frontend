<template>
  <MainLayout/>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {RouterView} from "vue-router";
import MainLayout from "@/page/MainLayout.vue";

export default defineComponent({
  components: {MainLayout, RouterView}
})

</script>
