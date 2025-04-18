import {useMemo} from "react";
import convertTime from "utils/ConvertTime";
import formatDate from "utils/FormatDate";
import useGameState from "hooks/UseGameState";

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

export default TimeDisplay