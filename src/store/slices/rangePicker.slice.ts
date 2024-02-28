import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IPickerDates } from "../../types/rangePicker.types";
import dayjs from "dayjs";

interface RangePickerState {
  dates: any;
  numbers: any;
}

const initialState: RangePickerState = {
  dates: [dayjs(Date()).format("DD.MM.YY"), dayjs(Date()).format("DD.MM.YY")],
  numbers: [
    {
      index: 1,
      adults: 2,
      childs: 0,
      isDeleteNumber: false,
    },
  ],
};

export const RangePickerSlice = createSlice({
  name: "rangePicker",
  initialState,
  reducers: {
    pickerDates(state, action: PayloadAction<IPickerDates[]>) {
      state.dates = action.payload;
    },
    addNumber(state, action) {
      state.numbers = [...state.numbers, action.payload];
    },
    deleteNumber(state, action) {
      state.numbers = [...state.numbers].filter(
        (number) => number.index !== action.payload,
      );
    },
    increaseAdults(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((number: any, i: any) => {
        if (i === index) {
          return {
            ...number,
            adults: Math.min(2, number.adults + 1),
          };
        }
        return number;
      });
    },
    decreaseAdults(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((number: any, i: any) => {
        if (i === index) {
          return {
            ...number,
            adults: Math.max(1, number.adults - 1), // чтобы не стало отрицательным
          };
        }
        return number;
      });
    },
    increaseChilds(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((number: any, i: any) => {
        if (i === index) {
          return {
            ...number,
            childs: Math.min(2, number.childs + 1),
          };
        }
        return number;
      });
    },
    decreaseChilds(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((number: any, i: any) => {
        if (i === index) {
          return {
            ...number,
            childs: Math.max(0, number.childs - 1), // чтобы не стало отрицательным
          };
        }
        return number;
      });
    },
  },
});

export const {
  pickerDates,
  addNumber,
  deleteNumber,
  increaseAdults,
  decreaseAdults,
  increaseChilds,
  decreaseChilds,
} = RangePickerSlice.actions;

export const selectCount = (state: RootState) => state.rangePickerReducer;

export default RangePickerSlice.reducer;
