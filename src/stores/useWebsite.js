import { defineStore } from 'pinia'
import { ref } from 'vue'

export const  useWebsite = defineStore('website', () => {
  const counter = ref(0)

  const update = () => {
    counter.value++
  }


  return {
    counter,
    update,
  }
})
