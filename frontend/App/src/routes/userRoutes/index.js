import _concat from 'lodash/concat';
import { REGISTER, LOGIN } from 'pathUrl/pathUrl';

import UserRegister from 'user/register';
import UserLogin from 'user/login';

const UserRoutes = [
    { name: 'Register', path: REGISTER, component: UserRegister },
    { name: 'Login', path: LOGIN, component: UserLogin },
];

export default _concat(UserRoutes);
