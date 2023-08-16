<template>
  <section :class="`${locale === 'EN' ? 'en' : ''} pt-[177px] mt-[-177px] px-[10px] w-full max-w-[1440px] mx-auto`" id="whatis">
    <div ref="first" class="mt-[10px] flex flex-row gap-[10px] flex-wrap justify-center">
      <div class="flex flex-col justify-between w-[404px] sm:w-[546px] sm:h-[420px] pt-[36px] pb-[60px] px-[48px] sm:p-[60px] rounded-[60px] bg-white">
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-[30px]">
          <img class="w-[95px] h-[80px]" src="/time.svg" alt="Time">
          <div class="flex flex-col space-y-[12px]">
            <p class="title">{{ $t('whats.first.title') }}</p>
          </div>
        </div>
        <p class="mt-[50px] sm:mt-0 text-[20px] leading-[36px] font-Roboto">{{ $t('whats.first.content') }}</p>
      </div>
      <img class="object-cover w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" src="/image1.png" alt="">
      <!-- <video class="object-cover w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" autoplay loop muted>
        <source src="/test.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
    </div>

    <div ref="second" class="mt-[10px] flex flex-row gap-[10px] flex-wrap justify-center">
      <img class="object-cover hidden xl:block w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" src="/image2.png" alt="">
      <!-- <video class="object-cover hidden xl:block w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" autoplay loop muted>
        <source src="/test.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
      <div class="flex flex-col justify-between w-[404px] sm:w-[546px] sm:h-[420px] pt-[36px] pb-[60px] px-[48px] sm:p-[60px] rounded-[60px] bg-white">
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-[30px]">
          <img class="w-[95px] h-[80px]" src="/location.svg" alt="Bonus">
          <div class="flex flex-col space-y-[12px]">
            <p class="title">{{ $t('whats.second.title') }}</p>
          </div>
        </div>
        <p class="mt-[50px] sm:mt-[24px] text-[20px] leading-[36px] font-Roboto">{{ $t('whats.second.content') }}</p>
      </div>
      <img class="xl:hidden object-cover w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" src="/image2.png" alt="">
      <!-- <video class="object-cover xl:hidden w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" autoplay loop muted>
        <source src="/test.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
    </div>

    <div ref="third" class="mt-[10px] flex flex-row gap-[10px] flex-wrap justify-center">
      <div class="flex flex-col justify-between w-[404px] sm:w-[546px] sm:h-[420px] pt-[36px] pb-[60px] px-[48px] sm:p-[60px] rounded-[60px] bg-white">
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-[30px]">
          <img class="w-[95px] h-[80px]" src="/bonus.svg" alt="Location">
          <div class="flex flex-col space-y-[12px]">
              <p class="title sm:w-[377px]">{{ $t('whats.third.title') }}</p>
          </div>
        </div>
        <p class="mt-[50px] sm:mt-0 text-[20px] leading-[36px] font-Roboto">{{ $t('whats.third.content') }}</p>
      </div>
      <img class="object-cover w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" src="/image3.png" alt="">
      <!-- <video class="object-cover w-[404px] sm:w-[858px] h-[240px] sm:h-[420px] rounded-[60px]" autoplay loop muted>
        <source src="/test.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>

<script lang="ts">
export default defineNuxtComponent({
  setup() {
    const { locale } = useI18n()
    const first = ref(null)
    const second = ref(null)
    const third = ref(null)
    let observer: IntersectionObserver | null = null


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
      observer!.observe(second.value!)
      observer!.observe(third.value!)
    })

    onUnmounted(() => {
      observer!.disconnect()
    })
    return {
      first,
      second,
      third,
      locale
    }
  },
})
</script>

<style lang="sass" scoped>
p.title
  @apply text-[42px] font-bold font-Roboto-Flex leading-tight
.en 
  p.title
    @apply text-[36px]

</style>