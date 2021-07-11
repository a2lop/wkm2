import React from 'react'
import Icon from '../common/Icon'

export default function ProductAdmin({ product, className }) {
    return (
        <div className={className}>
            <div className={`bg-white rounded-lg `}>
                <div className="px-3 py-2">
                    {/* <Icon icon="faFacebook" size="3x" /> */}
                    <div className='h-40 flex justify-center mb-2'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" className='h-full'/>
                    </div>
                    <p>Chocolate 100%</p>
                    <p>$2.50</p>
                </div>
                <div className="flex border-t border-gray-300">
                    <button className="w-full py-2 border-r border-gray-300">
                        <Icon icon="faPencilAlt" />
                    </button>
                    <button className="w-full py-2">
                        <Icon icon="faEye" />
                    </button>
                    <button className="w-full py-2 border-l border-gray-300">
                        <Icon icon="faTrash" />
                    </button>
                </div>
            </div>
        </div>
    )
}
