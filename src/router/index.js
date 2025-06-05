import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import DeclaratifRendering from '../Pages/DeclaratifRendering.vue'
import AtributBinding from '../Pages/AtributBinding.vue'
import FormBinding from '../Pages/FormBinding.vue'
import ConditionalRendering from '../Pages/ConditionalRendering.vue'
import ListRendering from '../Pages/ListRendering.vue'
import ComputedProperty from '../Pages/ComputedProperty.vue'
import Lifecycle from '../Pages/LifecycleAndTemplateRefs.vue'
import Watchers from '../Pages/Watchers.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/declarative', component: DeclaratifRendering },
  { path: '/atribut', component: AtributBinding },
  { path: '/form', component: FormBinding },
  { path: '/conditional', component: ConditionalRendering },
  { path: '/list', component: ListRendering },
  { path: '/computed', component: ComputedProperty },
  { path: '/lifecycle', component: Lifecycle },
  { path: '/watchers', component: Watchers },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
