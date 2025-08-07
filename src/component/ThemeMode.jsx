import { useState, useEffect } from "react"

const themes = [
    { class: "light", label: "Bright"},
    { class: "dark-theme", label: "Dark"},
    { class: "pink-theme", label: "Lover"},
]

export default function ThemeMode() {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        
    document.documentElement.classList.remove(...themes.map(t => t.class))
    document.documentElement.classList.add(themes[index].class)
  }, [index])

  const increment = () => {
    setIndex((prev) => (prev + 1) % themes.length)
  }

  const decrement = () => {
    setIndex((prev) => (prev - 1 + themes.length) % themes.length)
  }

    return (
        <div className="h-full w-full flex flex-col justify-between">
            <button className="w-full text-[var(--text-color)] border-solid border-2 border-white bg-transparent  hover:bg-gray-500 hover:opacity-60" onClick={increment}>∧</button>
            <h1 className="w-full text-[var(--text-color)]">Mode: {themes[index].label}</h1>
            <button className="w-full text-[var(--text-color)] border-solid border-2 border-white bg-transparent  hover:bg-gray-500 hover:opacity-60" onClick={decrement}>∨</button>
        </div>
    )
}