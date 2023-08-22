<template>
  <section class="pt-[177px] mt-[-177px] w-full" id="join">
    <div class="wrapper p-[12px] mt-[10px]">
      <div class="bg-white rounded-[60px] pt-[50px] pb-[25px] px-[20px] sm:p-[60px] flex flex-col items-center max-w-[1440px] mx-auto">
        <p class="max-w-[300px] sm:max-w-none text-[42px] leading-[60px] font-black font-Roboto">{{
          $t('join.title') }}</p>
        <p class="max-w-[300px] sm:max-w-none text-[22px] leading-[36px] xxs:text-[30px] xxs:leading-[48px] sm:leading-[42px] font-Roboto mt-[27px]">{{
          $t('join.sub_title') }}</p>
        <a class="whitespace-nowrap mt-[42px] inline-block rounded-[80px] bg-[#00FFFD] px-[50px] py-[27px] text-[22px] leading-[28px] xxs:text-[27px] xxs:leading-[32px] font-black " href="https://www.cakeresume.com/companies/den-den-app">{{
          $t('join.cta') }}</a>
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
