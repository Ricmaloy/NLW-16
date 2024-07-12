import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/button'

interface ImportantLinksProps {
  links: Array<{
    id: string
    title: string
    url: string
  }>
  openCreateLinksModal: () => void
}

export function ImportantLinks({
  links,
  openCreateLinksModal,
}: ImportantLinksProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Link importantes</h2>

      <div className="space-y-5">
        {links.map((link) => {
          return (
            <div
              key={link.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {link.title}
                </span>
                <a
                  href="#"
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                >
                  {link.url}
                </a>
              </div>

              <Link2 className="text-zinc-400 size-5" />
            </div>
          )
        })}
      </div>

      <Button onClick={openCreateLinksModal} variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
