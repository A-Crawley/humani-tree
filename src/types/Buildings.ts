export type Building = {
    cost: number
}

export const BuildingTypes = ['shack'] as const
export type BuildingType = typeof BuildingTypes[number]

export const Buildings = {
    shack: {
        cost: 10,
    }
} as const as Record<BuildingType, Building>