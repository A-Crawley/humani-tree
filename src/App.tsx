import TimeDisplay from "components/TimeDisplay";
import ResourceDisplay from "components/ResourceDisplay";
import EarlyActions from "components/EarlyActions";
import Shop from "components/Shop.tsx";

function App() {
    return (
        <div className='w-full h-full bg-slate-200'>
            <TimeDisplay/>
            <div className='w-full flex h-full'>
                <div className='flex flex-col gap-2 w-2/5 text-sm'>
                    <ResourceDisplay/>
                </div>
                <div className='w-3/5 flex flex-col gap-2 border-l border-slate-900/50 p-2'>
                    <EarlyActions/>
                    <Shop />
                </div>
            </div>
        </div>
    )
}

export default App;