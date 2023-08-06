<template>
  <section class="pt-[177px] mt-[-177px] w-full" id="join">
    <div class="wrapper p-[12px] mt-[10px]">
      <div class="bg-white rounded-[60px] pt-[50px] pb-[25px] px-[25px] sm:p-[60px] flex flex-col items-center max-w-[1440px] mx-auto">
        <p class="max-w-[300px] sm:max-w-none text-[42px] leading-[60px] font-black font-Roboto">{{
          $t('join.title') }}</p>
        <p class="max-w-[300px] sm:max-w-none text-[30px] leading-[48px] sm:leading-[42px] font-Roboto mt-[27px]">{{
          $t('join.sub_title') }}</p>
        <a class="mt-[42px] inline-block rounded-[80px] bg-[#00FFFD] px-[50px] py-[30px] text-[27px] font-black leading-[32px]" href="mailto:wen.c@den-den.app">wen.c@den-den.app</a>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
export default defineNuxtComponent({
})
</script>

<style lang="sass" scoped>
#join .wrapper
  border-radius: 60px 60px 0px 0px
  background: #0A5BE2
</style>
