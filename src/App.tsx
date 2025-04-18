import TimeDisplay from "components/TimeDisplay";
import ResourceDisplay from "components/ResourceDisplay";
import EarlyActions from "components/EarlyActions";

function App() {
    return (
        <div className='w-screen h-screen bg-slate-200'>
            <TimeDisplay/>
            <div className='w-full flex h-full'>
                <div className='flex flex-col gap-2 w-2/5 text-sm'>
                    <ResourceDisplay/>
                </div>
                <div className='w-3/5 flex flex-col gap-2 border-l border-slate-900/50 p-2'>
                    <EarlyActions/>
                </div>
            </div>
        </div>
    )
}

export default App;