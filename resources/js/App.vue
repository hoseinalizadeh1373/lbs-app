<template>
<v-locale-provider rtl>
<Header />
</v-locale-provider>
  <router-view></router-view>
</template>

<script>

import Header from'./components/Header.vue'
export default{
    name:'App',
    components :{
      Header : Header
    }
}
</script>