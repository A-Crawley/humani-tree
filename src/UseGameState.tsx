import {ReactNode, useCallback, useMemo,} from 'react'
import {useCookies} from "react-cookie";

import GameState from 'types/GameState';
import Items from "types/Items";
import Button from "components/Button";

const add = (x: number, y: number) => Number.parseFloat((x + y).toFixed(2))
const subtract = (x: number, y: number) => Number.parseFloat((x - y).toFixed(2))


const useGameState = () => {
    const [cookies, setCookie] = useCookies(['gameState'])
    const gameState = useMemo(() => {
        if (!cookies.gameState)
            return {time: 0, items: {}, humans: []} as GameState

        return cookies.gameState as GameState
    }, [cookies.gameState])

    document.addEventListener('gameTick', () => {
        if (!gameState.time) gameState.time = 0
        gameState.time++
        setCookie('gameState', gameState)
    })

    const save = useCallback(() => {
        setCookie('gameState', gameState)
    }, [gameState, setCookie])

    const time = useMemo(() => gameState.time, [gameState.time])
    const items = useMemo(() => gameState.items, [gameState.items])

    const addItem = useCallback((key: keyof Items, amount: number) => {
        if (!gameState.items) gameState.items = {} as Items
        if (!gameState.items[key]) gameState.items[key] = {amount: 0, multiplier: 1}
        gameState.items[key].amount = add(gameState.items[key].amount, amount)
        setCookie('gameState', gameState)
    }, [gameState, setCookie])

    const removeItem = useCallback((key: keyof Items, amount: number) => {
        if (!gameState.items) gameState.items = {} as Items
        if (!gameState.items[key]) gameState.items[key] = {amount: 0, multiplier: 1}
        gameState.items[key].amount = subtract(gameState.items[key].amount,amount)
        setCookie('gameState', gameState)
    }, [gameState, setCookie])

    return {time, items, addItem, removeItem, save}
}

const Seasons = ['Winter', 'Spring', 'Summer', 'Autumn'] as const
type Season = typeof Seasons[number]

type Time = {
    season: Season,
    date: number,
    year: number,
}

const convertTime = (time: number) => {
    const season = Seasons[Math.floor(time / 100) % Seasons.length]
    const year = Math.floor(time / (100 * Seasons.length)) + 1
    const date = (time % 99) + 1
    return {season, date, year} as Time
}

const formatDate = (date: number) => {
    const lastDigit = date % 10
    switch (lastDigit) {
        case 1:
            return `${date}st`
        case 2:
            return `${date}nd`
        case 3:
            return `${date}rd`
        default:
            return `${date}th`
    }
}

const TimeDisplay = () => {
    const {time} = useGameState()

    const {season, date, year} = useMemo(() => convertTime(time ?? 0), [time])

    return (
        <div className='p-3'>
            <div className='flex gap-2 items-center'>
                <p className='w-[35px]'>{formatDate(date)}</p>
                <p>day of {season} {formatDate(year)} year</p>
            </div>
        </div>
    )
}

const formatNumber = (number: number) => {
    if (number < 1000) return number.toFixed(2)
    if (number < 1000000) return (number / 1000).toFixed(1) + 'k'
    return (number / 1000000).toFixed(1) + 'm'
}

const Resource = ({label, amount, per = ''}: { label: string, amount: number, per?: ReactNode }) => {
    return (
        <div className='grid grid-cols-2 gap-2 nth-1:border-t border-b border-slate-900/50 p-2 w-full'>
            <div className='flex'><p className='ml-auto'>{label}:</p></div>
            <div className='flex flex-col'>
                <div className='ml-auto'><p>{formatNumber(amount)}</p></div>
                <div className='ml-auto'>{per}</div>
            </div>
        </div>
    )
}

const ResourceDisplay = () => {
    const {items} = useGameState()

    return (
        <div className='p-3 flex-col gap-2 w-full'>
            <Resource label='Sticks' amount={items?.sticks?.amount ?? 0}/>
            <Resource label='Berries' amount={items?.berries?.amount ?? 0}/>
        </div>
    )
}

const EarlyActions = () => {
    const {addItem} = useGameState()
    return (
        <>
            <Button variant='m' onClick={() => addItem('sticks', 1)}>Gather Sticks</Button>
            <Button variant='m' onClick={() => addItem('berries', 1)}>Gather Berries</Button>
        </>
    )
}

function UseGameState() {
    return (
        <div className='w-screen h-screen bg-slate-200'>
            <TimeDisplay/>
            <div className='w-full flex h-full'>
                <div className='flex flex-col gap-2 w-2/5 text-sm'>
                    <ResourceDisplay/>
                </div>
                <div className='w-3/5 flex flex-col gap-2 border-l border-slate-900/50 p-2'>
                    <EarlyActions />
                </div>
            </div>
        </div>
    )
}

export default UseGameState
