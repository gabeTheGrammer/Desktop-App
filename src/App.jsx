
import './styles/App.css'
import Clock from './component/Clock'
import ThemeMode from './component/ThemeMode';

function App() {

  return (
    <div className='main-app h-95/100 w-screen grid grid-cols-3 text-foreground'>

      <div className='flex flex-col h-full'>
        <div className='flex-1 rounded-lg flex items-center justify-center border-solid border-2 border-(--border-color) overflow-hidden'>
          <Clock />
        </div>
        <div className='flex-1 rounded-lg flex items-center justify-center border-solid border-2 border-(--border-color) overflow-hidden'>
          <Clock />
        </div>
      </div>

      <div className='flex flex-col h-full col-span-2'>
        <div className='flex-1 rounded-lg flex items-center justify-center  border-solid border-2 border-(--border-color) overflow-hidden'>
          <Clock />
        </div>
        <div className='flex-1 rounded-lg flex w-full border-solid border-2 border-(--border-color) overflow-hidden'>
          <ThemeMode />
        </div>
        <div className='flex-1 rounded-lg flex items-center justify-center  border-solid border-2 border-(--border-color) overflow-hidden'>
          <Clock />
        </div>
      </div>
      
      
    </div>
  )
}

export default App
