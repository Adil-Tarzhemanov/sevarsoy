import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IPickerDates } from "../../types/rangePicker.types";
import dayjs from "dayjs";

interface RangePickerState {
  dates: any;
  numbers: any;
  numbersInfo: any;
  // extraInfo: any;
}

const initialState: RangePickerState = {
  dates: [dayjs(Date()).format("DD.MM.YY"), dayjs(Date()).format("DD.MM.YY")],
  numbers: [
    {
      index: 1,
      adults: 2,
      childs: 0,
      isDeleteNumber: false,
      mattress: 0,
      nutrition: 0,
      type: "none",
    },
  ],
  numbersInfo: [],
  // extraInfo: [
  //   {
  //     index: 1,
  //     mattress: 0,
  //     nutrition: 0,
  //     countQuests: 1,
  //   },
  //   {
  //     index: 2,
  //     mattress: 0,
  //     nutrition: 0,
  //     countQuests: 1,
  //   },
  //   {
  //     index: 3,
  //     mattress: 0,
  //     nutrition: 0,
  //     countQuests: 1,
  //   },
  // ],
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
    typeSelection(state, action) {
      state.numbers[action.payload.id].type = action.payload.type;
    },
    getNumbersInfo(state, action) {
      state.numbersInfo = action.payload;
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
            adults: Math.max(1, number.adults - 1),
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
            childs: Math.max(0, number.childs - 1),
          };
        }
        return number;
      });
    },
    increaseExtraMattress(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((element: any, i: any) => {
        if (i === index) {
          return {
            ...element,
            mattress: Math.min(2, element.mattress + 1),
          };
        }
        return element;
      });
    },
    decreaseExtraMattress(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((element: any, i: any) => {
        if (i === index) {
          return {
            ...element,
            mattress: Math.max(0, element.mattress - 1),
          };
        }
        return element;
      });
    },
    increaseExtraNutrition(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((element: any, i: any) => {
        if (i === index) {
          return {
            ...element,
            nutrition: Math.min(10, element.nutrition + 1),
          };
        }
        return element;
      });
    },
    decreaseExtraNutrition(state, action) {
      const index = action.payload;
      state.numbers = state.numbers.map((element: any, i: any) => {
        if (i === index) {
          return {
            ...element,
            nutrition: Math.max(0, element.nutrition - 1),
          };
        }
        return element;
      });
    },
    // increaseExtraMattress(state, action) {
    //   const index = action.payload;
    //   state.extraInfo = state.extraInfo.map((element: any, i: any) => {
    //     if (i === index) {
    //       return {
    //         ...element,
    //         mattress: Math.min(2, element.mattress + 1),
    //       };
    //     }
    //     return element;
    //   });
    // },
    // decreaseExtraMattress(state, action) {
    //   const index = action.payload;
    //   state.extraInfo = state.extraInfo.map((element: any, i: any) => {
    //     if (i === index) {
    //       return {
    //         ...element,
    //         mattress: Math.max(0, element.mattress - 1),
    //       };
    //     }
    //     return element;
    //   });
    // },
    // increaseExtraNutrition(state, action) {
    //   const index = action.payload;
    //   state.extraInfo = state.extraInfo.map((element: any, i: any) => {
    //     if (i === index) {
    //       return {
    //         ...element,
    //         nutrition: Math.min(10, element.nutrition + 1),
    //       };
    //     }
    //     return element;
    //   });
    // },
    // decreaseExtraNutrition(state, action) {
    //   const index = action.payload;
    //   state.extraInfo = state.extraInfo.map((element: any, i: any) => {
    //     if (i === index) {
    //       return {
    //         ...element,
    //         nutrition: Math.max(0, element.nutrition - 1),
    //       };
    //     }
    //     return element;
    //   });
    // },
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
  increaseExtraMattress,
  decreaseExtraMattress,
  increaseExtraNutrition,
  decreaseExtraNutrition,
  typeSelection,
  getNumbersInfo,
} = RangePickerSlice.actions;

export const selectCount = (state: RootState) => state.rangePickerReducer;

export default RangePickerSlice.reducer;
