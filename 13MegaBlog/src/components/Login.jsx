import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin, logout} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    // need to revise how to use redux toolkit and navigate as well and read the docs of useForm
    const naviagate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async
  return (
    <div>Login</div>
  )
}

export default Login