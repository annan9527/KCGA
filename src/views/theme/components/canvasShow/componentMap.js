const componentMap = [
 
  // PC
  new Map([
    ['NavPersonal', () => import('@/views/theme/components/canvasShow/pc/NavPersonal.vue')], // 个人中心
    ['Banner', () => import('@/views/theme/components/canvasShow/pc/Banner.vue')], // 轮播图
    ['Banner2', () => import('@/views/theme/components/canvasShow/pc/Banner2.vue')], // 轮播图
    ['News', () => import('@/views/theme/components/canvasShow/pc/News.vue')], // 要闻
    ['NewsMoudel', () => import('@/views/theme/components/canvasShow/pc/NewsMoudel.vue')], //新闻模块
    ['Img', () => import('@/views/theme/components/canvasShow/pc/Img.vue')], // 图片导航
    ['NewsFocus', () => import('@/views/theme/components/canvasShow/pc/NewsFocus.vue')], //焦点
    ['Server', () => import('@/views/theme/components/canvasShow/pc/Server.vue')], //为你服务
    ['NavInformation', () => import('@/views/theme/components/canvasShow/pc/NavInformation.vue')], //导航信息
    ['PicHighlights', () => import('@/views/theme/components/canvasShow/pc/PicHighlights.vue')], //图片要闻
    ['SNewsPiece', () => import('@/views/theme/components/canvasShow/pc/SNewsPiece.vue')], //小新闻块
    ['OpenPolicing', () => import('@/views/theme/components/canvasShow/pc/OpenPolicing.vue')], //警务公开
    ['KGNavigation', () => import('@/views/theme/components/canvasShow/pc/KGNavigation.vue')], //柯公导航
    ['NewsVoice', () => import('@/views/theme/components/canvasShow/pc/NewsVoice.vue')], //新闻声音
    ['Serves', () => import('@/views/theme/components/canvasShow/pc/Serves.vue')], //为您服务
    ['Banner3', () => import('@/views/theme/components/canvasShow/pc/Banner3.vue')], //插图1
    ['Banner4', () => import('@/views/theme/components/canvasShow/pc/Banner4.vue')], //插图2
    ['TIps', () => import('@/views/theme/components/canvasShow/pc/TIps.vue')]  //温馨提示
  ])
]

export default componentMap
