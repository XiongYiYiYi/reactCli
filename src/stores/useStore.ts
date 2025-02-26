import { create } from 'zustand'

// 定义 store 的状态类型
interface BearState {
  bears: number
  increase: (by: number) => void
  decrease: (by: number) => void
  reset: () => void
}

// 创建 store
const useStore = create<BearState>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  decrease: (by) => set((state) => ({ bears: state.bears - by })),
  reset: () => set({ bears: 0 }),
}))

export default useStore