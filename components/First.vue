<template>
  <article id="first">
    <section class="z-10 w-full max-w-[1440px] mx-auto mt-[155px] md:mt-[230px] px-[50px] md:pl-[140px]">
      <h1 class="font-Smiley text-white max-w-[300px] text-[90px] leading-[108px] md:text-[150px] md:leading-[176px] md:max-w-[874px]">Your <br class="md:hidden"/> best charging buddy!</h1>
      <div class="flex flex-row items-center space-x-[12px] mt-[43px]">
        <span class="text-white font-Smiley text-[58px] md:text-[74px]">找</span>
        <img src="/den.svg" alt="den">
        <span class="text-white font-Smiley text-[58px] md:text-[74px]">的好夥伴</span>
      </div>
      <div class="mt-[72px]">
        <span class="text-[20px] text-[#00FFFD] font-Roboto font-black">電車出行規劃＆吃喝玩樂一次搞定</span>
        <p class="text-white mt-[14px]">解決電車車主的充電焦慮，由電電官方“實地驗證”站點，提供您充電不焦慮、優惠天天有的小確幸。</p>
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

<style lang="sass" scoped>
  #first
    @apply relative w-full bg-[#0A5BE2] h-[1024px] overflow-hidden
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    border-radius: 0px 0px 60px 60px
    
    .bg-img
      background: url("/first.png") no-repeat center center
      background-position-x:-500px
      background-size: 1365px 1024px
      border-radius: 0px 0px 60px 60px
      z-index: -1
      @apply absolute top-0 h-[1024px] w-full left-0 md:left-[374px] md:[background-position-x:calc(100%-374px)] sm:[background-position-x:-400px]
    .mask
      @apply absolute top-0 h-[1024px] w-full left-0 md:left-[374px]
      background: linear-gradient(90deg, #0A5BE2 0%, rgba(10, 91, 226, 0.00) 100%)
      border-radius: 0px 0px 60px 60px
      z-index: -1
    video
      @apply absolute top-0 h-[1024px] w-full left-0 md:left-[374px]
      object-fit: cover
      z-index: -1
</style>