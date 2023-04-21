import config from '~/config';
import OnlyHeader from '~/layouts/OnlyHeader';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.category,
        component: Home,
    },

    {
        path: config.routes.login,
        component: Login,
        layout: OnlyHeader,
    },
    {
        path: config.routes.register,
        component: Register,
        layout: OnlyHeader,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
