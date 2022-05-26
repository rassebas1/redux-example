import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
        console.log(state.value);
      
            state.value++

        
    },
    decrement(state) {
        console.log(state.value);
       
            state.value--

        
    },
    incrementByAmount(state, action: PayloadAction<number>) {
        console.log(action);
        
            state.value=state.value+action.payload
            console.log(state.value);
            
    },
    getCounterState(state){
        return state
    }
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer