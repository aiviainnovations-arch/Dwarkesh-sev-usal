export type Dish = {
  id: string
  name: string
  description: string
  image: string
  /** Leave undefined until real pricing is confirmed - UI will show a neutral placeholder. */
  price?: string
  tag?: string
}

export type MenuCategory = {
  id: string
  label: string
  dishes: Dish[]
}

// NOTE FOR OWNER:
// Only dishes with a real supplied photo are listed below, and no prices have
// been invented. Add more categories (e.g. Sev Tari) the same way once you
// share photos and prices for them - see README.md "Editing the menu".

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'butter-sev-usal',
    name: 'Butter Sev Usal',
    description:
      'Crisp sev soaked in a warm, spiced usal gravy, finished with a cube of butter, grated cheese and spring onion.',
    image: `${import.meta.env.BASE_URL}images/butter-sev-usal.jpg`,
    tag: 'Signature',
  },
  {
    id: 'cheese-poha-usal',
    name: 'Cheese Poha Usal',
    description:
      'Fluffy poha layered with grated cheese and fresh spring onion, served alongside a bowl of tangy usal rassa.',
    image: `${import.meta.env.BASE_URL}images/cheese-poha-usal.jpg`,
    tag: 'Signature',
  },
  {
    id: 'butter-sev-tari',
    name: 'Butter Sev Tari',
    description:
      'Fluffy poha layered with grated cheese and fresh spring onion, served alongside a bowl of tangy usal rassa.',
    image: `${import.meta.env.BASE_URL}images/butter-sev-tari.jpg`,
    tag: 'Signature',
  },
  {
    id: 'choco-lassi',
    name: 'Chocolate Lassi',
    description: 'Creamy, chilled lassi finished with roasted cashew pieces.',
    image: `${import.meta.env.BASE_URL}images/choco-lassi.jpg`,
    tag: 'Beverage',
  },
]

export const MENU: MenuCategory[] = [
  {
    id: 'sev-usal',
    label: 'Sev Usal',
    dishes: [
      {
        id: 'butter-sev-usal-menu',
        name: 'Butter Sev Usal',
        description:
          'Our signature bowl - crisp sev in spiced usal gravy, butter, cheese and spring onion.',
        image: `${import.meta.env.BASE_URL}images/butter-sev-usal.jpg`,
        tag: 'Signature',
      },
      {
        id: 'butter-sev-tari-menu',
        name: 'Butter Sev Tari',
        description:
          'Our signature bowl - crisp sev in spiced usal gravy, butter, cheese and spring onion.',
        image: `${import.meta.env.BASE_URL}images/butter-sev-tari.jpg`,
        tag: 'Signature',
      },
      {
        id: 'butter-cheese-sev-tari-menu',
        name: 'Butter Cheese Sev Tari',
        description:
          'Our signature bowl - crisp sev in spiced usal gravy, butter, cheese and spring onion.',
        image: `${import.meta.env.BASE_URL}images/butter-cheese-sev-tari.jpg`,
        tag: 'Signature',
      },
    ],
  },
  {
    id: 'poha-usal',
    label: 'Poha Usal',
    dishes: [
      {
        id: 'cheese-poha-usal-menu',
        name: 'Cheese Poha Usal',
        description:
          'Fluffy poha topped with grated cheese and spring onion, served with usal rassa on the side.',
        image: `${import.meta.env.BASE_URL}images/cheese-poha-usal.jpg`,
      },
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    dishes: [
      {
        id: 'badam-lassi',
        name: 'Badam Lassi',
        description: 'Chilled lassi topped with whole almonds.',
        image: `${import.meta.env.BASE_URL}images/badam-lassi.jpg`,
      },
      {
        id: 'kaju-lassi',
        name: 'Kaju Lassi',
        description: 'Creamy lassi finished with roasted cashew pieces.',
        image: `${import.meta.env.BASE_URL}images/kaju-lassi.jpg`,
      },
      {
        id: 'mango-lassi',
        name: 'Mango Lassi',
        description: 'Classic lassi swirled with fresh mango.',
        image: `${import.meta.env.BASE_URL}images/mango-lassi.jpg`,
      },
      {
        id: 'choco-lassi',
        name: 'Choco Lassi',
        description: 'Rich lassi layered with chocolate for a dessert-style twist.',
        image: `${import.meta.env.BASE_URL}images/choco-lassi.jpg`,
      },
    ],
  },
]
