<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>School App (Do not refresh, app uses mock data and the data stored in redux)</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container v-if="user">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import APIService from '../services/apiService'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Child',
    caption: 'List of children',
    icon: 'groups',
    link: '#',
    action: ''
  },
  {
    title: 'Class',
    caption: 'Manage Classes',
    icon: 'school',
    link: '#/classes'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  computed: {
    user() {
      return this.$store.getters['user/me']
    },
    children() {
      return this.$store.getters['children/list']
    },
    classes() {
      return this.$store.getters['classes/list']
    }
  },

  data() {
    return {
      leftDrawerOpen: ref(false),
      essentialLinks: linksList
    }
  },

  mounted() {
    const user = JSON.parse(localStorage.getItem('user') ? `${localStorage.getItem('user')}` : '{}')
    if (user && user.id) {
      this.$store.dispatch('user/LOGIN', user)
    } else {
      this.$router.push('login')
    }

    this.essentialLinks = [
      ...this.essentialLinks,
      {
        title: 'Logout',
        icon: 'logout',
        caption: '',
        link: '',
        action: 'LOGOUT'
      }
    ]

    if (!this.classes.length) {
      this.getClasses()
    }

    if (user && user.id && !this.children.length) {
      this.getChildren(user.id)
    }
  },

  watch: {
    user(update) {
      if (!update) {
        this.$router.push('login')
      }
    }
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },

    async getChildren(id: number) {
      const children = await APIService.getChildren(id)
      this.$store.dispatch('children/GET_CHILDREN', children)
    },

    async getClasses() {
      const classes = await APIService.getClasses()
      this.$store.dispatch('classes/GET_CLASSES', classes)
    }
  }
})
</script>
