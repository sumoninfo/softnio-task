const AdminRoutes = [
    {
        path     : '/dashboard',
        name     : 'AdminDashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Admin Dashboard'
        }
    },
    // ===========Category Section===============
    {
        path     : 'category/create',
        name     : 'CategoryCreate',
        component: () => import('./pages/category/Create'),
        meta     : {
            title: 'Category Create'
        }
    },
    {
        path     : 'category/list',
        name     : 'CategoryList',
        component: () => import('./pages/category/Index'),
        meta     : {
            title: 'Category List'
        }
    }, {
        path     : 'category/edit/:id',
        name     : 'CategoryEdit',
        component: () => import('./pages/category/Create'),
        meta     : {
            title: 'Category Edit'
        }
    },
];

export default AdminRoutes;
