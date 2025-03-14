import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from "../"
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)
    const submit = async (data) => {
        if(post){
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null;

            if(file){
                appwriteService.deleteFile(post.featuredImage);
            }
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default PostForm
