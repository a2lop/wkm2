import React, { useState, useRef, useEffect } from 'react'
// import ReactTooltip from 'react-tooltip'
import Icon from './Icon'
import LabelDefault from './LabelDefault'
// import { useForm } from 'react-hook-form'

export default function ImagePicker({
    className,
    error,
    isOptional,
    label,
    name,
    register,
    tooltipText,
    value,
    selectedImage
}) {
    // const { watch } = useForm()

    // const selectedImage = watch('productImage')
    const [imageUrl, setImageUrl] = useState()

    const imagePicker = useRef()

    // useEffect(() => {
    //     if (selectedImage) {
    //         console.log('==== selectedImage', selectedImage)
    //         setImageUrl(URL.createObjectURL(e.target.files[0]))
    //     }
    // }, [selectedImage])

    // const getClasses = () => {
    //     if (type === 'secondary') {
    //         return ''
    //     }
    //     return 'bg-gray-300 border-2 border-gray-300 py-2 px-1 rounded-lg w-full'
    // }
    return (
        <div className={`mb-2 ${className}`}>
            {label && <LabelDefault text={label} isOptional={isOptional} tooltipText={tooltipText} />}
            {!selectedImage && (
                <Icon
                    icon="faCamera"
                    size="6x"
                    onClick={() => {
                        imagePicker.current.click()
                    }}
                    color="#d1d5da"
                />
            )}
            {selectedImage && <img alt="producto" className="max-h-custom w-full" src={imageUrl} />}
            <input
                ref={register}
                name={name}
                value={value}
                accept="image/*"
                type="file"
                className="hidden"
                ref={ref => {
                    register(ref)
                    imagePicker.current = ref
                }}
                onChange={e => {
                    setImageUrl(URL.createObjectURL(e.target.files[0]))
                }}
            />
            {error && (
                <div>
                    <p className="text-red-400">{error.message || ' Este campo es requerido'}</p>
                </div>
            )}
        </div>
    )
}
