import { createSlice, PayloadAction} from "@reduxjs/toolkit"


export interface IAppState {
    languages: string[]
    isLoading: boolean
}

const initialState: IAppState = {
    languages: [],
    isLoading: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        setLanguage: (state, action: PayloadAction<string[]>) => {
            state.languages = action.payload
        },

        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        reset: (state) => {
            state = initialState
        }
    },
})

export const { setLanguage, setIsLoading, reset } = appSlice.actions
export default appSlice.reducer