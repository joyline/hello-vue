<template>
  <div id="shop">
    <router-link to="/" v-on:click="reset()">Back</router-link>
    <p>I wanna Buy these items</p>

    <span>{{store.state.items[0].text}}</span>
    <br>
    <button class="btn btn-primary" v-on:click="increment(1)">+</button>
    <input type="number" name="" id="number-one" style="border: 1px solid black;" :value="store.state.items[0].count">
    <button class="btn btn-primary" v-on:click="decrement(1)">-</button>

    <br>
    <span>{{store.state.items[1].text}}</span>
    <br>
    <button class="btn btn-primary" v-on:click="increment(2)">+</button>
    <input type="number" name="" id="number-one" style="border: 1px solid black;" :value="store.state.items[1].count">
    <button class="btn btn-primary" v-on:click="decrement(2)">-</button>

    <br>
    <span>{{store.state.items[2].text}}</span>
    <br>
    <button class="btn btn-primary" v-on:click="increment(3)">+</button>
    <input type="number" name="" id="number-one" style="border: 1px solid black;" :value="store.state.items[2].count">
    <button class="btn btn-primary" v-on:click="decrement(3)">-</button>
    <br>
    <br>
    <button class="btn btn-secondary" type="submit" @click="showResult">Purchase</button>
    <div id="result" :style="{ display }">
      You have purchased for these items <br>
      {{store.state.items[0].text}} : {{store.state.items[0].count}}
      <br>
      {{store.state.items[1].text}} : {{store.state.items[1].count}}
      <br>
      {{store.state.items[2].text}} : {{store.state.items[2].count}}
      <br>
      Total : ${{total}} 
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
let total = 0
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    items: [
      { id: 1, text: 'Lamborghini', count: 0, price: 100000 },
      { id: 2, text: 'Ferrari', count: 0, price: 100000 },
      { id: 3, text: 'Ducati', count: 0, price: 50000 },
    ]
  },
  mutations: {
    increment(state, index) {
      state.items[index].count++
    },
    decrement(state, index) {
      state.items[index].count--
    },
    resetState(state, index1, index2, index3) {
      state.items[index1].count = 0
      state.items[index2].count = 0
      state.items[index3].count = 0
    }
  }
})

export default {
  name: 'shop',
  components: {
  },
  methods: {
    increment(id) {
      if(id == 1) {
        store.commit('increment', 0)
      }
      else if(id == 2) {
        store.commit('increment', 1)
      }
      else if(id == 3) {
        store.commit('increment', 2)
      }
      let a = store.state.items[0].count * store.state.items[0].price
      let b = store.state.items[1].count * store.state.items[1].price
      let c =store.state.items[2].count * store.state.items[2].price
      this.total = a + b + c
    },
    decrement(id) {
      if(id == 1 && store.state.items[0].count > 0) {
        this.value1--;
        store.commit('decrement', 0)
      }
      else if(id == 2 && store.state.items[1].count > 0) {
        store.commit('decrement', 1)
      }
      else if(id == 3 && store.state.items[2].count > 0) {
        store.commit('decrement', 2)
      }
      let a = store.state.items[0].count * store.state.items[0].price
      let b = store.state.items[1].count * store.state.items[1].price
      let c =store.state.items[2].count * store.state.items[2].price
      this.total = a + b + c
    },
    showResult() {
      this.display = "block"
      let a = store.state.items[0].count * store.state.items[0].price
      let b = store.state.items[1].count * store.state.items[1].price
      let c =store.state.items[2].count * store.state.items[2].price
      this.total = a + b + c
    },
    reset() {
      store.commit('resetState', 0, 1, 2)
    }
  },
  data() {
    return {
      display: 'none',
      store,
      total,
    }
  }
}
</script>

<style>

</style>
