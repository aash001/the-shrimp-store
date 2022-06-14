export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    image: 'shrimp/shrimp-tank_mz63jmt12.png',
    name: 'Shrimp Tank - 10 Gallon',
    price: 99.99,
    description:
      'Rich landscape design, suitable for all kinds of scenes. 6mm thick heavy-duty glass with high light transmittance and low iron, 91% transparency, bezel-less design, and wide vision brings you an immersive viewing experience.',
  },
  {
    id: 2,
    image: 'shrimp/double-head-filter_jVT0KU6zf.png',
    name: 'Aquarium Filter',
    price: 19.99,
    description:
      'Sponge filter provide both mechanical and bio filtration, also, the air infusion chamber produces minute bubbles which increase the oxygen solubility.Two media containers with ceramic ball inside, you can also replace this ceramic media with other media for maximum biological filtration. ',
  },
  {
    id: 3,
    image: 'shrimp/hikari-shrimp_iTxG0txjU.png',
    name: 'Hikari Tropical Shrimp Cuisine Fish Food',
    price: 6.99,
    description:
      'Formulated diet for all types of freshwater ornamental shrimp containing natural color enhancers like spirulina, seaweed and alfalfa meal. Includes astaxanthion, which helps to reduce color fading and a proprietary vitamin and mineral mix that supports immune system health.',
  },
  {
    id: 4,
    image: 'shrimp/water-test-kit_AXc-ju-66.png',
    name: 'Water Test Kit',
    price: 19.99,
    description:
      'Packaged with a sturdy, waterproof box which includes fast, easy and accurate test solutions for pH, high range pH, ammonia, nitrate & nitrite. Kit contains over 800 tests, including color chart and glass test tubes.',
  },
  {
    id: 5,
    image: 'shrimp/shrimp-nest_Rk2uQPoGy.png',
    name: 'Shrimp Home',
    price: 29.99,
    description:
      'Perfect breeding ground for shrimps. Our conjoined ceramic shelter gives your shrimps the space and privacy they require. Once inside it, they remain undisturbed and relaxed which increases their breeding rate.',
  },
  {
    id: 6,
    image: 'shrimp/samurai-soil_Y3pdjcEnP.png',
    name: 'Aquarium Soil - 10Ib',
    price: 19.99,
    description:
      'Active soil substrate for shrimp consisting of 100% natural raw materials. The soil is crafted to maintain an ideal PH level of 7.0 without promoting algae growth. Made using volcanic soil that supplies essential minerals, trace elements, and formulated with a special nutrient blend to create a soft and slightly acidic water.',
  },
  {
    id: 7,
    image: 'shrimp/shrimp-lighting_6uDp48gwG.png',
    name: 'Aquarium Lighting Kit',
    price: 79.99,
    description:
      'Plant 3.0 Bluetooth LED is designed for hobbyists who want to maintain a thriving live plant aquarium. Featuring free Fluval SmartApp technology, the light offers a variety of customizable options controlled via Bluetooth on your mobile device.',
  },
  {
    id: 8,
    image: 'shrimp/salty-shrimp-gh-kh_bpvrZwVbX.png',
    name: 'SaltyShrimp Shrimp Mineral GH/KH+',
    price: 14.99,
    description:
      ' Re-mineralises e.g. RO water, rainwater, fully desalinated water etc., raising total hardness (GH) and carbonate hardness (KH) at a ratio of GH/KH: 1.0/0.5. Shrimp Mineral GH/KH+ contains all the important minerals and trace elements your shrimp need for their well-being, an intensive coloration, successful breeding and healthy growth.',
  },
];
