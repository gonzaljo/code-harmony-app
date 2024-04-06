import { PropsWithChildren } from 'react'

function Content({ children }: PropsWithChildren): JSX.Element {
  return (
    <section id="content" className="bg-zinc-100 flex-grow p-2 overflow-y-scroll">
      {children}
    </section>
  )
}

export default Content
