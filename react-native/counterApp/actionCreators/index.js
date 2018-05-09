import { INC, DEC } from '../actionTypes';

export const incrementAction = () => { return { type: INC } }
export const decrementAction = () => { return { type: DEC } }