<template>
  <footer class="w-full bg-[#0A5BE2] pt-[58px] sm:pt-[74px] pb-[32px]">
    <p class="text-center text-white text-[12px] leading-[24px]">
      Copyright © 2023 DENDEN INC. <br class="sm:hidden"/>All Rights Reserved.   <br class="sm:hidden"/> <a :href="localePath('privacy-policy-of-user').toLocaleLowerCase()">隱私權政策・服務條款</a>
    </p>
  </footer>
</template>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const localePath = useLocalePath();
    return {
      localePath
    }
  },
})
</script>

<style lang="sass" scoped>

</style>
