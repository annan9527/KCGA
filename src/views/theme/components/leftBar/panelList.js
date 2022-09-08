// 导入api接口模块
import imageSrc from '@/views/../assets/canvasImg/index'
export const panelList = [
  // PC
  [{
      title: '导航',
      type: 1,
      classList: [
        // 个人中心导航
        {
          title: '头部导航',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'NavPersonal',
          componentContent: {
            txtRoute: [{
                'title': '市局首页',
                'des': '市局首页', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '市局首页',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
              {
                'title': '治安管控',
                'des': '治安管控',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '治安管控',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '刑侦作战',
                'des': '刑侦作战',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '刑侦作战',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '通讯录',
                'des': '通讯录',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '通讯录',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '省厅邮箱',
                'des': '省厅邮箱',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '省厅邮箱',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '惠警热线',
                'des': '惠警热线',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '惠警热线',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '业务在线',
                'des': '业务在线',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '业务在线',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '后台管理',
                'des': '后台管理',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '后台管理',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '局长邮箱',
                'des': '局长邮箱',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '局长邮箱',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '旧版门户',
                'des': '旧版门户',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '旧版门户',
                  'editorDes': '' // 编辑内容
                }]
              }
            ],
            cartNum: 10
          }
        },
        // 个人中心导航
        {
          title: '导航信息',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'NavInformation',
          componentContent: {
            txtRoute: [{
                'title': '市局首页',
                'des': '市局首页', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '市局首页',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
              {
                'title': '治安管控',
                'des': '治安管控',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '治安管控',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '刑侦作战',
                'des': '刑侦作战',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '刑侦作战',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '通讯录',
                'des': '通讯录',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '通讯录',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '省厅邮箱',
                'des': '省厅邮箱',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '省厅邮箱',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '惠警热线',
                'des': '惠警热线',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '惠警热线',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '业务在线',
                'des': '业务在线',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '业务在线',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '后台管理',
                'des': '后台管理',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '后台管理',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '局长邮箱',
                'des': '局长邮箱',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '局长邮箱',
                  'editorDes': '' // 编辑内容
                }]
              },
              {
                'title': '旧版门户',
                'des': '旧版门户',
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '旧版门户',
                  'editorDes': '' // 编辑内容
                }]
              },
            ],
            words: [{
                'title': '今日值班',
                'des': '今日值班：', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '今日值班：',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
              {
                'title': '局领导：程科、杜尚龙',
                'des': '局领导：程科、杜尚龙', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '今局领导：程科、杜尚龙',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
              {
                'title': '大堂：叶健明',
                'des': '大堂：叶健明', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '大堂：叶健明',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
              {
                'title': '办公室：陈金龙',
                'des': '办公室：陈金龙', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '办公室：陈金龙',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
              {
                'title': '法制大队：蔡振华',
                'des': '法制大队：蔡振华', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '法制大队：蔡振华',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
              {
                'title': '情报中心：杨学东、胡建',
                'des': '情报中心：杨学东、胡建', // 展示内容
                'linkTo': '',
                'pic': '',
                'notice': 0,
                'editors': [{
                  'editorTitle': '情报中心：杨学东、胡建',
                  'editorDes': '', // 编辑内容
                  'editorUrl': '',
                  'editorPic': ''
                }]
              },
            ],
            cartNum: 10
          }
        },
        // 柯工导航
        {
          title: '柯工导航',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'KGNavigation',
          componentContent: {
            txtRoute: [{
              'title': '柯工导航',
              'des': '柯工导航', // 展示内容
              'linkTo': '',
              'pic': '',
              'notice': 0,
              'editors': [{
                'editorTitle': '柯工导航',
                'editorDes': '', // 编辑内容
                'editorUrl': '',
                'editorPic': ''
              }]
            }, ]
          }
        }
      ]
    },
    {
      title: '轮播图',
      type: 1,
      classList: [
        // 轮播图
        {
          title: '插图1',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'Banner',
          componentContent: {
            bannerList: [{
                title: '插图1',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },
        // 轮播图2
        {
          title: '插图2',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'Banner2',
          componentContent: {
            bannerList2: [{
                title: '插图2',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },
        // 插图1
        {
          title: '插图3',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'Banner3',
          componentContent: {
            bannerList3: [{
                title: '插图3',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },
        // 插图2
        {
          title: '插图4',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'Banner4',
          componentContent: {
            bannerList4: [{
                title: '插图4',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },
      ]
    },
    {
      title: '图片要闻',
      type: 1,
      classList: [
        // 图片要闻
        {
          title: '要闻1',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'News',
          componentContent: {
            'product': [{
                'title': '轮播图片1',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              },
              {
                'title': '轮播图片2',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              },
              {
                'title': '轮播图片3',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123',
                'type': 0
              },
              {
                'title': '轮播图片4',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              },
              {
                'title': '轮播图片5',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              }
            ]
          }
        },
        // 要闻
        {
          title: '要闻2',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'PicHighlights',
          componentContent: {
            'product': [{
                'title': '轮播图片1',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              },
              {
                'title': '轮播图片2',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              },
              {
                'title': '轮播图片3',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123',
                'type': 0
              },
              {
                'title': '轮播图片4',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              },
              {
                'title': '轮播图片5',
                'id': '1',
                'pic': 'https://wxapi.yixiang.co/api/file/pic/20210222213116280067.jpeg',
                'storeName': '测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品',
                'price': '123'
              }
            ]
          }
        },
      ]
    },
    {
      title: '新闻模块',
      type: 1,
      classList: [
        // 新闻模块
        {
          title: '新闻模块1',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'NewsMoudel',
          componentContent: {
            txtRoute: [{
              'title': '通知通告',
              'des': '通知通告', // 展示内容
              'linkTo': '',
              'pic': '',
              'notice': 0,
              'editors': [{
                'editorTitle': '通知通告',
                'editorDes': '', // 编辑内容
                'editorUrl': '',
                'editorPic': ''
              }]
            }, ]
          }
        },
        // 小新闻块
        {
          title: '新闻模块2',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'SNewsPiece',
          componentContent: {
            txt: [{
              'title': '通知通告',
              'des': '通知通告', // 展示内容
              'linkTo': '',
              'pic': '',
              'notice': 0,
              'editors': [{
                'editorTitle': '通知通告',
                'editorDes': '', // 编辑内容
                'editorUrl': '',
                'editorPic': ''
              }]
            }, ]
          }
        },
      ]
    },
    {
      title: '图片链接',
      type: 1,
      classList: [
        // 图片链接
        {
          title: '警务公开1',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'Img',
          componentContent: {
            Imglist: [{
                title: '轮播1',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              },
              {
                title: '轮播2',
                des: '',
                pic: 'https://image.dayouqiantu.cn/5c9f05aee5059.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },
        // 警务公开
        {
          title: '警务公开2',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'OpenPolicing',
          componentContent: {
            bannerList: [{
                title: '图1',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              },
              {
                title: '图2',
                des: '',
                pic: 'https://image.dayouqiantu.cn/5c9f05aee5059.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },
      ]
    },
    {
      title: '焦点新闻',
      type: 1,
      classList: [
        // 焦点新闻
        {
          title: '焦点新闻1',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'NewsFocus',
          componentContent: {
            txtRoute: [{
              'title': '焦点新闻',
              'des': '焦点新闻', // 展示内容
              'linkTo': '',
              'pic': '',
              'notice': 0,
              'editors': [{
                'editorTitle': '焦点新闻',
                'editorDes': '', // 编辑内容
                'editorUrl': '',
                'editorPic': ''
              }]
            }, ]
          }
        },
        // 新闻声音
        {
          title: '焦点新闻2',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'NewsVoice',
          componentContent: {
            bannerList: [{
                title: '图1',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              },
              {
                title: '图2',
                des: '',
                pic: 'https://image.dayouqiantu.cn/5c9f05aee5059.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },
      ]
    },
    {
      title: '为您服务',
      type: 1,
      classList: [
        // 为你服务
        {
          title: '为您服务1',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'Server',
          componentContent: {
            txtRoute: [{
              'title': '为您服务',
              'des': '为您服务', // 展示内容
              'linkTo': '',
              'pic': '',
              'notice': 0,
              'editors': [{
                'editorTitle': '为您服务',
                'editorDes': '', // 编辑内容
                'editorUrl': '',
                'editorPic': ''
              }]
            }, ]
          }
        },
        // 为您服务
        {
          title: '为您服务2',
          icon: imageSrc.videoIcon,
          iconH: imageSrc.videoIconH,
          type: 'Serves',
          componentContent: {
            bannerList: [{
                title: '图1',
                des: '',
                pic: 'https://image.dayouqiantu.cn/1.jpg',
                url: '',
                linkTo: ''
              },
              {
                title: '图2',
                des: '',
                pic: 'https://image.dayouqiantu.cn/5c9f05aee5059.jpg',
                url: '',
                linkTo: ''
              }
            ]
          }
        },

      ]

    },
    {
      title: '温馨提示',
      type: 1,
      classList: [{
        title: '温馨提示',
        icon: imageSrc.videoIcon,
        iconH: imageSrc.videoIconH,
        type: 'TIps',
        componentContent: {
          txtRoute: [{
            'title': '温馨提示',
            'des': '温馨提示', // 展示内容
            'linkTo': '',
            'pic': '',
            'notice': 0,
            'editors': [{
              'editorTitle': '温馨提示',
              'editorDes': '', // 编辑内容
              'editorUrl': '',
              'editorPic': ''
            }]
          }, ]
        }
      }]
    }
  ]
]
export default panelList
