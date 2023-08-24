<template>
  <div>
    <h1>Starup</h1>

    <p>{{ counter }}</p>
    <p>{{ doubleCounter }}</p>

    <p ref="desc"></p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, reactive, toRefs, watch } from 'vue'

const { counter, doubleCounter } = useCounter()
const desc = ref(null)

watch(counter, (val, oldVal) => {
  const p = desc.value

  p.textContent = `change counter from ${oldVal} to ${val}`
})

function useCounter() {
  const data = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2),
  })

  let timer
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  return toRefs(data)
}
</script>

<style scoped></style>
