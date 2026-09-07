import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 font-sans text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-offset-4'

const variants: Record<Variant, string> = {
  primary: 'border border-ink text-ink hover:bg-ink hover:text-paper',
  secondary: 'border border-line text-ink hover:border-accent hover:text-accent',
  ghost: 'text-ink hover:text-accent',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  icon?: boolean
  className?: string
}

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

/** Shared CTA button/link. Pass `href` to render an anchor, omit it for a <button>. */
export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = 'primary', children, icon = true, className, ...rest } = props
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if ('href' in props && props.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={props.href} className={cn(base, variants[variant], className)} {...anchorProps}>
        {content}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={cn(base, variants[variant], className)} {...buttonProps}>
      {content}
    </button>
  )
}
