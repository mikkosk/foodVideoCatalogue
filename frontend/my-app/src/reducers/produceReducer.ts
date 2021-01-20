import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produce } from '../types';

const initialState: ProduceState = {produce: {}}

const produceSlice = createSlice({
    name: 'produce',
    initialState,
    reducers: {
        setProduce(state, action: PayloadAction<Produce[]>) {
        const produce: Produce[] = action.payload
        if(!action.payload || action.payload.length === 0) {
            return state
        }
        console.log(produce)
        return {...state, produce: {...state.produce, ...produce.reduce((memo, pro: Produce) => ({...memo, [pro.id]: pro}), {})}}
        }
    }
})


export interface ProduceState {
    produce: { [id: number]: Produce},
}

export const { setProduce } = produceSlice.actions
export default produceSlice.reducer