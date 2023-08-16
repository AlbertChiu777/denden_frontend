<template>
  <section class="pt-[177px] mt-[-177px] w-full" id="about">
    <div class="bg-[#0A5BE2] pt-[56px] sm:pt-[110px] px-[50px] sm:px-[140px]">
      <h4 class="text-white font-black font-Smiley">About us</h4>
      <h5 v-if="locale !== 'EN'" class="text-white font-black font-Roboto text-[36px] sm:text-[42px] mt-[25px]">關於我們</h5>
      <p class="text-white text-[20px] leading-[42px] font-Roboto mt-[20px] sm:mt-[37px]">
        {{ $t('about.phase1') }}
        <br/>
        <br v-if="locale !== 'EN'"/>
        {{ $t('about.phase2') }}
      </p>

      <div @click="handleClick" class="flex flex-col items-center mt-[56px] sm:mt-[140px] cursor-pointer">
        <div class="contact"><span class="text-[20px] leading-[20px] font-extrabold text-[#0A5BE2] mb-[10px]">{{ $t('about.cta') }}</span></div>
        <img class="w-[74px] h-[74px] mt-[16px]" src="/fb.svg" alt="FB">
        <p class="text-white text-[24px] leading-[24px] font-black">電電-DenDen</p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const { locale } = useI18n()
    const handleClick = () => {
      window.open('https://www.facebook.com/aDenDenApp', '_blank')
    }
    return {
      handleClick,
      locale
    }
  }
})
</script>

<style lang="sass" scoped>
#about
  h4
    @apply text-[60px] leading-[94px]
    @apply xxs:text-[70px] xxs:leading-[108px]
    @apply sm:text-[90px] sm:leading-[90px]
.contact
  @apply w-[156px] h-[62px] flex flex-row items-center justify-center 
  background: url('/union.svg') no-repeat center center
</style>
