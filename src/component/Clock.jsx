import ClockTime from "./ClockParts/ClockTime";
import ClockFace from "./ClockParts/ClockFace";

export default function Clock() {
    const date = getTodaysDateFormatted();
    return (
        <div className="clock-wrapper flex flex-col h-full gap-y-8">
            <div className="date-top h20/100 text-(--text-color)">
                <p>{date}</p>
            </div>
            <div className="clock-face-div h-60/100">
                <ClockFace />
            </div>
            <div className="digital-clock">
                <ClockTime />
            </div>
        </div>
    )
}

function getTodaysDateFormatted() {
    const date = new Date();

    const formatted = date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    })
    
    return formatted
}