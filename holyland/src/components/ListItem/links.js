import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import About from '../About/About'
import Contact from '../Contact/Contact'
import HowOrder from '../HowOrder/HowOrder'
import Price from '../Price/Price'
import Dashboard from '../DashBoard/DashBoard'


export const links = [
  {
    name: 'Главная',
    path: '/',
    component: Dashboard,
    icon: HomeOutlinedIcon,
  },
  {
    name: 'О косметике',
    path: '/about',
    component: About,
    icon: InfoOutlinedIcon,
  },
  {
    name: 'Как заказать',
    path: '/howorder',
    component: HowOrder,
    icon: ShoppingCartOutlinedIcon,
  },
  {
    name: 'Цены',
    path: '/price',
    component: Price,
    icon: MonetizationOnOutlinedIcon,
  },
];
