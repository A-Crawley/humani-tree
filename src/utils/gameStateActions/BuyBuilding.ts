import GameState from "types/GameState.ts";
import {Buildings, BuildingType, BuildingTypes} from "types/Buildings.ts";

export const buyBuilding = (state: GameState, buildingType: BuildingType) => {
    if (!buildingType || !BuildingTypes.includes(buildingType)) return state
    switch (buildingType) {
        case 'shack':
            if ((state.items?.sticks?.amount ?? 0) < Buildings.shack.cost) break;
            return {
                ...state,
                items: {
                    ...state.items,
                    sticks: {
                        amount: state.items!.sticks!.amount - Buildings.shack.cost,
                        multiplier: state.items!.sticks!.multiplier
                    }
                },
                buildings: {
                    ...state.buildings ?? {},
                    shack: (state.buildings?.shack ?? 0) + 1
                }
            }
    }

    return state;
}