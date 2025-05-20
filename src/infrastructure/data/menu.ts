export const Menus = [
    {
        type : 'menu',
        name : 'Management',
        children : [
            {   
                type : 'menu-link',
                name : 'Setup Guides',
                to : '/',
                icon : '/src/assets/images/icons/RocketFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Dashboard',
                to : '/dashboard',
                icon : '/src/assets/images/icons/AppstoreFilled.png'
            },
            {   
                type : 'menu-link',
                name : 'Orders',
                to : '/orders',
                icon : '/src/assets/images/icons/ShoppingFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Menu',
                to : '/menu',
                icon : '/src/assets/images/icons/ProfileFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Invoices',
                to : '/invoices',
                icon : '/src/assets/images/icons/FileFilled.png'
            },
        ]
    },


    {
        type : 'menu-link',
        name : 'Account',
        children : [
            {   
                type : 'menu-link',
                name : 'Team Members',
                to : '/team-members',
                icon : '/src/assets/images/icons/IdcardFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Payments',
                to : '/payments',
                icon : '/src/assets/images/icons/CreditCardFilled.png'
            },
            {   
                type : 'menu-link',
                name : 'Report And Analysis',
                to : '/report-analysis',
                icon : '/src/assets/images/icons/AreaChartOutlined.png'
            },
             {   
                type : 'menu-link',
                name : 'Settings',
                to : '/settings',
                icon : '/src/assets/images/icons/SettingFilled.png'
            },
           
        ]
    }
]