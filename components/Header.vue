<template>
  <header>
    <nav class="flex flex-row items-center justify-between max-w-[1440px] mx-auto">
      <a href="#"><img src="/logo.png" alt="DenDen_Logo" class="w-[87px] h-[45px] md:w-[109px] md:h-[57px]"></a>
      <ul class="flex-row items-center space-x-[80px] hidden md:flex">
        <li>
          <a class="text-[22px] text-white font-Inter" href="#whatis">{{ $t('whats.nav') }}</a>
        </li>
        <li>
          <a class="text-[22px] text-white font-Inter" href="#news">{{ $t('news.nav') }}</a>
        </li>
        <li>
          <a class="text-[22px] text-white font-Inter" href="#join">{{ $t('join.nav') }}</a>
        </li>
        <li>
          <a class="text-[22px] text-white font-Inter" href="#about">{{ $t('about.nav') }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
header
  backdrop-filter: blur(5px)
  @apply fixed left-0 w-full z-[100] top-0 px-[30px] py-[40px] md:p-[60px]
</style>
