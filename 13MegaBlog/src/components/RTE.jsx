import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name, control, label, defaultValue = ""}) {
  // react rte here
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({field: {onChange}})=>(
          <Editor
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "serachreplace",
                "visualblocks"
              ],
              toolbar: 'undo redo | formatselect | bold italic | underline | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help',
              content_style: "body {font-family: Helvetica, Arial, sans-serif; font-size: 14px }"
            }}
            onEditorChange={onChange}
            
          />
        )}
      />
    </div>
  )
}
