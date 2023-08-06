<template>
  <section class="pt-[177px] mt-[-177px] w-full" id="about">
    <div class="bg-[#0A5BE2] pt-[110px] px-[50px] sm:px-[140px]">
      <h4 class="text-white font-black font-Smiley text-[90px] leading-[90px]">About us</h4>
      <h5 class="text-white font-black font-Roboto text-[42px] mt-[25px]">關於我們</h5>
      <p class="text-white text-[20px] leading-[42px] font-Roboto mt-[66px]">
        {{ $t('about.phase1') }}
        <br/>
        {{ $t('about.phase2') }}
      </p>

      <div @click="handleClick" class="flex flex-col items-center mt-[140px] cursor-pointer">
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
    const handleClick = () => {
      window.open('https://www.facebook.com/aDenDenApp', '_blank')
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="sass" scoped>
.contact
  @apply w-[156px] h-[62px] flex flex-row items-center justify-center 
  background: url('/union.svg') no-repeat center center
</style>
