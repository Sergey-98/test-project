import MainPage from '../pages/MainPage/MainPage';
import Error from '../pages/Page404/Page404';

export const routes = [
  { path: '/', component: MainPage, exact: true },
  { path: '*', component: Error, exact: true },
];
