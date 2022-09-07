import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { themeColors } from '../data/dummy'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import { rgbToHex } from '@syncfusion/ej2/treemap'

const ThemeSettings = () => {
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400'>
      <div className='flex justify-between items-center p-4 ml-4'>
        <p className='font-semibold text-lg'>Setting</p>
        <button type="button" onClick={()=>{}} style={{color:'rgb(153, 171, 180)', borderRadius:'50%'}} className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-grey">
          <MdOutlineCancel/>
        </button>

      
      </div>
      <div className='flex-col border-t-1 border-color p-4 ml-4'>
        <p className='font-semibold text-xl'>Theme Options</p>
        <div>
          <input type="radio" id="light" name="theme" value="light" className="cursor-pointer" onChange={()=>{}} checked={true}/>
          <label htmlFor='light' className='ml-2 text-md cursor-pointer'>light</label>
        </div>
      </div>
      </div>
      </div>
  )
}

export default ThemeSettings