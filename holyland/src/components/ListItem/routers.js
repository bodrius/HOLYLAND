import About from '../About/About'
import Contact from '../Contact/Contact'
import HowOrder from '../HowOrder/HowOrder'
import Price from '../Price/Price'
import Dashboard from '../DashBoard/DashBoard'


export const routers = [
  {
    path: '/',
    component: Dashboard,
  },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/howorder',
      component: HowOrder,
    },
    {
      path: '/price',
      component: Price,
    },
  ];
  