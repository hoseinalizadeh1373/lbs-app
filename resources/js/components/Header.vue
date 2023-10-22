<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="primary" >
        <v-app-bar-nav-icon variant="text" class="d-flex d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- <v-toolbar-title>My files</v-toolbar-title> -->
        <Icon class="mr-4" icon="solar:widget-add-bold" />
        <v-btn   class="mr-2" >
               manage
            </v-btn>
        <v-layout :class="visible">
            <!-- <v-app-bar-title >مدیریت</v-app-bar-title> -->
           
            <v-btn  variant="plain" class="mr-2" to="/">
               صفحه اصلی
            </v-btn>
            <v-btn  variant="plain" class="mr-2" to="/studentlist">
               لیست دانش آموزان
            </v-btn>
            
            <v-btn variant="plain" class="mr-2">
            جدید
            </v-btn>
            <v-btn variant="plain" class="mr-2">
            ویرایش
            </v-btn>
            <v-btn variant="plain" class="mr-2">
              حذف
            </v-btn>
          </v-layout>
        <v-spacer></v-spacer>

      
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="right" temporary>
       
        <v-list-item v-for="(item, index) in items" :key="index" :to="links[index]">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-navigation-drawer>

      <v-main style="height: 50px;">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>


import { Icon } from '@iconify/vue';
export default {
  name: 'Header',
  components: {
    Icon
  },
  data() {
    return {
      drawer: false,
      visible: "hidden-sm-and-down",
      items: [
        'صفحه اصلی', 'لیست دانش آموزان', 'جدید', 'حذف', 'ویرایش',
      ],
      links: [
        '/', 'studentlist', ''
      ],
    }
  }

}
</script>
