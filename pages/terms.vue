<template>
  <NuxtLayout name="privacy">
    <div class="pt-[200px] pb-[48px] max-w-[900px] mx-auto px-[16px]">
      <div class="flex flex-col gap-[24px] text-[16px] leading-[28px] text-black">
        <h1>{{ $t('terms.title') }}</h1>
        <p>{{ $t('terms.phase_1') }}</p>
        <p>{{ $t('terms.phase_2') }}</p>
        <p>{{ $t('terms.phase_3') }}</p>

        <h2>{{ $t('terms.first.title') }}</h2>
        <p>{{ $t('terms.first.description') }}</p>

        <h3>{{ $t('terms.first.sub_A') }}</h3>
        <p>{{ $t('terms.first.sub_A_description') }}</p>

        <h3>{{ $t('terms.first.sub_B') }}</h3>
        <p>{{ $t('terms.first.sub_B_phase_1') }}</p>
        <p>{{ $t('terms.first.sub_B_phase_2') }}</p>
        <p>{{ $t('terms.first.sub_B_phase_3') }}</p>

        <h3>{{ $t('terms.first.sub_C') }}</h3>
        <p>{{ $t('terms.first.sub_C_description') }}</p>
        <ul>
          <li>{{ $t('terms.first.sub_C_description_phase_1') }}</li>
          <li>
            {{ $t('terms.first.sub_C_description_phase_2.start')}}
            <a target="_blank" :href="$t('terms.first.sub_C_description_phase_2.link')">{{ $t('terms.first.sub_C_description_phase_2.linkText') }}</a>
            {{ $t('terms.first.sub_C_description_phase_2.end')}}
          </li>
          <li>{{ $t('terms.first.sub_C_description_phase_3') }}</li>
          <li>{{ $t('terms.first.sub_C_description_phase_4') }}</li>
          <li>{{ $t('terms.first.sub_C_description_phase_5') }}</li>
        </ul>

        <h3>{{ $t('terms.first.sub_D') }}</h3>
        <p>{{ $t('terms.first.sub_D_description') }}</p>
        <ul>
          <li>{{ $t('terms.first.sub_D_description_phase_1') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_2') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_3') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_4') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_5') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_6') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_7') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_8') }}</li>
          <li>{{ $t('terms.first.sub_D_description_phase_9') }}</li>
        </ul>
        <p>{{ $t('terms.first.sub_D_description_2') }}</p>
        <p>{{ $t('terms.first.sub_D_description_3') }}</p>

        <h3>{{ $t('terms.first.sub_E') }}</h3>
        <p>{{ $t('terms.first.sub_E_phase_1') }}</p>
        <p>{{ $t('terms.first.sub_E_phase_2') }}</p>


        <h2>{{ $t('terms.second.title') }}</h2>
        <p>{{ $t('terms.second.description') }}</p>
        <ul>
          <li>{{ $t('terms.second.description_phase_1') }}</li>
          <li>{{ $t('terms.second.description_phase_2') }}</li>
          <li>{{ $t('terms.second.description_phase_3') }}</li>
          <li>{{ $t('terms.second.description_phase_4') }}</li>
          <li>{{ $t('terms.second.description_phase_5') }}</li>
          <li>{{ $t('terms.second.description_phase_6') }}</li>
          <li>{{ $t('terms.second.description_phase_7') }}</li>
          <li>{{ $t('terms.second.description_phase_8') }}</li>
          <li>{{ $t('terms.second.description_phase_9') }}</li>
          <li>{{ $t('terms.second.description_phase_10') }}</li>
        </ul>

        <h2>{{ $t('terms.third.title') }}</h2>
        <p>{{ $t('terms.third.description') }}</p>
        <ul>
          <li>{{ $t('terms.third.description_phase_1') }}</li>
          <li>{{ $t('terms.third.description_phase_2') }}</li>
          <li>{{ $t('terms.third.description_phase_3') }}</li>
          <li>{{ $t('terms.third.description_phase_4') }}</li>
        </ul>

        <h2>{{ $t('terms.fourth.title') }}</h2>
        <p>{{ $t('terms.fourth.description') }}</p>
        <ul>
          <li>{{ $t('terms.fourth.description_phase_1') }}</li>
          <li>{{ $t('terms.fourth.description_phase_2') }}</li>
          <li>{{ $t('terms.fourth.description_phase_3') }}</li>
          <li>{{ $t('terms.fourth.description_phase_4') }}</li>
          <li>{{ $t('terms.fourth.description_phase_5') }}</li>
          <li>{{ $t('terms.fourth.description_phase_6') }}</li>
        </ul>

        <h2>{{ $t('terms.fifth.title') }}</h2>
        <p>{{ $t('terms.fifth.phase_1') }}</p>
        <p>{{ $t('terms.fifth.phase_2') }}</p>
        <p>{{ $t('terms.fifth.phase_3') }}</p>
        <p>{{ $t('terms.fifth.phase_4') }}</p>
        
        <h2>{{ $t('terms.sixth.title') }}</h2>
        <p>{{ $t('terms.sixth.description') }}</p>

        <h2>{{ $t('terms.seventh.title') }}</h2>
        <p>{{ $t('terms.seventh.description') }}</p>

        <h2>{{ $t('terms.eighth.title') }}</h2>
        <p>{{ $t('terms.eighth.description') }}</p>

        <h2>{{ $t('terms.nineth.title') }}</h2>
        <p>{{ $t('terms.nineth.description') }}</p>

        <h2>{{ $t('terms.tenth.title') }}</h2>
        <p>{{ $t('terms.tenth.phase_1') }}</p>
        <p>{{ $t('terms.tenth.phase_2') }}</p>

        <h2>{{ $t('terms.eleventh.title') }}</h2>
        <p>{{ $t('terms.tenth.phase_1') }}</p>
        <p>{{ $t('terms.tenth.phase_2') }}</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<style lang="sass" scoped>

h2
  @apply text-[36px] leading-[54px]
h1, h3
  @apply text-[22px] font-semibold mt-[28px]
ul
  @apply list-disc pl-[24px]
  li
    @apply text-[14px]
</style>
