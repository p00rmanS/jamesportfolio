import { SOCIAL_LINKS } from '@/data/settings'
import { SocialIcon } from '@/components/ui/SocialIcons'
import { cn } from '@/utils/cn'

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {SOCIAL_LINKS.map(({ platform, url }) => (
        <li key={platform}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${platform} (opens in a new tab)`}
            className="flex h-10 w-10 items-center justify-center transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 focus-visible:-translate-y-0.5"
          >
            <SocialIcon platform={platform} className="h-9 w-9" />
          </a>
        </li>
      ))}
    </ul>
  )
}
