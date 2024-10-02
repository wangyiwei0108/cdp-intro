<template>
  <div class="flex">
    <!-- 左半邊 -->
    <div class="h-[100vh] w-[1032px] bg-neutral-100">
      <el-scrollbar view-class="p-4">
        <el-button-group size="large" class="mb-4">
          <el-button type="primary" @click="handleBeginTour"
            ><el-icon><Reading /></el-icon
            ><span class="font-normal">{{ t('intro.btnAll') }}</span></el-button
          >
          <el-button type="primary" @click="drawer = true" plain
            ><el-icon><Aim /></el-icon
            ><span class="font-normal">{{ t('intro.btnSpecified') }}</span></el-button
          >
        </el-button-group>
        <div class="flex flex-col gap-12 text-end">
          <div>
            <div class="relative w-[1000px]">
              <img
                style="
                  box-shadow:
                    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                "
                class="w-[1000px] rounded-lg"
                src="../assets/image/home.png"
              />
              <p class="mt-2 text-xs text-neutral-600">{{ t('pic.pic1') }}</p>
              <el-button
                ref="ref1"
                style="height: 45px"
                :style="
                  current === 0 && open
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                class="pointer-events-none absolute left-[2px] top-[447px] h-16 w-[170px]"
              ></el-button>
            </div>
          </div>
          <div>
            <div class="relative w-[1000px]">
              <img class="w-[1000px] rounded-lg" src="../assets/image/adList.png" />
              <p class="mt-2 text-xs text-neutral-600">{{ t('pic.pic2') }}</p>
              <el-button
                ref="ref2"
                style="height: 384px"
                :style="
                  current === 1
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                class="apointer-events-none absolute left-[183px] top-[92px] w-[808px]"
              ></el-button>
              <el-button
                ref="ref3"
                style="height: 37px"
                :style="
                  current === 2
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                class="pointer-events-none absolute right-[25px] top-[109px] w-[71px]"
              ></el-button>
            </div>
          </div>
          <div>
            <div class="relative w-[1000px]">
              <img class="w-[1000px] rounded-lg" src="../assets/image/beforeCareate.png" />
              <p class="mt-2 text-xs text-neutral-600">{{ t('pic.pic31') }}</p>
              <el-button
                ref="ref4"
                :style="
                  current === 3
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 527px"
                class="pointer-events-none absolute left-[195px] top-[100px] w-[795px] p-0"
              ></el-button>
            </div>
          </div>
          <div>
            <div class="relative w-[1000px]">
              <img class="w-[1000px] rounded-lg" src="../assets/image/createAd.png" />
              <p class="mt-2 text-xs text-neutral-600">{{ t('pic.pic32') }}</p>
              <el-button
                ref="ref5"
                :style="
                  current === 4
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 76px"
                class="pointer-events-none absolute left-[32px] top-[83px] w-[936px] p-0"
              ></el-button>
              <el-button
                ref="ref6"
                :style="
                  current === 5
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 51px"
                class="pointer-events-none absolute left-[40px] top-[236px] w-[899px] p-0"
              ></el-button>
              <el-button
                ref="ref7"
                :style="
                  current === 6
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 765px"
                class="pointer-events-none absolute left-[40px] top-[289px] w-[413px] p-0"
              ></el-button>
              <el-button
                ref="ref8"
                :style="
                  current === 7
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 616px"
                class="pointer-events-none absolute right-[71px] top-[308px] w-[466px] p-0"
              ></el-button>
              <el-button
                ref="ref9"
                :style="
                  current === 8
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 303px"
                class="pointer-events-none absolute left-[40px] top-[1069px] w-[896px] p-0"
              ></el-button>
              <el-button
                ref="ref10"
                :style="
                  current === 9
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 163px"
                class="pointer-events-none absolute left-[40px] top-[1484px] w-[896px] p-0"
              ></el-button>
              <el-button
                ref="ref11"
                :style="
                  current === 10
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 160px"
                class="pointer-events-none absolute left-[40px] top-[1652px] w-[896px] p-0"
              ></el-button>
            </div>
          </div>
          <div>
            <div class="relative w-[1000px]">
              <img class="w-[1000px] rounded-lg" src="../assets/image/afterCreate.png" />
              <p class="mt-2 text-xs text-neutral-600">{{ t('pic.pic33') }}</p>
              <el-button
                ref="ref12"
                :style="
                  current === 11
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 44px"
                class="pointer-events-none absolute bottom-[33px] left-[571px] w-[65px] p-0"
              ></el-button>
              <el-button
                ref="ref16"
                :style="
                  current === 15
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 42px"
                class="pointer-events-none absolute bottom-[34px] left-[621px] w-[64px] p-0"
              ></el-button>
            </div>
          </div>
          <div>
            <div class="relative w-[1000px]">
              <img class="w-[1000px] rounded-lg" src="../assets/image/adPreview2.png" />
              <p class="mt-2 text-xs text-neutral-600">{{ t('pic.pic4') }}</p>
              <el-button
                ref="ref13"
                :style="
                  current === 12
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 41px"
                class="pointer-events-none absolute left-[9px] top-[55px] w-[134px] p-0"
              ></el-button>
              <el-button
                ref="ref14"
                :style="
                  current === 13
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 41px"
                class="pointer-events-none absolute left-[423px] top-[110px] w-[130px] p-0"
              ></el-button>
              <el-button
                ref="ref15"
                :style="
                  current === 14
                    ? 'border: 2px dashed gray; background-color: rgba(0, 0, 0, 0.06)'
                    : 'border: none; background-color: transparent'
                "
                style="height: 194px"
                class="pointer-events-none absolute bottom-[56px] right-[123px] w-[230px] p-0"
              ></el-button>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <!-- 右半邊 - 介紹 -->
    <div v-show="!drawer" class="flex w-full bg-neutral-200">
      <el-scrollbar>
        <div class="h-[100vh]">
          <div class="flex flex-col space-y-4 p-[1vw]">
            <div class="flex justify-end">
              <el-select size="large" v-model="locale" placeholder="Select" style="width: 135px">
                <template #label="{ label }">
                  <div class="flex items-center space-x-2">
                    <font-awesome-icon
                      class="text-[16px]"
                      icon="fa-solid fa-earth-americas"
                    ></font-awesome-icon>
                    <span>{{ label }}</span>
                  </div>
                </template>
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="flex flex-col justify-between rounded-lg bg-white p-4">
              <div class="">
                <div
                  class="mb-3 flex"
                  :class="
                    locale === 'en'
                      ? 'flex-col 2xl:flex-row 2xl:items-center 2xl:space-x-1'
                      : 'flex-row items-center space-x-1'
                  "
                >
                  <img class="w-[8vw]" src="../assets/image/accucdp.png" alt="" />
                  <p
                    class="font-medium text-neutral-700"
                    :class="locale === 'en' ? 'text-xl 2xl:text-2xl' : 'text-2xl'"
                  >
                    {{ t('intro.title') }}
                  </p>
                </div>
                <div class="flex flex-col space-y-7">
                  <div class="mb-4">
                    <p class="hyphens-auto text-base text-neutral-500">
                      {{ t('intro.cdpIntro') }}
                    </p>
                  </div>
                  <div>
                    <p class="text-lg font-medium text-neutral-700">
                      {{ t('intro.popUpAddTitle') }}
                    </p>
                    <p class="hyphens-auto text-neutral-500">
                      {{ t('intro.popUpAddIntro') }}
                    </p>
                  </div>
                  <div>
                    <p class="text-lg font-medium text-neutral-700">
                      {{ t('intro.implementationTitle') }}
                    </p>
                    <p class="hyphens-auto text-neutral-500">
                      {{ t('intro.implementationIntro1')
                      }}<el-tag size="small" round type="info">Vue3</el-tag
                      >{{ t('intro.implementationIntro2')
                      }}<el-tag size="small" round type="info">Element Plus</el-tag
                      >{{ t('intro.implementationIntro3')
                      }}<el-tag size="small" round type="info">Tailwind</el-tag
                      >{{ t('intro.implementationIntro4')
                      }}<el-tag size="small" round type="info">TypeScript</el-tag
                      >{{ t('intro.implementationIntro5')
                      }}<el-tag size="small" round type="info">SCSS</el-tag>
                      {{ t('intro.implementationIntro6') }}
                      <el-tag size="small" round type="info">vue-i18n</el-tag>
                      {{ t('intro.implementationIntro7') }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-8 flex w-full flex-col gap-2 2xl:flex-row 2xl:gap-4">
                <div class="w-full">
                  <el-button class="w-full" size="large" type="primary" @click="handleBeginTour"
                    ><el-icon><Reading /></el-icon
                    ><span class="ml-2 font-normal">{{ t('intro.btnAll') }}</span></el-button
                  >
                </div>
                <div class="w-full">
                  <el-button class="w-full" @click="drawer = true" size="large" type="primary" plain
                    ><el-icon><Aim /></el-icon
                    ><span class="ml-2 font-normal">{{ t('intro.btnSpecified') }}</span></el-button
                  >
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-2 text-neutral-600">
              <span class="text-xs">{{ t('footer.text') }}</span>
              <font-awesome-icon class="text-[15px]" icon="fa-regular fa-face-smile" />
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <!-- 右半邊 - 指定導覽 -->
    <div v-show="drawer" class="w-full bg-neutral-200">
      <el-scrollbar>
        <div class="h-[100vh]">
          <div class="p-[1vw]">
            <div class="mb-4 h-10">
              <div class="flex h-full cursor-pointer items-center" @click="handleCloseDrawer">
                <el-icon><Back /></el-icon><span class="ml-2">{{ t('steps.backBtn') }}</span>
              </div>
            </div>
            <div class="rounded-lg bg-white p-4">
              <div class="mb-8">
                <p class="text-lg font-medium text-neutral-700">{{ t('intro.btnSpecified') }}</p>
                <p class="text-base text-neutral-500">{{ t('steps.text') }}</p>
              </div>
              <el-timeline class="px-5">
                <el-timeline-item
                  size="large"
                  hide-timestamp
                  v-for="step in stepsData"
                  :key="step.current"
                  :color="current === step.current ? '#409eff' : ''"
                >
                  <span class="cursor-pointer" @click="handleGoToN(step.current)"
                    >{{ step.current + 1 }}. {{ step.title }}</span
                  >
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
  <el-tour @change="handleStepChange" :mask="false" v-model="open" v-model:current="current">
    <el-tour-step
      v-for="step in stepsData"
      :key="step.current"
      :placement="step.placement"
      :target="step.ref"
      :title="`${step.current + 1}. ${step.title}`"
      :content-style="{ width: 'auto', maxWidth: '450px' }"
      :next-button-props="{
        children: stepsData.length === current + 1 ? t('steps.finish') : t('steps.next')
      }"
      :prev-button-props="{ children: t('steps.prev') }"
    >
      <div>{{ step.description }}</div>
    </el-tour-step>
  </el-tour>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ButtonInstance } from 'element-plus'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const options = computed(() => {
  return [
    {
      value: 'zhTw',
      label: t('lang.zhTw')
    },
    {
      value: 'en',
      label: t('lang.en')
    }
  ]
})

