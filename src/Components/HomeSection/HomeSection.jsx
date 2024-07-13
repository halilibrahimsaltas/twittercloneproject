import { SpaRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { Formik, useFormik } from 'formik'
import React from 'react'
import * as Yup from'yup'

const validationSchema=Yup.object().shape({
    content:Yup.string().required("Tweer text is required!")
})

const HomeSection = () => {
    const handleSubmit=(values)=>{
        console.log("values",values)
    }
    const formik=useFormik({
        initialValues:{
            content:"",
            image:""
        },
        onSubmit:handleSubmit,
        validationSchema,
    })
  return (
    <div className='space-y-5'>
        <section>
            <h1 className='py-5 text-x1 font-bold opacity-90'>Home</h1>
        </section>
        <section className={'pb-10'}>
            <div className='flex space-x-5'>
                <Avatar alt='username' src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"/>
                <div className='w-full'>
                    <form >
                        <div>
                            <input type="text" name='content' placeholder='What is happening' className={'border-none outline-none text-x1 bg-transparent'}{...formik.getFieldProps("content")} />
                            {formik.errors.content && formik.touched.content && (
                                <span className='text-red-500'>{formik.errors.content}</span>
                            )}

                        </div>
                    </form>

                </div>
            </div>

        </section>
    </div>
  )
}

export default HomeSection