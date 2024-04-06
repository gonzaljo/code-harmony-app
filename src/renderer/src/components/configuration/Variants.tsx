import { RootState } from '@renderer/store'
import { setTextVariants } from '@renderer/store/configuration'
import { ITextVariant } from '@shared/model/configuration'
import { useState } from 'react'
import { VscEdit, VscNewFile,  VscSave, VscTrash } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Variants(): JSX.Element {
  const variants = useSelector((state: RootState) => state.configuration.textVariants)
  const dispatch = useDispatch()

  const [variant, setVariant] = useState<ITextVariant | undefined>(undefined)

  const handleEdit = (id: string): void => {
    variants
      .filter((variant) => variant.id === id)
      .forEach((variant) => {
        setVariant(variant)
      })
  }

  const newVariantHandler = (): void => {
    const newVariant = {
      id: '',
      mimeType: 'text/plain',
      length: 20,
      default: false
    }
    document.getElementById('varId')?.focus()
    setVariant(newVariant)
  }

  const saveVariantHandler = (): void => {
    if (variant === undefined) return

    const newVariants = variants.filter((v) => v.id !== variant.id)
    newVariants.push(variant)
    dispatch(setTextVariants(newVariants))
    setVariant(undefined)
  }

  const changeHander = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (variant === undefined) return
    const res = { ...variant }
    switch (event.target.id) {
      case 'varId':
        res.id = event.target.value
        break
      case 'mimeType':
        res.mimeType = event.target.value
        break
      case 'length':
        res.length = parseInt(event.target.value)
        break
      case 'default':
        res.default = event.target.checked
        break
    }
    setVariant(res)
  }

  /*
  id: string
  mimeType: string
  length: number
  default: boolean
  */
  return (
    <>
      <div className="bg-indigo-300 mt-4 mb-1">
        <h1 className="text-xl">Text Variants</h1>
      </div>
      <p className="pb-2 text-sm">
        Text variants are types of text you define for your application. You can have short, medium
        or long texts for examples, all of these will have it&apos;s own maximum length. One text
        variant must be the default text variant, code harmony supports you, to keep the default
        text variant in the default locale always set with a value
      </p>
      <table className="pl-2 datatable w-[60%]">
        <thead>
          <tr>
            <th>Edit</th>
            <th>Id</th>
            <th>mimeType</th>
            <th>Length</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, index) => (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
              <td>
                <button
                  className="bg-zinc-950 hover:bg-zinc-300 text-white font-bold py-1 px-2 rounded ml-2"
                  onClick={() => handleEdit(variant.id)}
                >
                  <VscEdit />
                </button>
                <button
                  className="bg-zinc-950 hover:bg-zinc-300 text-white font-bold py-1 px-2 rounded ml-1"
                  onClick={() => handleEdit(variant.id)}
                >
                  <VscTrash />
                </button>
              </td>
              <td>{variant.id}</td>
              <td>{variant.mimeType}</td>
              <td>{variant.length}</td>
              <td>{variant.default ? 'Yes' : 'No'}</td>
            </tr>
          ))}
          <tr className={variants.length % 2 === 0 ? 'odd' : 'even'}>
            <td>
              <button
                className="bg-zinc-950 hover:bg-zinc-300 text-white font-bold py-1 px-2 rounded ml-2"
                onClick={() => newVariantHandler()}
              >
                <VscNewFile />
              </button>
            </td>
            <td colSpan={4}></td>
          </tr>
        </tbody>
      </table>
      {variant && (
        <>
          <div className="bg-indigo-300 my-4">
            <h1 className="text-xl ">Edit Variant</h1>
          </div>
          <table className="datatable w-[60%]">
            <thead>
              <tr>
                <th>Id</th>
                <th>mimeType</th>
                <th>Length</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <td>
                  <input
                    id="varId"
                    type="text"
                    value={variant.id}
                    onChange={(event) => changeHander(event)}
                  />
                </td>
                <td>
                  <input
                    id="mimeType"
                    type="text"
                    value={variant.mimeType}
                    onChange={(event) => changeHander(event)}
                  />
                </td>
                <td>
                  <input
                    id="length"
                    type="number"
                    value={variant.length}
                    onChange={(event) => changeHander(event)}
                  />
                </td>
                <td className="text-center">
                  <input
                    id="default"
                    type="checkbox"
                    value={variant.default + ''}
                    onChange={(event) => changeHander(event)}
                  />
                </td>
              </tr>
              <tr className="even">
                <td>
                  <button
                    className="bg-indigo-950 hover:bg-indigo-300 text-white font-bold py-1 px-2 rounded ml-2"
                    onClick={() => saveVariantHandler()}
                  >
                    <VscSave />
                  </button>
                  <button
                    className="bg-indigo-950 hover:bg-indigo-300 text-white font-bold py-1 px-2 rounded ml-1"
                    onClick={() => setVariant(undefined)}
                  >
                    <VscTrash />
                  </button>
                </td>
                <td colSpan={3}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

export default Variants
