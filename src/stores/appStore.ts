import { create } from 'zustand'

export const useAppStore = create((set) => ({
  placeholder: true,
  setPlaceholder: (val: boolean) => set({ placeholder: val }),
}))
