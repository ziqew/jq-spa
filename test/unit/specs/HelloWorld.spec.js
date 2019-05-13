import Vue from 'vue'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'


describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('div.hello').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
