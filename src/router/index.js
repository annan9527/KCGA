import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'el-icon-house'
      }
    }]
  },
  {
    path: '/resourse',
    component: Layout,
    name: '资源管理',
    meta: {
      title: '资源管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'pic',
        name: '图片库',
        component: () => import('@/views/resourse/pic.vue'),
        meta: {
          title: '图片库',
          icon: 'table'
        }
      },
      {
        path: 'knowledge',
        name: '知识库',
        component: () => import('@/views/resourse/knowledge.vue'),
        meta: {
          title: '法律法规库',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/content',
    component: Layout,
    name: '网站内容管理',
    meta: {
      title: '网站内容管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'information',
        name: '信息管理',
        component: () => import('@/views/content/information.vue'),
        meta: {
          title: '信息管理',
          icon: 'table'
        }
      },
     
      {
        path: 'static',
        name: '静态化',
        component: () => import('@/views/theme/index'),
        meta: {
          title: '静态化',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '/document',
    component: Layout,
    name: '办公管理',
    meta: {
      title: '办公管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'incoming',
        name: '收文管理',
        component: () => import('@/views/document/incoming'),
        meta: {
          title: '收文管理',
          icon: 'table'
        }
      },
      {
        path: 'send',
        name: '发文管理',
        component: () => import('@/views/document/send'),
        meta: {
          title: '发文管理',
          icon: 'table'
        }
      },
      {
        path: 'handle',
        name: '公文办理',
        component: () => import('@/views/document/handle'),
        meta: {
          title: '公文办理',
          icon: 'table'
        }
      },
      {
        path: 'handover',
        name: '公文交接',
        component: () => import('@/views/document/handover'),
        meta: {
          title: '公文交接',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '/assets',
    component: Layout,
    name: '资产管理',
    meta: {
      title: '资产管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'index',
        name: '固定资产',
        component: () => import('@/views/assets/index.vue'),
        meta: {
          title: '固定资产',
          icon: 'table'
        }
      },
      {
        path: 'police',
        name: '警用物资',
        component: () => import('@/views/assets/assets.vue'),
        meta: {
          title: '警用物资',
          icon: 'table'
        }
      },
       {
        path: 'supplies',
        name: '办公耗材',
        component: () => import('@/views/assets/supplies.vue'),
        meta: {
          title: '办公耗材',
          icon: 'table'
        }
      },
    ]
  },
  {
    path: '/fight',
    component: Layout,
    name: '作战管理',
    meta: {
      title: '作战管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'battle',
        name: '作战板',
        component: () => import('@/views/fight/battle'),
        meta: {
          title: '作战板',
          icon: 'table'
        }
      },
      {
        path: 'map',
        name: '辖区作战地图',
        component: () => import('@/views/fight/map'),
        meta: {
          title: '辖区作战地图',
          icon: 'table'
        }
      },
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: '系统管理',
  
    meta: {
      title: '系统管理',
      icon: 'el-icon-s-help'
    },
    children: [{
      path: 'user',
      name: '用户管理',
      component: () => import('@/views/system/user'),
      meta: {
        title: '用户管理',
        icon: 'table'
      }
    }, 
    {
      path: 'Module',
      name: '菜单管理',
      component: () => import('@/views/system/Module.vue'),
      meta: {
        title: '菜单管理',
        icon: 'table'
      }
    }, 
    {
      path: 'Role',
      name: '角色管理',
      component: () => import('@/views/system/Role.vue'),
      meta: {
        title: '角色管理',
        icon: 'table'
      }
    }, 
    {
      path: 'Variable',
      name: '系统环境变量',
      component: () => import('@/views/system/Variable.vue'),
      meta: {
        title: '系统环境变量',
        icon: 'table'
      }
    },
    {
      path: 'Permission',
      name: '权限管理',
      component: () => import('@/views/system/Permission.vue'),
      meta: {
        title: '权限管理',
        icon: 'table'
      }
    }]
  },
  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     name: '主题装修',
  //     component: () => import('@/views/theme/index'),
  //     meta: {
  //       title: '主题装修',
  //       icon: 'el-icon-brush'
  //     }
  //   }]
  // },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
