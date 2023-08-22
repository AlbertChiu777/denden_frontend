<template>
  <section class="pt-[177px] mt-[-177px] px-[10px] w-full max-w-[1440px] mx-auto" id="news">
    <div ref="first" class="wrapper mt-[10px] pt-[50px] pb-[25px] px-[20px] sm:p-[60px] flex flex-col items-center">
      <img class="w-[52px] h-[52px]" src="/news.svg" alt="News">
      <p class="text-center max-w-[300px] sm:max-w-none text-[36px] xxs:text-[42px] leading-[52px] xxs:leading-[60px] font-black font-Roboto mt-[44px] xxs:mt-[60px]">{{ $t('news.title') }}</p>
      <p class="text-center max-w-[270px] sm:max-w-none text-[22px] leading-[36px] xxs:text-[30px] xxs:leading-[48px] sm:leading-[42px] font-Roboto mt-[27px]">{{ $t('news.sub_title') }}</p>
      <button @click="handleClick" class="flex flex-row justify-center items-center w-full max-w-[394px] h-[108px] bg-white rounded-[90px] mt-[40px]">
        <p class="text-[20px] leading-[31px] xxs:text-[22px] xxs:leading-[36px] font-black font-Roboto mr-[8px]">{{ $t('news.cta') }}</p>
        <img class="w-[38px] h-[24px] xxs:w-[48px] xxs:h-[30px]" src="/go.svg" alt="Go">
      </button>
      <div class="bg-black/10 rounded-[12px] px-[24px] py-[8px] flex flex-row items-center mt-[20px]">
        <span class="text-[30px] leading-[36px] font-black tracking-[12px]">{{ String(interestedCount).padStart(4, '0') }}</span>
        <span class="text-[22px] leading-[42px] inline-block">{{ $t('news.interested') }}</span>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const first = ref(null)
    const countBase = 120
    const conutDiff = 1000 * 3600
    // 2023/08/22 00:00:00
    const countTimeStampBase = 1692633600000

    const interestedCount = ref(0)
    let timer: null | NodeJS.Timeout = null
    let observer: IntersectionObserver | null = null
    
    const initInterestedCount = () => {
      const timeStampDiff = new Date().getTime() - countTimeStampBase
      const countDiff = Math.floor(timeStampDiff / conutDiff)
      interestedCount.value = countBase + countDiff
    }

    const count = () => {
      interestedCount.value++
      timer = setTimeout( () => count(), 1000 * 3600 )
    }

    onBeforeMount(() => {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry && entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow')
          }
        })
      })
    })

    onMounted(() => {
      observer!.observe(first.value!)
      initInterestedCount()
      const timeStampDiff = new Date().getTime() - countTimeStampBase
      const remainder = timeStampDiff % conutDiff
      timer = setTimeout( () => count(), remainder )
    })

    onUnmounted(() => {
      observer!.disconnect()
      if (timer) {
        clearTimeout(timer)
      }
    })
    
    const handleClick = () => {
      window.open('https://forms.gle/QHyZQKJhcHbFfx3j7', '_blank')
    }
    return {
      first,
      interestedCount,
      handleClick
    }
  },
})
</script>

<style lang="sass" scoped>
#news .wrapper
  border-radius: 60px
  background: linear-gradient(135deg, #12FF7E 0%, #01FFFC 100%)
  button
    filter: drop-shadow(0px 34px 64px #00C1B5)
</style>
