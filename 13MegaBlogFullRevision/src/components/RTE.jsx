import React from 'react'
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"

export default function RTE({name, control, label, defaultValue = ""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>
            {label}    
        </label>}
        <Controller
            name={name || "content"}
            control={control}
            render={({field: {onChange}})=>(
                <Editor
                    initialValue={defaultValue}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'image',
                            'advlist',
                            'autolink',
                            'lists',
                            'image',
                            'charmap',
                            'preview',
                            'anchor',
                            'searchreplace',
                            'visualblocks',
                            'code',
                            'fullscreen',
                            'insertdatetime',
                            'media'
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft \
                        aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify \
                        bullist numlist outdent indent removeformat | help"
                    }}
                    onEditorChange={onChange}
                />
            )}

        />
    </div>
  )
}

