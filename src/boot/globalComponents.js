export default async ({ app, router, Vue }) => {
  Vue.component('msp-input', () => import('mspForm/MspInput.vue'))
  Vue.component('msp-btn', () => import('mspForm/MspBtn.vue'))
  Vue.component('msp-form', () => import('mspForm/MspForm.vue'))
  Vue.component('msp-select', () => import('mspForm/MspSelect.vue'))
  Vue.component('msp-radio', () => import('mspForm/MspRadio.vue'))
  Vue.component('msp-checkbox', () => import('mspForm/MspCheckbox.vue'))
}
