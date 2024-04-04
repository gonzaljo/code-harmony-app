import { PropsWithChildren } from 'react'

function Header({ children }: PropsWithChildren): JSX.Element {
  return (
    <header className="bg-indigo-950 max-h-60 border-l border-l-indigo-700 shadow-md">
      {children}
    </header>
  )
}

export default Header
