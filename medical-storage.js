import * as items from './const.js'
import { db } from './db.js'

const storage = [
  // just for the sake of it
  { amount: 8, id: items.ANTIBIOTIC_GLUE },
  // low treatment
  { amount: 8, id: items.STABILOZINE },
  { amount: 8, id: items.ETHANOL },
  { amount: 16, id: items.BANDAGE },
  // emergency
  { amount: 16, id: items.ANTIBIOTICS },
  { amount: 16, id: items.TONIC_LIQUID },
  { amount: 16, id: items.PLASTISEAL },
  { amount: 16, id: items.MORPHINE },
  { amount: 16, id: items.BLOOD_PACK },
  // advanced
  { amount: 8, id: items.HYPERZINE },
  { amount: 8, id: items.COMBAT_STIMULANT },
  { amount: 8, id: items.FENTANYL },
  { amount: 8, id: items.CALYXANIDE },
  { amount: 8, id: items.ANAPARALYZANT },
  // antidotes
  { amount: 8, id: items.HALOPERIDOL },
  { amount: 8, id: items.NALOXONE },
  { amount: 8, id: items.DELIRIUMINE_ANTIDOTE },
  { amount: 8, id: items.MORBUSINE_ANTIDOTE },
  { amount: 8, id: items.CYANIDE_ANTIDOTE },
  { amount: 8, id: items.SUFFORIN_ANTIDOTE },
  { amount: 8, id: items.ANTIRAD },
]

const itemBasicResources = (id, amount) => {
  const item = db[id]

  if (!item) return { [id]: amount }

  return item.recipe
    .map((i) => itemBasicResources(i.id, i.amount))
    .reduce((acc, res) => {
      for (let id of Object.keys(res)) {
        if (!acc[id]) acc[id] = 0
        acc[id] += (res[id] * amount) / item.yield
      }
      return acc
    }, {})
}

const sortObj = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)),
  )
}

const mdc = storage.reduce((acc, item) => {
  const res = itemBasicResources(item.id, item.amount)

  for (let id of Object.keys(res)) {
    acc[id] = Math.max(res[id], acc[id] || 0)
  }

  return acc
}, {})

console.log(sortObj(mdc))
