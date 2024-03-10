import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMain = defineStore('main', () => {
  const state = ref(0)

  const addOne = () => {
    state.value++
  }

  return {
    state,
    addOne,
  }
})
