interface TimerControlsProps {
  isActive: boolean
  onTogglePlay: () => void
  onCancel: () => void
}

export function TimerControls({ isActive, onTogglePlay, onCancel }: TimerControlsProps) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onTogglePlay}
        className="w-56 bg-red-400 py-2 px-12 rounded-full font-bold">
        {!isActive ? 'Start' : 'Pause'}
      </button>
      <button
        onClick={onCancel}
        className={`w-56 bg-white text-red-400 py-2 px-12 rounded-full
          transition-transform ease-out ${isActive ? 'scale-1' : 'scale-0 '}`}>
        Cancel
      </button>
    </div>

  )
}

