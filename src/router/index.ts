import { createRouter, createWebHashHistory } from 'vue-router'

const BasicChildren = [
  {
    path: 'first-scene',
    component: () => import('../components/basic/FirstScene.vue')
  },
  {
    path: 'transform',
    component: () => import('../components/basic/Transform.vue')
  },
  {
    path: 'animation',
    component: () => import('../components/basic/Animation.vue')
  },
  {
    path: 'camera',
    component: () => import('../components/basic/Camera.vue')
  },
  {
    path: 'fullscreen',
    component: () => import('../components/basic/Fullscreen.vue')
  },
  {
    path: 'geometry',
    component: () => import('../components/basic/Geometry.vue')
  },
  {
    path: 'textures',
    component: () => import('../components/basic/Textures.vue')
  },
  {
    path: 'materials',
    component: () => import('../components/basic/Materials.vue')
  },
  {
    path: 'threeD-text',
    component: () => import('../components/basic/ThreeDText.vue')
  },
  {
    path: 'lights',
    component: () => import('../components/basic/Lights.vue')
  },
  {
    path: 'shadow',
    component: () => import('../components/basic/Shadow.vue')
  },
  {
    path: 'particles',
    component: () => import('../components/basic/Particles.vue')
  }
]

const ProjectChildren = [
  {
    path: 'house',
    component: () => import('../components/projects/House.vue')
  }
]

const routes = [
  {
    path: '/',
    component: () => import('../pages/Index.vue'),
    redirect: '/basic',
    children: [
      {
        path: 'basic',
        redirect: '/basic/particles',
        children: BasicChildren
      },
      {
        path: 'projects',
        redirect: '/projects/house',
        children: ProjectChildren
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
