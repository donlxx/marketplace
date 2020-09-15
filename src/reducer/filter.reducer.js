import {appConstants} from "../constant";

export const filterReducer = (state =
                                  {
                                      filter: {
                                          year: [2000,2020],
                                          hp: [50, 1000],
                                          hight: [70, 150],
                                          length: [100, 400],
                                          heatingSurface: [1000, 5000],
                                          pressure: [200, 400],
                                          price:[9000,25000]
                                      }

                                  }
    , action
) => {
    // if(action.type === appConstants.searchYear){
    switch (action.type) {
        case appConstants.searchYear:
            state = {...state};
            state.filter.year = [...action.payload];
            // console.log(state);
            return state;

        case appConstants.searchHp:
            state = {...state};
            state.filter.hp = [...action.payload];
            // console.log(state);
            return state;
        case appConstants.searchHight:
            state = {...state};
            state.filter.hight = [...action.payload];
            // console.log(state);
            return state;
        case appConstants.searchLength:
            state = {...state};
            state.filter.length = [...action.payload];
            // console.log(state);
            return state;
        case appConstants.searchHeatingSurface:
            state = {...state};
            state.filter.heatingSurface = [...action.payload];
            // console.log(state);
            return state;
        case appConstants.searchPressure:
            state = {...state};
            state.filter.pressure = [...action.payload];
            // console.log(state);
            return state;
        case appConstants.searchPrice:
            state={...state};
            state.filter.price=[...action.payload];
            return state;
        default:
            return state;

    }


};
