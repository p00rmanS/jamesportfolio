import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarCheck,
  Compass,
  Download,
  FolderGit2,
  FolderOpen,
  HelpCircle,
  Image as ImageIcon,
  Layers,
  LayoutDashboard,
  Search,
  UserRound,
  Video,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { RESUME_URL, RESUME_DOWNLOAD_NAME, SOCIAL_LINKS } from '@/data/settings'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface Command {
  id: string
  label: string
  icon: LucideIcon
  perform: () => void
}

/** Cmd/Ctrl+K quick-jump palette: fuzzy-free substring search over page sections and a few global actions. */
export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { t } = useI18n()
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  useFocusTrap(containerRef, isOpen, onClose)

  useEffect(() => {
    if (!isOpen) return
    setQuery('')
    setActiveIndex(0)
    const frame = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(frame)
  }, [isOpen])

  const goToSection = useCallback(
    (hash: string) => {
      navigate(`/${hash}`)
      onClose()
    },
    [navigate, onClose],
  )

  const sectionCommands: Command[] = useMemo(
    () => [
      { id: 'work', label: t.nav.work, icon: FolderOpen, perform: () => goToSection('#work') },
      { id: 'videos', label: t.sections.videos.label, icon: Video, perform: () => goToSection('#videos') },
      { id: 'content', label: t.sections.content.label, icon: ImageIcon, perform: () => goToSection('#content') },
      { id: 'automation', label: t.sections.automation.label, icon: Workflow, perform: () => goToSection('#automation') },
      { id: 'services', label: t.nav.services, icon: Layers, perform: () => goToSection('#services') },
      { id: 'process', label: t.nav.process, icon: Compass, perform: () => goToSection('#process') },
      { id: 'about', label: t.nav.about, icon: UserRound, perform: () => goToSection('#about') },
      { id: 'faq', label: t.sections.faq.label, icon: HelpCircle, perform: () => goToSection('#faq') },
      { id: 'booking', label: t.sections.booking.label, icon: CalendarCheck, perform: () => goToSection('#booking') },
    ],
    [t, goToSection],
  )

  const actionCommands: Command[] = useMemo(() => {
    const githubUrl = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url
    const commands: Command[] = [
      {
        id: 'dashboard',
        label: t.dashboard.altViewLabel,
        icon: LayoutDashboard,
        perform: () => {
          navigate('/dashboard')
          onClose()
        },
      },
      {
        id: 'resume',
        label: `${t.about.downloadResume} ${t.nav.resume}`,
        icon: Download,
        perform: () => {
          const link = document.createElement('a')
          link.href = RESUME_URL
          link.download = RESUME_DOWNLOAD_NAME
          link.click()
          onClose()
        },
      },
    ]
    if (githubUrl) {
      commands.push({
        id: 'github',
        label: 'GitHub',
        icon: FolderGit2,
        perform: () => {
          window.open(githubUrl, '_blank', 'noopener,noreferrer')
          onClose()
        },
      })
    }
    return commands
  }, [t, navigate, onClose])

  const normalizedQuery = query.trim().toLowerCase()
  const filteredSections = normalizedQuery
    ? sectionCommands.filter((c) => c.label.toLowerCase().includes(normalizedQuery))
    : sectionCommands
  const filteredActions = normalizedQuery
    ? actionCommands.filter((c) => c.label.toLowerCase().includes(normalizedQuery))
    : actionCommands
  const flatCommands = [...filteredSections, ...filteredActions]

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, flatCommands.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      flatCommands[activeIndex]?.perform()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-paper/80 p-4 pt-[12vh] backdrop-blur-md sm:p-8 sm:pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.commandPalette.placeholder}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg border border-line bg-paper shadow-lg"
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.commandPalette.placeholder}
                className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-muted focus:outline-none"
              />
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {flatCommands.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm text-muted">{t.commandPalette.noResults}</p>
              ) : (
                <>
                  {filteredSections.length > 0 && (
                    <CommandGroup
                      label={t.commandPalette.sectionsGroup}
                      commands={filteredSections}
                      activeIndex={activeIndex}
                      offset={0}
                      onHover={setActiveIndex}
                    />
                  )}
                  {filteredActions.length > 0 && (
                    <CommandGroup
                      label={t.commandPalette.actionsGroup}
                      commands={filteredActions}
                      activeIndex={activeIndex}
                      offset={filteredSections.length}
                      onHover={setActiveIndex}
                    />
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface CommandGroupProps {
  label: string
  commands: Command[]
  activeIndex: number
  offset: number
  onHover: (index: number) => void
}

function CommandGroup({ label, commands, activeIndex, offset, onHover }: CommandGroupProps) {
  return (
    <div>
      <p className="px-4 pb-1 pt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-muted">{label}</p>
      <ul>
        {commands.map((command, i) => {
          const index = offset + i
          const isActive = index === activeIndex
          const Icon = command.icon
          return (
            <li key={command.id}>
              <button
                type="button"
                onClick={command.perform}
                onMouseEnter={() => onHover(index)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-sans text-sm transition-colors ${
                  isActive ? 'bg-surface text-ink' : 'text-muted'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                {command.label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
