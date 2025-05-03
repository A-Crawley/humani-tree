import Time from "types/Time.ts";

export const progressTime = (currentTime?: Time, daysToProgress: number = 1): Time => {
    if (!currentTime) return {season: 'Spring', date: 1, year: 1, totalDays: 1}
    if (daysToProgress <= 0) return currentTime

    while (daysToProgress > 0) {
        currentTime.date++
        daysToProgress--
        if (currentTime.date <= 100) continue
        switch (currentTime.season) {
            case 'Spring':
                currentTime = {date: 1, season: 'Summer', year: currentTime.year, totalDays: currentTime.totalDays + 1}
                break;
            case 'Summer':
                currentTime = {date: 1, season: 'Autumn', year: currentTime.year, totalDays: currentTime.totalDays + 1}
                break;
            case 'Autumn':
                currentTime = {date: 1, season: 'Winter', year: currentTime.year, totalDays: currentTime.totalDays + 1}
                break;
            case 'Winter':
                currentTime = {
                    date: 1,
                    season: 'Spring',
                    year: currentTime.year + 1,
                    totalDays: currentTime.totalDays + 1
                }
                break;
        }
    }
    return currentTime
}