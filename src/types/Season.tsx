export const Seasons = ['Winter', 'Spring', 'Summer', 'Autumn'] as const
export type Season = typeof Seasons[number]

export default Season