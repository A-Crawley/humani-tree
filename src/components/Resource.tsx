import {ReactNode} from "react";
import formatNumber from "utils/FormatNumber";

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

export default Resource