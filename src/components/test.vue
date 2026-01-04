<template>
  <h2>{{ msg }}</h2>
  <input type="text" v-model="testValue"/>
  <input type="text" v-model="testValue2"/>
  <button v-on:click="alertMessage">나를 클릭해.</button>
  <PropsChildComponent :toChild="toChild"/>
  <div>
    <EmitChildComponent @clickChildButton="alertEmitMessage(msg)"/>
  </div>
</template>

<script>
import PropsChildComponent from './components/PropsChildComponent.vue';
import EmitChildComponent from './components/EmitChildComponent.vue';

export default {
  name: 'App',
  components: { PropsChildComponent, EmitChildComponent },  
  data() {
    return {
      msg: "안녕하세요.",
      testValue: "",
      testValue2: "testValue2",
      toChild: "toChild 부모가 주는 데이터입니다.",
    };
  },
  methods: {
    alertMessage() {
      alert("경고! 클릭했습니다.")
    },
    alertEmitMessage(msg){
      alert(msg);
    }
  },
};
</script>

<style></style>
