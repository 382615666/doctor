import routerComponent from './router-component';
const routes = [
  {
    path: '/',
    component: routerComponent.layout,
    redirect: 'binganshouye',
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
          title: '检验报告详情'
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
          title: '检查报告详情'
        }
      }
    ]
  }
];
export default routes;
