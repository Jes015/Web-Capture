import { RecordControls, RecordData, RecordVideo } from '.'

export const RecordContent = () => {
  return (
        <div
            className="relative overflow-hidden h-full"
        >
            <RecordVideo />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col p-1 gap-1 pt-2 z-10'>
                <RecordData />
                <RecordControls />
            </div>
        </div>
  )
}
