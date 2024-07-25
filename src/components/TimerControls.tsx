interface TimerControlsProps {
  isActive: boolean
  isPause: boolean
  onTogglePlay: () => void
  onCancel: () => void
}

export function TimerControls({ isActive, isPause, onTogglePlay, onCancel }: TimerControlsProps) {
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={onTogglePlay}
        className="w-56 bg-red-400 dark:bg-love dark:text-text py-2 px-12 rounded-full font-bold shadow-sm shadow-red-400 dark:shadow-love">
        {isPause ? 'Start' : 'Pause'}
      </button>
      <button
        onClick={onCancel}
        className={`w-56 bg-white dark:bg-overlay dark:text-love text-red-400 py-2 px-12 rounded-full shadow-sm dark:shadow-overlay
          transition-transform ease-out ${isActive ? 'scale-1' : 'scale-0 '}`}>
        Cancel
      </button>
    </div>

  )
}

