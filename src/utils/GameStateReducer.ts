import GameState from "types/GameState.ts";
import {Action} from "types/Action.ts";
import {addItemPayload} from "types/AddItemPayload.ts";
import Items from "types/Items.ts";
import add from "utils/Add.ts";
import Time from "types/Time.ts";
import {Buildings, BuildingType, BuildingTypes} from "types/Buildings.ts";
import Human from "types/Humans.ts";

const addItems = (items?: Items, payload?: addItemPayload) => {
    if (!payload) return items
    if (!items) items = {} as Items
    if (!items[payload.key]) items[payload.key] = {amount: 0, multiplier: 1}
    items[payload.key]!.amount = add(items[payload.key]!.amount, payload.amount)
    return items
}

const progressTime = (currentTime?: Time, daysToProgress: number = 1) : Time => {
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

const calculateOccupants = (buildings?: Record<BuildingType, number>) => {
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

const generateHuman = () => {
    return {
        name: 'Human'
    } as Human
}

const gameStateReducer = (state: GameState, action: Action) => {
    switch (action.type) {
        case 'initialSet': {
            const payload = action.payload as { state: GameState, lastSave: number }
            if (typeof payload.state.time === 'number') payload.state.time = undefined
            const now = Date.now()
            if (now > payload.lastSave) {
                let daysToAdd = Math.floor((now - payload.lastSave) / 2500)
                if (daysToAdd > 4000) daysToAdd = 4000
                document.dispatchEvent(new CustomEvent<number>('daysAddedSinceLastSave', {detail: daysToAdd}))
                return {...payload.state, time: progressTime(payload.state.time,daysToAdd)}
            }
            return payload.state
        }
        case 'addItem':
            return {...state, items: addItems(state.items, action.payload as addItemPayload)}
        case 'gameTick':
            // Do things
            return state;
        case 'timeTick':
            return {...state, time: progressTime(state.time)}
        case 'addHuman':{
            const totalHumansAllowed = calculateOccupants(state.buildings)
            if ((state.humans?.length ?? 0) >= totalHumansAllowed) return state
            return {...state, humans: [...(state.humans ?? []), generateHuman()]};
        }
        case 'removeHuman':{
            if (!state.humans) return state
            return {...state, humans: state.humans.slice(1)};
        }
        case 'buyBuilding': {
            const {buildingType} = action.payload as { buildingType: BuildingType }
            if (!buildingType || !BuildingTypes.includes(buildingType)) return state

            switch (buildingType) {
                case 'shack':
                    if ((state.items?.sticks?.amount ?? 0) < Buildings.shack.cost) break;
                    return {
                        ...state,
                        items: {
                            ...state.items,
                            sticks: {amount: state.items!.sticks!.amount - Buildings.shack.cost, multiplier: state.items!.sticks!.multiplier}
                        },
                        buildings: {
                            ...state.buildings ?? {},
                            shack: (state.buildings?.shack ?? 0) + 1
                        }
                    }
            }

            return state;
        }
        default:
            return state;
    }
}

export default gameStateReducer