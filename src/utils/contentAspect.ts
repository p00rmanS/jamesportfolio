import type { ContentPiece } from '@/types/content'

/** Shared between ContentShowcase's grid and its lightbox so both crop media the same way. */
export const ASPECT_BY_ORIENTATION: Record<ContentPiece['orientation'], string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-video',
  square: 'aspect-square',
}
