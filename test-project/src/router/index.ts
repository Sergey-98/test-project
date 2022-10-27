import Error from '../pages/Page404/Page404';
import Main from 'components/Main/Main';
import Address from 'components/Address/Address';

export const routes = [
  { path: '/address', component: Address, exact: true },
  { path: '/', component: Main, exact: true },
  { path: '*', component: Error, exact: true },
];
