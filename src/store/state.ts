import {Plant, Answer} from './types/index'

export type State = {
    loading: boolean;
    plants: Plant[];
    currentPlant: Plant | undefined;
    historyOfAnswers: Answer[]
};
export const state: State = {
    loading: false,
    plants: [],
    currentPlant: undefined,
    historyOfAnswers: []
};