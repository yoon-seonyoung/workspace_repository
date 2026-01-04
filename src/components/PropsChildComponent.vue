<template>
  <div>{{ message }}</div>
  <div>{{ message }}</div>
  {{ toChild }}

</template>

<script>
export default {
    name: "PropsChildComponent",
    data(){
        return{
            message: "나는 Props자식컴포넌트 입니다."
        }
    },
    props:{
        toChild: String
    }
}
</script>

<style>

</style>