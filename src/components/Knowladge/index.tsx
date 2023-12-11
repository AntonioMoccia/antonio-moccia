import React from 'react'
import Badge from '../Badge'
import TextGradient from '../TextGradient'

function Knowladges({data}:{data:any}) {

    return (
        <section id='knowladges' className='lg:px-80 pt-20 lg:pt-24 flex justify-start gap-12 flex-col w-full px-5'>
            <h1 className={`uppercase text-2xl font-bold text-white w-full text-center`}>
                <TextGradient>
                    My knowladges
                </TextGradient>
            </h1>
            <div className='flex flex-col items-center justify-center gap-4 w-full '>
                {
                    data.items.map((knowladge : any, index : any) => {
                        return (
                            <Badge key={index} knowladge={knowladge} />
                        )
                    })
                }
            </div>
        </section>
    )
}



export default Knowladges