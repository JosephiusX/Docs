import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

// creating store
const useBearStore = create((set) => ({
  bears: 0, // initial state
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })), // Increase Action
  removeAllBears: () => set({ bears: 0 }), // Remove Action
}))

export const BearCounter = () => {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

export const Controls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}


  const state = useBearStore()
 
  const [nuts, honey] = useBearStore(
    (state) => [state.nuts, state.honey],
    shallow
  )

  // const treats = useBearStore(
  //   (state) => state.treats,
  //   (oldTreats, newTreats) => compare(oldTreats, newTreats)
  // )

  return console.log({nuts},{treats})


