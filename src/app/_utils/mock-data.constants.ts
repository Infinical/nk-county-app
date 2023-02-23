const applicationType = [
  {
    id: '1',
    name: 'New',
  },
  {
    id: '2',
    name: 'Renewal',
  },
];

const isBusinessRegistered = [
  {
    id: '1',
    name: 'Yes',
  },
  {
    id: '2',
    name: 'No',
  },
];

const subCounties = [
  {
    id: '1',
    name: 'Westlands',
    wards: [
      { id: '1', name: 'Kitusuru' },
      { id: '2', name: 'Parklands' },
      { id: '3', name: 'Karura' },
      { id: '4', name: 'Kangemi ' },
      { id: '5', name: 'Mountain View' },
    ],
  },
  {
    id: '2',
    name: 'Dagoretti North',
    wards: [
      { id: '1', name: 'Kilimani' },
      { id: '2', name: 'Kawangware' },
      { id: '3', name: 'Gatina' },
      { id: '4', name: 'Kileleshwa ' },
      { id: '5', name: 'Kabiro' },
    ],
  },
  {
    id: '3',
    name: 'Dagoretti South',
    wards: [
      { id: '1', name: 'Mutu-ini' },
      { id: '2', name: 'Ngando' },
      { id: '3', name: 'Riruta' },
      { id: '4', name: 'Uthiru ' },
      { id: '5', name: 'Waithaka' },
    ],
  },
  {
    id: '4',
    name: 'Kibra',
    wards: [
      { id: '1', name: 'Laini saba' },
      { id: '2', name: 'Lindi' },
      { id: '3', name: 'Makina' },
      { id: '4', name: 'Woodley ' },
      { id: '5', name: 'Sarangombe' },
    ],
  },
  {
    id: '5',
    name: 'Langata',
    wards: [
      { id: '1', name: 'Karen' },
      { id: '2', name: 'Nairobi West' },
      { id: '3', name: 'Nyayo Highrise' },
      { id: '4', name: 'Mugumu-ini ' },
      { id: '5', name: 'South C' },
    ],
  },
  {
    id: '6',
    name: 'Roysambu',
    wards: [
      { id: '1', name: 'Githurai' },
      { id: '2', name: 'Kahawa West' },
      { id: '3', name: 'Zimmerman' },
      { id: '4', name: 'Roysambu ' },
      { id: '5', name: 'Kahawa' },
    ],
  },
  {
    id: '7',
    name: 'Kasarani',
    wards: [
      { id: '1', name: 'Clay City' },
      { id: '2', name: 'Njiru' },
      { id: '3', name: 'Kasarani' },
      { id: '4', name: 'Mwiki ' },
      { id: '5', name: 'Ruai' },
    ],
  },
  {
    id: '8',
    name: 'Ruaraka',
    wards: [
      { id: '1', name: 'Baba Dogo' },
      { id: '2', name: 'Utalii' },
      { id: '3', name: 'Mathare North' },
      { id: '4', name: 'Lucky Summer ' },
      { id: '5', name: 'Korogocho' },
    ],
  },
  {
    id: '9',
    name: 'Embakasi South',
    wards: [
      { id: '1', name: 'Imara Daima' },
      { id: '2', name: 'Kwa Njenga' },
      { id: '3', name: 'Kwa Reuben' },
      { id: '4', name: 'Pipeline ' },
      { id: '5', name: 'Kware' },
    ],
  },
  {
    id: '10',
    name: 'Embakasi East',
    wards: [
      { id: '1', name: 'Upper Savannah' },
      { id: '2', name: 'Lower Savannah' },
      { id: '3', name: 'Utawala' },
      { id: '4', name: 'Embakasi ' },
      { id: '5', name: 'Mihango' },
    ],
  },
];

const businessCategory = [
  {
    id: '1',
    name: 'General Trade, Wholesale & Retail',
    description: '',
    subcategories: [
      {
        id: '1',
        name: 'Hyper Markets',
        description: '',
      },
      {
        id: '2',
        name: 'Mega Super Markets',
        description: '',
      },
      {
        id: '3',
        name: 'Large Trader Shop (21-50 Employees)',
        description: '',
      },
      {
        id: '4',
        name: 'Medium Trader Shop (5-20 Employees)',
        description: '',
      },
      {
        id: '5',
        name: 'Small Trader Shop (0-4 Employees)',
        description: '',
      },
    ],
  },
  {
    id: '2',
    name: 'Informal Sector',
    description: '',
    subcategories: [
      {
        id: '1',
        name: '1 Hawker with Motor Vehicle on designated area ',
        description: '',
      },
      {
        id: '2',
        name: '1 Hawker without Motor Vehicle  ',
        description: '',
      },
      {
        id: '3',
        name: '1 vendor at uhuru park ',
        description: '',
      },
    ],
  },
  {
    id: '3',
    name: 'Transport, Storage and Communication',
    description: '',
    subcategories: [
      {
        id: '1',
        name: 'Mega Transport Company ',
        description: '',
      },
      {
        id: '2',
        name: 'Large Transport Company ',
        description: '',
      },
      {
        id: '3',
        name: 'Medium Transport Company ',
        description: '',
      },
      {
        id: '4',
        name: 'Small Transport Company ',
        description: '',
      },
    ],
  },
  {
    id: '4',
    name: 'Agriculture, Forestry & Resources',
    description: '',
    subcategories: [
      {
        id: '1',
        name: 'Mega Agriculture Producer ',
        description: '',
      },
      {
        id: '2',
        name: 'Large Agriculture Producer ',
        description: '',
      },
      {
        id: '3',
        name: 'Medium Agriculture Producer ',
        description: '',
      },
      {
        id: '4',
        name: 'Small Agriculture Producer ',
        description: '',
      },
    ],
  },
];

export const mockData = {
  applicationType,
  isBusinessRegistered,
  subCounties,
  businessCategory,
};
