<template>
  <article id="first" :class="`${locale === 'EN' ? 'en' : ''}`">
    <section class="container">
      <h1>Your <br class="md:hidden"/> best charging buddy!</h1>
      <div class="flex flex-row items-center space-x-[12px] mt-[43px] find">
        <span class="text-white font-Smiley text-[51px]">找</span>
        <img src="/den.svg" alt="den">
        <span class="text-white font-Smiley text-[51px] whitespace-nowrap">的好夥伴</span>
      </div>
      <div class="mt-[70px] xxs:mt-[80px] md:mt-[72px]">
        <span class="inline-block w-[172px] xxs:w-auto text-[18px] xxs:text-[20px] text-[#00FFFD] font-Roboto font-black">{{ $t('first.title') }}</span>
        <p class="subtitle">{{ $t('first.sub_title') }}</p>
      </div>
    </section>
    <div class="bg-img"></div>
    <div class="mask"></div>
    <!-- <video autoplay loop muted>
    <source src="/test.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video> -->
  </article>
</template>
<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const { locale } = useI18n()
    return {
      locale
    }
  },
})
</script>

<style lang="sass" scoped>
  #first
    @apply relative w-full bg-[#0A5BE2] h-[1024px] overflow-hidden
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    border-radius: 0px 0px 60px 60px
    section.container
      @apply z-10 w-full max-w-[1440px] mx-auto mt-[135px] pl-[40px]
      @apply xxs:mt-[155px] xxs:pl-[45px]
      @apply md:mt-[230px] md:pl-[140px]
      h1
        @apply font-Smiley text-white max-w-[300px] text-[78px] leading-[95px]
        @apply xxs:text-[90px] xxs:leading-[108px]
        @apply md:text-[150px] md:leading-[176px] md:max-w-[874px]
      .find span
        @apply xxs:text-[58px]
        @apply md:text-[74px]
    
    .bg-img
      background: url("/first.png") no-repeat center center
      background-position-x:-500px
      background-size: 1365px 1024px
      border-radius: 0px 0px 60px 60px
      z-index: -1
      @apply absolute top-0 h-[1024px] w-full left-0
      @apply sm:[background-position-x:-400px]
      @apply md:left-[374px] md:[background-position-x:calc(100%-374px)]
    .mask
      @apply absolute top-0 h-[1024px] w-full left-0 md:left-[374px]
      background: linear-gradient(90deg, #0A5BE2 0%, rgba(10, 91, 226, 0.00) 100%)
      border-radius: 0px 0px 60px 60px
      z-index: -1
    video
      @apply absolute top-0 h-[1024px] w-full left-0 md:left-[374px]
      object-fit: cover
      z-index: -1
    p.subtitle
      @apply w-full max-w-[290px]  text-[18px] leading-[37px] text-white mt-[14px]
      @apply xxs:max-w-[330px] xxs:text-[20px] xxs:leading-[42px] 
      @apply md:max-w-[1160px] md:w-full

  #first.en
    @apply h-[1084px]
    @apply xxs:h-[1169px]
    @apply md:h-[1024px]
    .mask
      @apply h-[1084px]
      @apply xxs:h-[1169px]
      @apply md:h-[1024px]
    .bg-img
      background-size: 1365px 1084px
      background-position-x:-630px
      @apply h-[1084px]
      @apply xxs:[background-size:1365px,1169px] xxs:[background-position-x:-540px] xxs:h-[1169px]
      @apply md:[background-size:1365px,1024px] md:[background-position-x:calc(100%-374px)] md:h-[1024px]
</style>