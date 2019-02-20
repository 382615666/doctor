import routerComponent from './router-component';
const routes = [

  {
    path: '/',
    component: routerComponent.layout,
    children: [
      {
        path: 'binganshouye',
        component: routerComponent.binganshouye,
        meta: {
          title: '病案首页'
        }
      },
      {
        path: 'jianyanbaogao',
        component: routerComponent.jianyanbaogao,
        meta: {
          title: '检验报告'
        }
      },
      {
        path: 'baogaozhongxin',
        component: routerComponent.baogaozhongxin,
        meta: {
          title: '报告中心'
        }
      },
      {
        path: 'jianyanbaogaoxiangqing',
        component: routerComponent.jianyanbaogaoxiangqing,
        meta: {
          title: '检验报告详情',
          route: true
        }
      },
      {
        path: 'jianchabaogao',
        component: routerComponent.jianchabaogao,
        meta: {
          title: '检查报告'
        }
      },
      {
        path: 'jianchabaogaoxiangqing',
        component: routerComponent.jianchabaogaoxiangqing,
        meta: {
          title: '检查报告详情',
          route: true
        }
      },
      {
        path: 'chuyuanjilu',
        component: routerComponent.chuyuanjilu,
        meta: {
          title: '出院记录'
        }
      },
      {
        path: 'feiyongqingdan',
        component: routerComponent.feiyongqingdan,
        meta: {
          title: '费用清单'
        }
      },
      {
        path: 'changqiyizhu',
        component: routerComponent.changqiyizhu,
        meta: {
          title: '长期医嘱'
        }
      },
      {
        path: 'linshiyizhu',
        component: routerComponent.linshiyizhu,
        meta: {
          title: '临时医嘱'
        }
      },
      {
        path: 'error',
        component: routerComponent.error,
        meta: {
          title: '亲，页面丢失了哦！'
        }
      }
    ]
  }
];
export default routes;
