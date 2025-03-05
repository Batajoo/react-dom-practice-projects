import React from 'react'
import {Editor} from '@tinymce/tinymce-react'

export default function RTE() {
  // react rte 
  return (
    <Editor
        initialValue='default value'
        init={{
            branding: false,
            height: 500,
            menubar: true,
            pluigns: []
        }
        }
    />
  )
}
