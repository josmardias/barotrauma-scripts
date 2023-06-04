import { useMap } from 'react-use'
import Select from 'react-select'
import { toBasicResources } from './barotrauma/util.js'
import { dbList } from './barotrauma/db.js'

const itemUtil = {
  eq: (a, b) => a.id === b.id,
  sort: (a, b) => a - b,
  label: (a) => a.name,
  value: (a) => a.id,
}

export const App = () => {
  const [map, { set }] = useMap()

  const onChange = (selected) => {
    if (!selected) return
    const id = selected.id
    set(id, (map[id] || 0) + 1)
  }

  const list = Object.entries(map).map(([id, amount]) => ({ id, amount }))

  const shopList = toBasicResources(list)

  return (
    <div>
      <label>
        Item to be crafted
        <Select
          name="query"
          onChange={onChange}
          options={dbList}
          isClearable
          getOptionLabel={itemUtil.label}
          getOptionValue={itemUtil.value}
        />
      </label>
      <div>
        <h2>Crafting list</h2>
        {list.length ? (
          list.map(({ id, amount }) => (
            <div key={id}>
              {amount}x {id}
            </div>
          ))
        ) : (
          <div>the list is empty</div>
        )}
      </div>
      <div>
        <h2>Shop list</h2>
        {shopList.length ? (
          shopList.map(({ id, amount }) => (
            <div key={id}>
              {amount}x {id}
            </div>
          ))
        ) : (
          <div>the list is empty</div>
        )}
      </div>
    </div>
  )
}
