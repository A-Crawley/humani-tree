import {BuildingType} from "types/Buildings.ts";

export const calculateOccupants = (buildings?: Record<BuildingType, number>) => {
    let totalHumanOccupants = 0;

    for (const buildingType in buildings) {
        switch (buildingType as BuildingType) {
            case 'shack':
                totalHumanOccupants += buildings[buildingType as BuildingType]
                break;
        }
    }

    return totalHumanOccupants;
}