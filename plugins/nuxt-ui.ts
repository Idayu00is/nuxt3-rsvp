export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.provide('ui', {
      input: {
        variant: {
          none: {
            base: 'bg-transparent border-b border-yellow-400',
            input: 'text-white placeholder-yellow-300 bg-transparent',
            wrapper: 'bg-transparent'
          }
        }
      },
      textarea: {
        variant: {
          none: {
            base: 'border border-yellow-400 p-2 bg-transparent',
            textarea: 'text-white placeholder-yellow-300 bg-transparent',
            wrapper: 'bg-transparent'
          }
        }
      }
    })
  })
  