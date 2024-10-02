<template>
  <el-config-provider :locale="localeSetting">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import en from 'element-plus/es/locale/lang/en'

const { locale } = useI18n()

const localeSetting = computed(() => {
  return locale.value === 'zhTw' ? zhTw : en
})
</script>
