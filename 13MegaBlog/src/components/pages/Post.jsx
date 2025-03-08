import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"
import appWriteService from '../../appwrite/conf'
import { Button, Container} from "../index"
import parse from "html-react-parser"
import { useSelector } from 'react-redux'

function Post() {
    const [post, setPost] = useState(null);
    const {slug} = useParam();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData)
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(()=>{
        if(slug){
            appWriteService.getPost(slug).then((post)=>{
                if(post) setPost(post);
                else navigate("/");
            })
        }
    }, [slug, navigate])

    const deletePost = () => {
        appWriteService.deletePost(post.$id).then((status)=>{
            if(status){
                appWriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default Post
