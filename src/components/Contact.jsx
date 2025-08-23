import React from 'react'

export const Contact = () => {
  return (
    <div id='contact' className='border-b border-neutral-900 pb-20 mt-30'>
        <h1 className='my-10 text-center text-4xl font-bold text-white' data-aos="fade-up" data-aos-duration="1000">Let's Get In Touch</h1>
        <div className='text-center tracking-tighter' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
            <form action="https://formsubmit.co/pagardin.michael@gmail.com" method="POST" className='bg-zinc-800 p-10 w-full mx-auto rounded-md'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium'>Your Name</label>
                        <input type="text" name="nama" placeholder="Name" required
                        className='border border-zinc-500 p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium'>Email</label>
                        <input type="email" name="email" placeholder="Email" required
                        className='border border-zinc-500 p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="pesan" className='font-medium'>Message</label>
                        <textarea name="pesan" id="pesan" cols="45" rows="5" placeholder="Message" required
                        className='border border-zinc-500 p-2 rounded-md'></textarea>
                    </div>
                    <div>
                        <button type='submit' className='bg-amber-400 rounded-lg border border-zinc-600 hover:bg-amber-300 w-full cursor-pointer p-3 text-white'>Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
