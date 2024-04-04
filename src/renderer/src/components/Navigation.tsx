import { VscTools, VscHome, VscCode, VscSymbolConstant, VscTypeHierarchy } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'

function Navigation(): JSX.Element {
  const linkStyles = 'hover:cursor-pointer flex justify-center text-zinc-500'
  const linkStylesActive = 'hover:cursor-pointer flex justify-center text-zinc-200'

  const styles = (active): string => {
    return active ? linkStylesActive : linkStyles
  }

  return (
    <ul>
      <li className="text-center pt-2">
        <NavLink className={({ isActive }) => styles(isActive)} to="/">
          <VscTools className="w-8 h-8 hover:text-zinc-100" title="Configuration" />
        </NavLink>
      </li>
      <li className="text-center pt-2" title="Home">
        <NavLink className={({ isActive }) => styles(isActive)} to="/app">
          <VscHome className="w-8 h-8 hover:text-zinc-100" />
        </NavLink>
      </li>
      <li className="text-center pt-2" title="Codes">
        <NavLink className={({ isActive }) => styles(isActive)} to="/codes">
          <VscCode className="w-8 h-8 text-zinc-500 hover:text-zinc-100" />
        </NavLink>
      </li>
      <li className="text-center pt-2" title="Texts">
        <NavLink className={({ isActive }) => styles(isActive)} to="/texts">
          <VscSymbolConstant className="w-8 h-8 text-zinc-500 hover:text-zinc-100" />
        </NavLink>
      </li>
      <li className="text-center pt-2" title="Code References">
        <NavLink className={({ isActive }) => styles(isActive)} to="/refs">
          <VscTypeHierarchy className="w-8 h-8 text-zinc-500 hover:text-zinc-100" />
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation
