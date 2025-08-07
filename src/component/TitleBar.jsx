import "../styles/TitleBar.css";

export default function TitleBar() {
    const handleClose = () => {
        if (window.electronAPI?.closeApp) {
            window.electronAPI.closeApp()
        }
    }
    return (
        <div className="title-bar-wrapper">
        <div className="title-bar">
            <h3 className="left">Title</h3>
            <button className="right" onClick={handleClose}>X</button>
        </div>
        </div>
    )
}