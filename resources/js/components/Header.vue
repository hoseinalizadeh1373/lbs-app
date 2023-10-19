<template>
    <v-card
      class="mx-auto"
      max-width="448"
    >
      <v-layout>
        <v-app-bar
          color="primary"
          density="compact"
        >
          <template v-slot:prepend>
            
            <Icon class="mr-4" icon="solar:widget-add-bold" />
            <v-app-bar-title>مدیریت</v-app-bar-title>
            <v-btn  variant="plain" class="mr-2" to="/">
               صفحه اصلی
            </v-btn>
            <v-btn  variant="plain" class="mr-2" to="/studentlist">
               لیست دانش آموزان
            </v-btn>
            
            <v-btn variant="plain" class="mr-2">
            جدید
            </v-btn>
          </template>
  
        
         
        
          <!-- <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template> -->
        </v-app-bar>
  
        <v-main>
      
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
    }

}
</script>
