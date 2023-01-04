const AdminRoutes = [
    {
        path     : '/dashboard',
        name     : 'AdminDashboard',
        component: () => import('./pages/Dashboard'),
        meta     : {
            title: 'Admin Dashboard'
        }
    }, {
        path     : '/profile',
        name     : 'Profile',
        component: () => import('./pages/Profile'),
        meta     : {
            title: 'Profile'
        }
    },
    // ===========Transaction Section===============
    {
        path     : 'transaction/create',
        name     : 'TransactionCreate',
        component: () => import('./pages/transaction/Create'),
        meta     : {
            title: 'Transaction Create'
        }
    },
    {
        path     : 'transaction/list',
        name     : 'TransactionList',
        component: () => import('./pages/transaction/Index'),
        meta     : {
            title: 'Transaction List'
        }
    }, {
        path     : 'transaction/edit/:id',
        name     : 'TransactionEdit',
        component: () => import('./pages/transaction/Create'),
        meta     : {
            title: 'Transaction Edit'
        }
    },
    //===========ss===================
    {
        path     : '/reports/total-amount-converted',
        name     : 'TotalAmountConvertedReport',
        component: () => import('./pages/reports/TotalAmountConverted'),
        meta     : {
            title: 'Total Amount Converted Report'
        }
    },{
        path     : '/reports/third-highest-amount',
        name     : 'ThirdHighestAmountReport',
        component: () => import('./pages/reports/ThirdHighestAmount'),
        meta     : {
            title: 'Third Highest Amount Report'
        }
    },
];

export default AdminRoutes;
