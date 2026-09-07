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
            className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:-translate-y-0.5"
          >
            <SocialIcon platform={platform} className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}
