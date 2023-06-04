import * as items from './const.js'

export const db = {
  [items.TONIC_LIQUID]: {
    yield: 2,
    recipe: [
      { amount: 3, id: items.CALCIUM },
      { amount: 3, id: items.POTASSIUM },
      { amount: 3, id: items.ZINC },
    ],
  },
  [items.MORPHINE]: {
    yield: 1,
    recipe: [{ amount: 2, id: items.OPIUM }],
  },
  [items.BLOOD_PACK]: {
    yield: 2,
    recipe: [
      { amount: 2, id: items.ALIEN_BLOOD },
      { amount: 2, id: items.SALINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.SALINE]: {
    yield: 2,
    recipe: [
      { amount: 2, id: items.CHLORINE },
      { amount: 1, id: items.SODIUM },
    ],
  },
  [items.BANDAGE]: {
    yield: 2,
    recipe: [{ amount: 1, id: items.ORGANIC_FIBER }],
  },
  [items.PLASTISEAL]: {
    yield: 3,
    recipe: [
      { amount: 3, id: items.BANDAGE },
      { amount: 1, id: items.ELASTIN },
    ],
  },
  [items.FENTANYL]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.MORPHINE },
      { amount: 1, id: items.ADRENALINE },
      { amount: 1, id: items.ETHANOL },
    ],
  },
  [items.METHAMPHETAMINE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.PHOSPHORUS },
      { amount: 2, id: items.CHLORINE },
      { amount: 2, id: items.CARBON },
    ],
  },
  [items.ANABOLIC_STEROID]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.TONIC_LIQUID },
      { amount: 1, id: items.FENTANYL },
    ],
  },
  [items.HYPERZINE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.METHAMPHETAMINE },
      { amount: 1, id: items.ANABOLIC_STEROID },
    ],
  },
  [items.COMBAT_STIMULANT]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.SULPHURITE_SHARD },
      { amount: 1, id: items.MORPHINE },
    ],
  },
  [items.CALYX_EXTRACT]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.VELONACEPS_CALYS_EGGS },
      { amount: 1, id: items.CALCIUM },
    ],
  },
  [items.CALYXANIDE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.CALYX_EXTRACT },
      { amount: 1, id: items.ANTIBIOTICS },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.CHLORAL_HYDRATE]: {
    yield: 1,
    recipe: [
      { amount: 2, id: items.CHLORINE },
      { amount: 1, id: items.ETHANOL },
    ],
  },
  [items.PARALYZANT]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.CHLORAL_HYDRATE },
      { amount: 1, id: items.PARALYXIS },
    ],
  },
  [items.ANAPARALYZANT]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.PARALYZANT },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.HALOPERIDOL]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.LITHIUM },
      { amount: 2, id: items.CARBON },
      { amount: 2, id: items.CHLORINE },
    ],
  },
  [items.NALOXONE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.MORPHINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.DELIRIUMINE]: {
    yield: 2,
    recipe: [
      { amount: 1, id: items.DEMENTONITE_BAR },
      { amount: 1, id: items.ETHANOL },
    ],
  },
  [items.DELIRIUMINE_ANTIDOTE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.DELIRIUMINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.MORBUSINE]: {
    yield: 1,
    recipe: [
      { amount: 2, id: items.CHLORINE },
      { amount: 2, id: items.CALCIUM },
      { amount: 1, id: items.SULPHURIC_ACID },
    ],
  },
  [items.MORBUSINE_ANTIDOTE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.MORBUSINE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.CYANIDE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.CHLORAL_HYDRATE },
      { amount: 3, id: items.SODIUM },
    ],
  },
  [items.CYANIDE_ANTIDOTE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.CYANIDE },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.SUFFORIN]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.SULPHURIC_ACID },
      { amount: 1, id: items.POTASSIUM },
    ],
  },
  [items.SUFFORIN_ANTIDOTE]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.SUFFORIN },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
  [items.RADIOTOXIN]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.THORIUM },
      { amount: 2, id: items.URANIUM },
    ],
  },
  [items.ANTIRAD]: {
    yield: 1,
    recipe: [
      { amount: 1, id: items.RADIOTOXIN },
      { amount: 1, id: items.STABILOZINE },
    ],
  },
}
