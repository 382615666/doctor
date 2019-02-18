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
        path: 'jianyanbaogaoxiangqing',
        component: routerComponent.jianyanbaogaoxiangqing,
        meta: {
          title: '检验报告详情'
        }
      }
    ]
  }
];
export default routes;
