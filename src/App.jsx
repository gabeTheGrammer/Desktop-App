import { useState, useEffect } from "react";
import Clock from './component/Clock';
import ThemeMode from './component/ThemeMode';
import Notes from './component/NOtes';
import Agenda from './component/Agenda';
import './styles/App.css'

const themes = [
  { class: "light", label: "Bright", wallpaper: "/wallpaper-light.jpg" },
  { class: "dark-theme", label: "Dark", wallpaper: "/wallpaper.jpg" },
  { class: "pink-theme", label: "Lover", wallpaper: "/wallpaper-pink.jpg" },
];

function App() {
  const [index, setIndex] = useState(1);

  useEffect(() => {

    document.documentElement.classList.remove(...themes.map(t => t.class));
    document.documentElement.classList.add(themes[index].class);

/*
    fetch('http://localhost:8080/changeWallpaper', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: themes[index].wallpaper }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.Ok) {
          console.log('Wallpaper changed successfully');
        } else {
          console.error('Failed to change wallpaper');
        }
      })
      .catch(err => console.error('Error calling wallpaper API:', err));
      */
    }, [index]);

  return (
    <div className='main-app h-full w-screen grid grid-cols-3 text-foreground'>

      <div className='flex flex-col h-full'>
        <div className='flex-1 rounded-lg flex items-center justify-center border-solid border-2 border-(--border-color) overflow-hidden'>
          <Clock />
        </div>
        <div className='flex-1 rounded-lg flex items-center justify-center border-solid border-2 border-(--border-color) overflow-hidden'>
          <Notes />
        </div>
      </div>

      <div className='flex flex-col h-full col-span-2'>
        <div className='flex-1 rounded-lg flex items-center justify-center border-solid border-2 border-(--border-color) overflow-hidden'>
          <img src={themes[index].wallpaper} alt="Wallpaper" className="w-full h-full object-cover" />
        </div>
        <div className='flex-1 rounded-lg flex w-full border-solid border-2 border-(--border-color) overflow-hidden'>
          <ThemeMode index={index} setIndex={setIndex} />
        </div>
        <div className='flex-1 rounded-lg flex items-center justify-center border-solid border-2 border-(--border-color) overflow-hidden'>
          <Agenda />
        </div>
      </div>
    </div>
  );
}

export default App;
