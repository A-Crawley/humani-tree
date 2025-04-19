export const Seasons = ['Spring', 'Summer', 'Autumn', 'Winter'] as const
export type Season = typeof Seasons[number]

export default Season