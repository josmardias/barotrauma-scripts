import * as items from './const.js'

export const dbList = [
  {
    id: items.TONIC_LIQUID,
    name: 'Tonic Liquid',
    yield: 2,
    recipe: [
      { amount: 3, id: items.CALCIUM },
      { amount: 3, id: items.POTASSIUM },
      { amount: 3, id: items.ZINC },
    ],
  },
  {
    id: items.MORPHINE,
    name: 'Morphine',
    yield: 1,
    recipe: [{ amount: 2, id: items.OPIUM }],
  },
  {
    id: items.BLOOD_PACK,
    name: 'Blood Pack',
    yield: 2,
    recipe: [
      { amount: 2, id: items.ALIEN_BLOOD },
      { amount: 2, id: items.SALINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.SALINE,
    name: 'Saline',
    yield: 2,
    recipe: [
      { amount: 2, id: items.CHLORINE },
      { amount: 1, id: items.SODIUM },
    ],
  },
  {
    id: items.BANDAGE,
    name: 'Bandage',
    yield: 2,
    recipe: [{ amount: 1, id: items.ORGANIC_FIBER }],
  },
  {
    id: items.PLASTISEAL,
    name: 'Plastiseal',
    yield: 3,
    recipe: [
      { amount: 3, id: items.BANDAGE },
      { amount: 1, id: items.ELASTIN },
    ],
  },
  {
    id: items.FENTANYL,
    name: 'Fentanyl',
    yield: 1,
    recipe: [
      { amount: 1, id: items.MORPHINE },
      { amount: 1, id: items.ADRENALINE },
      { amount: 1, id: items.ETHANOL },
    ],
  },
  {
    id: items.METHAMPHETAMINE,
    name: 'Methamphetamine',
    yield: 1,
    recipe: [
      { amount: 1, id: items.PHOSPHORUS },
      { amount: 2, id: items.CHLORINE },
      { amount: 2, id: items.CARBON },
    ],
  },
  {
    id: items.ANABOLIC_STEROID,
    name: 'Anabolic_Steroids',
    yield: 1,
    recipe: [
      { amount: 1, id: items.TONIC_LIQUID },
      { amount: 1, id: items.FENTANYL },
    ],
  },
  {
    id: items.HYPERZINE,
    name: 'Hyperzine',
    yield: 1,
    recipe: [
      { amount: 1, id: items.METHAMPHETAMINE },
      { amount: 1, id: items.ANABOLIC_STEROID },
    ],
  },
  {
    id: items.COMBAT_STIMULANT,
    name: 'Combat_Stimulant',
    yield: 1,
    recipe: [
      { amount: 1, id: items.SULPHURITE_SHARD },
      { amount: 1, id: items.MORPHINE },
    ],
  },
  {
    id: items.CALYX_EXTRACT,
    name: 'Calyx Extract',
    yield: 1,
    recipe: [
      { amount: 1, id: items.VELONACEPS_CALYS_EGGS },
      { amount: 1, id: items.CALCIUM },
    ],
  },
  {
    id: items.CALYXANIDE,
    name: 'Calyxanide',
    yield: 1,
    recipe: [
      { amount: 1, id: items.CALYX_EXTRACT },
      { amount: 1, id: items.ANTIBIOTICS },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.CHLORAL_HYDRATE,
    name: 'Chloral Hydrate',
    yield: 1,
    recipe: [
      { amount: 2, id: items.CHLORINE },
      { amount: 1, id: items.ETHANOL },
    ],
  },
  {
    id: items.PARALYZANT,
    name: 'Paralyzant',
    yield: 1,
    recipe: [
      { amount: 1, id: items.CHLORAL_HYDRATE },
      { amount: 1, id: items.PARALYXIS },
    ],
  },
  {
    id: items.ANAPARALYZANT,
    name: 'Anaparalyzant',
    yield: 1,
    recipe: [
      { amount: 1, id: items.PARALYZANT },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.HALOPERIDOL,
    name: 'Haloperidol',
    yield: 1,
    recipe: [
      { amount: 1, id: items.LITHIUM },
      { amount: 2, id: items.CARBON },
      { amount: 2, id: items.CHLORINE },
    ],
  },
  {
    id: items.NALOXONE,
    name: 'Naloxone',
    yield: 1,
    recipe: [
      { amount: 1, id: items.MORPHINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.DELIRIUMINE,
    name: 'Deliriumine',
    yield: 2,
    recipe: [
      { amount: 1, id: items.DEMENTONITE_BAR },
      { amount: 1, id: items.ETHANOL },
    ],
  },
  {
    id: items.DELIRIUMINE_ANTIDOTE,
    name: 'Deliriumine Antidote',
    yield: 1,
    recipe: [
      { amount: 1, id: items.DELIRIUMINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.MORBUSINE,
    name: 'Morbusine',
    yield: 1,
    recipe: [
      { amount: 2, id: items.CHLORINE },
      { amount: 2, id: items.CALCIUM },
      { amount: 1, id: items.SULPHURIC_ACID },
    ],
  },
  {
    id: items.MORBUSINE_ANTIDOTE,
    name: 'Morbusine Antidote',
    yield: 1,
    recipe: [
      { amount: 1, id: items.MORBUSINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.CYANIDE,
    name: 'Cyanide',
    yield: 1,
    recipe: [
      { amount: 1, id: items.CHLORAL_HYDRATE },
      { amount: 3, id: items.SODIUM },
    ],
  },
  {
    id: items.CYANIDE_ANTIDOTE,
    name: 'Cyanide Antidote',
    yield: 1,
    recipe: [
      { amount: 1, id: items.CYANIDE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.SUFFORIN,
    name: 'Sufforin',
    yield: 1,
    recipe: [
      { amount: 1, id: items.SULPHURIC_ACID },
      { amount: 1, id: items.POTASSIUM },
    ],
  },
  {
    id: items.SUFFORIN_ANTIDOTE,
    name: 'Sufforin Antidote',
    yield: 1,
    recipe: [
      { amount: 1, id: items.SUFFORIN },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  {
    id: items.RADIOTOXIN,
    name: 'Radiotoxin',
    yield: 1,
    recipe: [
      { amount: 1, id: items.THORIUM },
      { amount: 2, id: items.URANIUM },
    ],
  },
  {
    id: items.ANTIRAD,
    name: 'Antirad',
    yield: 1,
    recipe: [
      { amount: 1, id: items.RADIOTOXIN },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
]

export const db = Object.fromEntries(dbList.map((item) => [item.id, item]))