const { t } = useI18n({ useScope: 'global' })

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const open = ref(false)
const current = ref(0)
const drawer = ref(false)

const handleStepChange = (current: number) => {
  console.log('current: ', current)
}

const handleBeginTour = () => {
  open.value = true
  current.value = 0
}

const handleGoToN = (cur: number) => {
  open.value = true
  current.value = cur
}

const handleCloseDrawer = () => {
  drawer.value = false
  open.value = false
  current.value = 0
}

const ref1 = ref<ButtonInstance>()
const ref2 = ref<ButtonInstance>()
const ref3 = ref<ButtonInstance>()
const ref4 = ref<ButtonInstance>()
const ref5 = ref<ButtonInstance>()
const ref6 = ref<ButtonInstance>()
const ref7 = ref<ButtonInstance>()
const ref8 = ref<ButtonInstance>()
const ref9 = ref<ButtonInstance>()
const ref10 = ref<ButtonInstance>()
const ref11 = ref<ButtonInstance>()
const ref12 = ref<ButtonInstance>()
const ref13 = ref<ButtonInstance>()
const ref14 = ref<ButtonInstance>()
const ref15 = ref<ButtonInstance>()
const ref16 = ref<ButtonInstance>()

const stepsData = computed(() => {
  return [
    {
      current: 0,
      placement: 'right',
      title: t('steps.stepsList.step0.title'),
      ref: ref1.value?.$el,
      description: t('steps.stepsList.step0.description')
    },
    {
      current: 1,
      placement: 'top',
      title: t('steps.stepsList.step1.title'),
      ref: ref2.value?.$el,
      description: t('steps.stepsList.step1.description')
    },
    {
      current: 2,
      placement: 'left',
      title: t('steps.stepsList.step2.title'),
      ref: ref3.value?.$el,
      description: t('steps.stepsList.step2.description')
    },
    {
      current: 3,
      placement: 'top',
      title: t('steps.stepsList.step3.title'),
      ref: ref4.value?.$el,
      description: t('steps.stepsList.step3.description')
    },
    {
      current: 4,
      placement: 'bottom',
      title: t('steps.stepsList.step4.title'),
      ref: ref5.value?.$el,
      description: t('steps.stepsList.step4.description')
    },
    {
      current: 5,
      placement: 'bottom',
      title: t('steps.stepsList.step5.title'),
      ref: ref6.value?.$el,
      description: t('steps.stepsList.step5.description')
    },
    {
      current: 6,
      placement: 'right',
      title: t('steps.stepsList.step6.title'),
      ref: ref7.value?.$el,
      description: t('steps.stepsList.step6.description')
    },
    {
      current: 7,
      placement: 'bottom',
      title: t('steps.stepsList.step7.title'),
      ref: ref8.value?.$el,
      description: t('steps.stepsList.step7.description')
    },
    {
      current: 8,
      placement: 'bottom',
      title: t('steps.stepsList.step8.title'),
      ref: ref9.value?.$el,
      description: t('steps.stepsList.step8.description')
    },
    {
      current: 9,
      placement: 'bottom',
      title: t('steps.stepsList.step9.title'),
      ref: ref10.value?.$el,
      description: t('steps.stepsList.step9.description')
    },
    {
      current: 10,
      placement: 'bottom',
      title: t('steps.stepsList.step10.title'),
      ref: ref11.value?.$el,
      description: t('steps.stepsList.step10.description')
    },
    {
      current: 11,
      placement: 'bottom',
      title: t('steps.stepsList.step11.title'),
      ref: ref12.value?.$el,
      description: t('steps.stepsList.step11.description')
    },
    {
      current: 12,
      placement: 'right',
      title: t('steps.stepsList.step12.title'),
      ref: ref13.value?.$el,
      description: t('steps.stepsList.step12.description')
    },
    {
      current: 13,
      placement: 'top',
      title: t('steps.stepsList.step13.title'),
      ref: ref14.value?.$el,
      description: t('steps.stepsList.step13.description')
    },
    {
      current: 14,
      placement: 'left',
      title: t('steps.stepsList.step14.title'),
      ref: ref15.value?.$el,
      description: t('steps.stepsList.step14.description')
    },
    {
      current: 15,
      placement: 'bottom',
      title: t('steps.stepsList.step15.title'),
      ref: ref16.value?.$el,
      description: t('steps.stepsList.step15.description')
    }
  ]
})
</script>

<style>
.el-tour__arrow,
.el-tour__content {
  /* background-color: pink !important; */
}
.el-tour__content {
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
