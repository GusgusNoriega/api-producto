import { FormData as NodeFormData } from 'formdata-node'

export default defineNuxtPlugin(() => {
  if (!('FormData' in globalThis)) {
    ;(globalThis as any).FormData = NodeFormData
  }
})
