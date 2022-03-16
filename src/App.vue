<template>
  <n-config-provider :locale="locale" :date-locale="dateLocale">
    <n-spin size="large" style="background: #000" stroke="#fff" :show="$store.state.isLoading">
      <div class="spin-content">
        <router-view/>
      </div>
    </n-spin>
  </n-config-provider>
</template>

<script>
import { LANGUAGE_OBJ } from '@/lib/langLib'

export default {
  name: 'App',
  data () {
    return {
      language: this.$store.state.language,
      locale: {},
      dateLocale: {}
    }
  },
  created () {
    this.locale = this.language
    this.dateLocale = LANGUAGE_OBJ[this.language].date
  }
}
</script>

<style scoped>
.spin-content {
  background-color: #fff;
  height: 100vh;
}
</style>
