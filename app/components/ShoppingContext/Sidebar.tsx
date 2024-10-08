import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    header: string | (() => React.ReactNode)
    children: React.ReactNode
    setOpenedSidebar: React.Dispatch<React.SetStateAction<string>>
    selected: boolean
}

const Sidebar = ({ header, children, setOpenedSidebar, selected }: Props) => {
    return (
        <div className={`fixed right-0 top-0 h-screen w-full sm:w-2/3 md:w-1/2 xl:w-1/3 bg-background rounded-tl-2xl rounded-bl-2xl px-24 pt-24 pb-64 z-50
        transition-all duration-1000 ease-in-out ${selected ? '' : 'translate-x-full'}`}>
            <div className='flex justify-between items-center'>
                {typeof header === 'string' && <h2 className='font-medium text-heading leading-body'>{header}</h2>}
                {typeof header !== 'string' && header()}
                <CloseIcon onClick={() => {setOpenedSidebar('')}} style={{ cursor: 'pointer' }}></CloseIcon>
            </div>
            {children}
        </div>
    )
}

export default Sidebar
