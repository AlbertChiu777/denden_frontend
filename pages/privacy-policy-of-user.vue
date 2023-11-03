<template>
  <div>
    <NuxtLayout name="privacy">
      <div class="pt-[200px] pb-[48px] max-w-[900px] mx-auto px-[16px]">
        <div class="flex flex-col gap-[24px] text-[16px] leading-[28px] text-black">
          <h2>{{ $t('privacy.title') }}</h2>
          <strong class="text-[20px]">Apple Store</strong>
          <p>{{ $t('privacy.description') }}</p>
        
          <h3>{{ $t('privacy.first.title') }}</h3>
          <p>{{ $t('privacy.first.phase_1') }}</p>
        
          <h3>{{ $t('privacy.second.title') }}</h3>
          <p>{{ $t('privacy.second.phase_1') }}</p>
          <p>{{ $t('privacy.second.phase_2') }}</p>
          <ul>
            <li>{{ $t('privacy.second.phase_2_1') }}</li>
            <li>{{ $t('privacy.second.phase_2_2') }}</li>
            <li>{{ $t('privacy.second.phase_2_3') }}</li>
            <li>{{ $t('privacy.second.phase_2_4') }}</li>
            <li>{{ $t('privacy.second.phase_2_5') }}</li>
            <li>{{ $t('privacy.second.phase_2_6') }}</li>
          </ul>
        
          <p>{{ $t('privacy.second.phase_3') }}</p>
          <ul>
            <li>{{ $t('privacy.second.phase_3_1') }}</li>
            <li>{{ $t('privacy.second.phase_3_2') }}</li>
            <li>{{ $t('privacy.second.phase_3_3') }}</li>
            <li>{{ $t('privacy.second.phase_3_4') }}</li>
          </ul>
          <p>{{ $t('privacy.second.phase_4') }}</p>
        
          <h3>{{ $t('privacy.third.title') }}</h3>
          <p>{{ $t('privacy.third.phase_1') }}</p>
          <p>{{ $t('privacy.third.phase_2') }}</p>
          <ul>
            <li>{{ $t('privacy.third.phase_2_1') }}</li>
            <li>{{ $t('privacy.third.phase_2_2') }}</li>
          </ul>
          <p>{{ $t('privacy.third.phase_3') }}</p>
          <ul>
            <li>{{ $t('privacy.third.phase_3_1') }}</li>
            <li>{{ $t('privacy.third.phase_3_2') }}</li>
          </ul>
          <p>{{ $t('privacy.third.phase_4') }}</p>
        
          <h3>{{ $t('privacy.fourth.title') }}</h3>
          <p>{{ $t('privacy.fourth.phase_1') }}</p>
          <ul>
            <li>{{ $t('privacy.fourth.phase_1_1') }}</li>
            <li>{{ $t('privacy.fourth.phase_1_2') }}</li>
            <li>{{ $t('privacy.fourth.phase_1_3') }}</li>
            <li>{{ $t('privacy.fourth.phase_1_4') }}</li>
          </ul>
        
          <p>{{ $t('privacy.fourth.phase_2') }}</p>
          <ul>
            <li>{{ $t('privacy.fourth.phase_2_1') }}</li>
            <li>{{ $t('privacy.fourth.phase_2_2') }}</li>
            <li>{{ $t('privacy.fourth.phase_2_3') }}</li>
            <li>{{ $t('privacy.fourth.phase_2_4') }}</li>
            <li>{{ $t('privacy.fourth.phase_2_5') }}</li>
            <li>{{ $t('privacy.fourth.phase_2_6') }}</li>
          </ul>
        
          <h3>{{ $t('privacy.fifth.title') }}</h3>
          <p>{{ $t('privacy.fifth.phase_1') }}</p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false,
  });
</script>

<style lang="sass" scoped>
h2
  @apply text-[36px] leading-[54px]
h3
  @apply text-[22px] font-semibold mt-[28px]
ul
  @apply list-disc pl-[24px]
  li
    @apply text-[14px]
</style>
