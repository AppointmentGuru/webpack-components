import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import TodoDocs from '@/components/pages/docs/TodoDocs'

Vue.use(Router)

// sections:
// Sections will create subnavigation in the nav menu
const GeneralPurpose = [
  {
    path: '/foo',
    name: 'Foo',
    component: TodoDocs
  },
  {
    path: '/bar',
    name: 'Bar',
    component: TodoDocs
  },
  {
    path: '/baz',
    name: 'Baz',
    component: TodoDocs
  }
]
const SomeOtherSection = [
  {
    path: '/bus',
    name: 'Bus',
    component: TodoDocs
  }
]

// this builds your navigation:
export const NavContents = [
  { name: 'General Purpose', contents: GeneralPurpose },
  { name: 'Other stuff', contents: SomeOtherSection }
]

let routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
].concat(GeneralPurpose).concat(SomeOtherSection)

export default new Router({
  routes: routes
})
