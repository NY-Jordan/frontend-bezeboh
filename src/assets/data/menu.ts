export const Menus = [
    {
        type : 'menu',
        name : 'Management',
        children : [
            {   
                type : 'menu-link',
                name : 'Setup Guides',
                to : '/',
                icon : '/images/icons/RocketFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Dashboard',
                to : '/dashboard',
                icon : '/images/icons/AppstoreFilled.png'
            },
            {   
                type : 'menu-link',
                name : 'Orders',
                to : '/orders',
                icon : '/images/icons/ShoppingFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Menu',
                to : '/menu',
                icon : '/images/icons/ProfileFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Invoices',
                to : '/invoices',
                icon : '/images/icons/FileFilled.png'
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
                icon : '/images/icons/IdcardFilled.png'
            },
             {   
                type : 'menu-link',
                name : 'Payments',
                to : '/payments',
                icon : '/images/icons/CreditCardFilled.png'
            },
            {   
                type : 'menu-link',
                name : 'Report And Analysis',
                to : '/report-analysis',
                icon : '/images/icons/AreaChartOutlined.png'
            },
             {   
                type : 'menu-link',
                name : 'Settings',
                to : '/settings',
                icon : '/images/icons/SettingFilled.png'
            },
           
        ]
    }
]