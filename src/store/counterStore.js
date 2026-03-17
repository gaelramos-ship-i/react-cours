import { create } from "zustand";

// On donne un nom à notre store, en général "use" + le nom du store 
export const useCounter = create((set) => ({
    counter: 0,
    increaseCount: () => set((state) => ({ counter: state.counter + 1 })),
    decreaseCount: () => set((state) => ({ counter: state.counter - 1 })),
    updateCounter: (newCount) => set({ counter: newCount })
}))