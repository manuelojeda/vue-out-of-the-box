<template>
  <div id="app">
    <input type="text" v-model="form.bar">
    <button @click="handleForm">Click me</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import FooClass from './classes/FooClass'

export default defineComponent({
  name: 'App',
  setup () {
    const form = ref({})
    const service = new FooClass()

    const handleForm = () => {
      service.handleForm()
    }

    onMounted(() => {
      form.value = service.getter()
    })

    return {
      form,
      handleForm
    }
  }
});
</script>
