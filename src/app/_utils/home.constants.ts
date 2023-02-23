const homeMenuItems = [
  {
    name: 'Parking Services',
    iconName: 'local_parking',
    description: 'Parking services',
    route: '/tabs/home/parking',
  },
  {
    name: 'Business Licensing',
    iconName: 'business_center',
    description: 'Licensing services',
    route: '/tabs/home/business-licensing',
  },
  {
    name: 'Market Cess',
    iconName: 'store',
    description: 'Parking services',
    route: '/tabs/home/market-cess',
  },
  {
    name: 'Property Services',
    iconName: 'real_estate_agent',
    description: 'Property Services',
    route: '/tabs/home/property-management',
  },
  {
    name: 'Essential Services',
    iconName: 'label_important',
    description: 'Essential services',
    route: '/tabs/home/essential-services',
  },
  {
    name: 'Health Services',
    iconName: 'health_and_safety',
    description: 'Health services',
    route: '/tabs/home/health-services',
  },
  {
    name: 'Land Services',
    iconName: 'landscape',
    description: 'Land services',
    route: '/tabs/home/land-services',
  },
];

const businessLicensing = [
  {
    name: 'Single Business Permit',
    iconName: 'work_history',
    description: 'Single business permit',
    route: '/tabs/home/business-licensing/business-permits',
  },
  {
    name: 'Liquor Licensing',
    iconName: 'liquor',
    description: 'Get your liquor business license',
    route: '/tabs/home/business-licensing/liquor-licensing',
  },
  {
    name: 'Weights & Measures',
    iconName: 'scale',
    description: 'Weights and measures',
    route: '/tabs/home/business-licensing/weights-and-measures',
  },
  {
    name: 'Betting & Gaming',
    iconName: 'casino',
    description: 'Betting and gaming licenses',
    route: '/tabs/home/business-licensing/betting-and-gaming',
  },
];

const propertyServices = [
  {
    name: 'Tenancy Application',
    iconName: 'apartment',
    description: 'Apply for tenancy',
    route: '/tabs/home/property-management',
  },
  {
    name: 'Tenancy Transfer',
    iconName: 'real_estate_agent',
    description: 'Transfer tenancy',
    route: '/tabs/home/property-management',
  },
];

const essentialServices = [
  {
    name: 'Fire and Disaster Management',
    iconName: 'fire_truck',
    description: 'Apply for fire & disaster management',
    route: '/tabs/home/essential-services',
  },
  {
    name: 'Education',
    iconName: 'school',
    description: 'Apply for education services',
    route: '/tabs/home/essential-services',
  },
  {
    name: 'Environment',
    iconName: 'landscape',
    description: 'Environment services',
    route: '/tabs/home/essential-services',
  },
  {
    name: 'Roads, Public Works & Transport',
    iconName: 'add_road',
    description: 'Roads & Public Works services',
    route: '/tabs/home/essential-services',
  },
  {
    name: 'Admin & Other Services',
    iconName: 'admin_panel_settings',
    description: 'Admin and other services',
    route: '/tabs/home/essential-services',
  },
  {
    name: 'Bus Shelter',
    iconName: 'emoji_transportation',
    description: 'Bus shelter services',
    route: '/tabs/home/essential-services',
  },
];

const healthServices = [
  // {
  //   name: 'Ambulance Services',
  //   iconName: 'emergency',
  //   description: 'Ambulance Services',
  //   route: '/tabs/home/health-services',
  // },
  // {
  //   name: 'Food Hygiene',
  //   iconName: 'kitchen',
  //   description: 'Food Hygiene',
  //   route: '/tabs/home/health-services/',
  // },
  {
    name: 'Food Handlers Certificate',
    iconName: 'safety_check',
    description: 'Food Handlers Certificate',
    route: '/tabs/home/health-services/food-handlers-certificate',
  },
  {
    name: 'Health Certificate',
    iconName: 'health_and_safety',
    description: 'Health Certificate',
    route: '/tabs/home/health-services/health-certificate',
  },
  // {
  //   name: 'Export Certificate',
  //   iconName: 'exit_to_app',
  //   description: 'Export Certificate',
  //   route: '/tabs/home/health-services',
  // },
  // {
  //   name: 'Pest Control',
  //   iconName: 'pest_control',
  //   description: 'Pest Control',
  //   route: '/tabs/home/health-services',
  // },
];

const landServices = [
  {
    name: 'Add Land Record',
    iconName: 'work_history',
    description: 'Single business permit',
    route: '/tabs/home/land-services',
  },
  {
    name: 'Ground Rent',
    iconName: 'grass',
    description: 'Rent public grounds',
    route: '/tabs/home/land-services',
  },
  {
    name: 'Rate Search',
    iconName: 'query_stats',
    description: 'Rate Search',
    route: '/tabs/home/land-services',
  },
  {
    name: 'Land Transfer',
    iconName: 'move_up',
    description: 'Land Transfer',
    route: '/tabs/home/land-services',
  },
  {
    name: 'Land Services',
    iconName: 'landscape',
    description: 'Land Services',
    route: '/tabs/home/land-services',
  },
  {
    name: 'Land Survey',
    iconName: 'square_foot',
    description: 'Land Survey',
    route: '/tabs/home/land-services',
  },
  {
    name: 'Land Clearance',
    iconName: 'backspace',
    description: 'Land Clearance',
    route: '/tabs/home/land-services',
  },
  {
    name: 'Property Development Applications',
    iconName: 'developer_board',
    description: 'Property Development Applications',
    route: '/tabs/home/land-services',
  },
];

export const services = {
  homeMenuItems,
  businessLicensing,
  essentialServices,
  landServices,
  healthServices,
  propertyServices,
};
