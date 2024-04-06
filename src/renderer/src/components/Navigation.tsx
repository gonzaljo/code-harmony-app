import { VscTools, VscHome, VscCode, VscSymbolConstant, VscTypeHierarchy } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { RootState } from '@renderer/store'
import { useSelector } from 'react-redux'

function Navigation(): JSX.Element {
  const linkStyles = 'hover:cursor-pointer flex justify-center text-zinc-500'
  const linkStylesActive = 'hover:cursor-pointer flex justify-center text-zinc-200'

  const activeSelector = useSelector((state: RootState): boolean => {
    return state.codeHarmony.path !== undefined
  })

  console.log(activeSelector)

  const styles = (active): string => {
    return active ? linkStylesActive : linkStyles
  }

  const navitems = [
    { icon: <VscTools className="w-8 h-8 hover:text-zinc-100" />, title: 'Configuration', to: '/' },
    { icon: <VscHome className="w-8 h-8 hover:text-zinc-100" />, title: 'Home', to: '/app' },
    { icon: <VscCode className="w-8 h-8 hover:text-zinc-100" />, title: 'Codes', to: '/codes' },
    {
      icon: <VscSymbolConstant className="w-8 h-8 hover:text-zinc-100" />,
      title: 'Texts',
      to: '/texts'
    },
    {
      icon: <VscTypeHierarchy className="w-8 h-8 hover:text-zinc-100" />,
      title: 'Code References',
      to: '/refs'
    }
  ]

  return (
    <ul>
      {activeSelector && (
        <>
          {navitems.map((item, index) => (
            <li key={index} className="text-center pt-2" title={item.title}>
              <NavLink className={({ isActive }) => styles(isActive)} to={item.to}>
                {item.icon}
              </NavLink>
            </li>
          ))}
        </>
      )}
    </ul>
  )
}

export default Navigation
