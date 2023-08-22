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
      <div class="block md:hidden w-[24px] h-[24px] cursor-pointer" @click="handleHamburgerClick">
        <img class="w-[24px] h-[24px]" src="/hamburger.svg" alt="Nav">
      </div>
    </nav>
    <ul ref="sidebar" :class="`sidebar ${isOpen ? 'open' : ''}`">
      <li class="mb-[30px]">
        <img class="w-[26px] h-[17px] cursor-pointer" src="/go.svg" alt="Back" @click="isOpen = false">
      </li>
      <li class="py-[20px] pl-[10px]">
        <a class="text-[20px] leading-[36px] text-black font-Roboto" href="#whatis" @click="isOpen = false">{{ $t('whats.nav') }}</a>
      </li>
      <li class="py-[20px] pl-[10px]">
        <a class="text-[20px] leading-[36px] text-black font-Roboto" href="#news" @click="isOpen = false">{{ $t('news.nav') }}</a>
      </li>
      <li class="py-[20px] pl-[10px]">
        <a class="text-[20px] leading-[36px] text-black font-Roboto" href="#join" @click="isOpen = false">{{ $t('join.nav') }}</a>
      </li>
      <li class="py-[20px] pl-[10px]">
        <a class="text-[20px] leading-[36px] text-black font-Roboto" href="#about" @click="isOpen = false">{{ $t('about.nav') }}</a>
      </li>
      <li class="py-[20px] pl-[10px]">
        <a class="text-[20px] leading-[36px] text-black font-Roboto" :href="locale === 'EN' ? '/zh-hant' : '/en'" @click="isOpen = false">{{ $t('about.changeLang') }}</a>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const isOpen = useSidebarOpen()
    const sidebar = ref(null)
    const { locale } = useI18n()
    onMounted(() => {
    })

    onUnmounted(() => {
    })

    const handleHamburgerClick = () => {
      isOpen.value = !isOpen.value
    }
    return {
      sidebar,
      isOpen,
      handleHamburgerClick,
      locale
    }
  },
})
</script>

<style lang="sass" scoped>
header
  backdrop-filter: blur(5px)
  @apply fixed left-0 w-full z-[100] top-0 px-[30px] py-[40px] md:p-[60px]
  .sidebar
    width: calc( 100vw - 75px )
    transition: right 330ms ease-out
    right: -100%
    @apply block md:hidden absolute top-0 h-screen bg-white py-[42px] px-[30px]
    &.open
      right: 0
</style>
