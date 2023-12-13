'use client'
import React, { useEffect, useRef, useState } from 'react'
import TextGradient from '../TextGradient'
import { sendContactForm } from '../../../lib/api'
import { CiCircleCheck } from "react-icons/ci";

import Toast from '../Toast'

export type FormProps = {
    values: {
        name: string,
        email: string,
        text: string,
        number: string,
        subject: string
    }
}
export type onDeleteProps = {
    current: string,
    prev: string
}
export type onInsertProps = {
    current: string,
    prev: string
}
export type CheckInputChangeProps = {
    current: string,
    prev: string,
    onDelete?: (props: onDeleteProps) => void
    onInsert?: (props: onInsertProps) => void
}

function Contacts() {
    const [formData, setFormData] = useState<FormProps>({
        values: {
            name: '',
            email: '',
            text: '',
            number: '',
            subject: ''
        }
    })
    const [] = useState(false)

    const { values: { name, email, text, subject, number } } = formData
    const textAreaRef = useRef(null)


    function checkInputChange({ current, prev, onDelete, onInsert }: CheckInputChangeProps) {
        if (current.length > prev.length) {
            onInsert && onInsert({ current, prev })
        } else if (current.length < prev.length) {
            onDelete && onDelete({ current, prev })
        }
    }
    function autoResize(e: any) {
        const MIN_HEIGHT = 176
        checkInputChange({
            current: e.target.value,
            prev: text,
            onDelete: ({ prev, current }) => {
                e.target.style.height = 'auto'

                if (e.target.scrollHeight > MIN_HEIGHT) {
                    e.target.style.height = e.target.scrollHeight + 'px';
                    console.log('if');

                } else {
                    console.log('else');
                    e.target.style.height = MIN_HEIGHT + 'px';
                }
            },
            onInsert: ({ prev, current }) => {
                if (e.target.scrollHeight > MIN_HEIGHT) {
                    e.target.style.height = e.target.scrollHeight + 'px';
                } else {
                    e.target.style.height = MIN_HEIGHT + 'px';
                }

            }
        })
    }
    const onChange = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((initialState: FormProps) => ({
            ...initialState, values: {
                ...initialState.values,
                [name]: value
            }
        }))

    }

    return (
        <section id="experiences" className='lg:px-48 flex flex-col lg:flex-row md:px-36 w-full pt-24 px-5'>
            <div className='lg:w-1/2'>
            <h1 className={`uppercase text-2xl font-bold text-white w-full text-left`}>
                    <TextGradient>
                        Contact me
                    </TextGradient>
                </h1>
            </div>
            {/* <Toast variant='success' text='Email inviata!' icon={<CiCircleCheck className=' text-lg' />} /> */}
            <div className=' w-full flex flex-col lg:w-1/2 '>
                <form className='flex flex-col gap-6' onSubmit={async (e) => {
                    e.preventDefault()

                    try {
                        const response = await sendContactForm(formData)
                    } catch (error) {
                        console.log(error);

                    }
                }}>
                    <div>
                        <label className=' text-white' htmlFor='name'>Name</label>
                        <input onChange={onChange} type='text' className='mt-2 h-12 rounded-sm w-full bg-[rgb(34,34,34)] text-white' id='name' name='name' value={name} />
                    </div>
                    <div>
                        <label className=' text-white' htmlFor='email'>Your email</label>
                        <input onChange={onChange} type='email' className='mt-2 h-12 rounded-sm w-full bg-[rgb(34,34,34)] text-white' id='email' name='email' value={email} />
                    </div>
                    <div>
                        <label className=' text-white' htmlFor='number'>Your number</label>
                        <input onChange={onChange} type='number' className='mt-2 h-12 rounded-sm w-full bg-[rgb(34,34,34)] text-white' id='number' name='number' value={number} />
                    </div>
                    <div>
                        <label className=' text-white' htmlFor='subject'>Subject</label>
                        <input onChange={onChange} type='text' className='mt-2 h-12 rounded-sm w-full bg-[rgb(34,34,34)] text-white' id='subject' name='subject' value={subject} />
                    </div>
                    <div>
                        <label className=' text-white' htmlFor='text'>Tell me about your idea</label>
                        <textarea
                            onChange={onChange}
                            onInput={(e: any) => {
                                autoResize(e)
                            }} ref={textAreaRef} className='mt-2 h-44 rounded-sm w-full bg-[rgb(34,34,34)] text-white' id='text' name='text' value={text} />
                    </div>
                    <div>
                        <button className=' bg-gradient-to-tl from-[rgb(255,134,96)] to-[rgb(128,0,255)] text-white px-5 py-2 rounded-full mt-6 '>
                            Invia
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contacts