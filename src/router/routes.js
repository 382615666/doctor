import routerComponent from './router-component';
const routes = [
  {
    path: '/',
    component: routerComponent.layout,
    redirect: 'binganshouye',
    children: [
      {
        path: 'binganshouye',
        component: routerComponent.binganshouye
      }
    ]
  }
];
export default routes;
