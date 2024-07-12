/* eslint-disable camelcase */
import { Link, Tag, X } from 'lucide-react'
import { Button } from '../../components/button'
import { FormEvent } from 'react'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

interface CreateLinksModalProps {
  closeCreateLinksModal: () => void
}

export function CreateLinksModal({
  closeCreateLinksModal,
}: CreateLinksModalProps) {
  const { tripId } = useParams()

  async function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()
    console.log({ title, url })

    await api.post(`/trips/${tripId}/links`, { title, url })

    window.document.location.reload()
  }

  return (
    <div className="fixed w-screen h-screen inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button type="button" onClick={closeCreateLinksModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar os links
          </p>
        </div>

        <form onSubmit={createLink} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />

            <input
              type="text"
              name="title"
              placeholder="Qual o assunto"
              className="flex-1 bg-transparent text-md placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link className="text-zinc-400 size-5" />

            <input
              type="text"
              name="url"
              placeholder="Qual a url"
              className="flex-1 bg-transparent text-md placeholder-zinc-400 outline-none"
            />
          </div>

          <Button variant="primary" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  )
}