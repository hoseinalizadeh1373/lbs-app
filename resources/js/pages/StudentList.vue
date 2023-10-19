<template>
     
</template>

<script>

import axios from 'axios'
export default {

     name :'StudentList',
     setup(){
           function getStudents(){
               axios.get("/api/students")
               .then(function (response){
                    console.log(response.data);
               })
               .catch(function (error){
                    console.log(error);
               });
           }
           getStudents()
     }
}
</script>