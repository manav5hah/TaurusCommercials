import * as React from 'react';
function ContactUs() {
    return (
        <div>
            <div className="bg-[url('./pages/contact-us/ContactUs.jpg')] bg-center bg-no-repeat relative bg-cover h-[20rem] flex flex-col-reverse">
                <div className='text-white font-extrabold text-center text-2xl p-2'>Contact Us</div>
            </div>
            <div className='flex flex-col md:flex-row sm:flex-row my-8'>
                <div className='w-full 2xl:w-1/2 lg:w-1/2 lg:px-8 px-7'>
                    <p className="my-4 text-lg font-normal text-grey-500 lg:text-lg"><span className='text-[#37427C] font-bold'>Taurus Commercials Private Limited</span> looks forward to serving your iron and steel product needs.</p>

                    <p className="mt-4 text-lg font-normal text-grey-500 lg:text-lg">For inquiries, partnerships, or any other information, please feel free to contact us at:</p>
                    <div className='mt-[1rem] text-lg font-normal text-grey-500 flex'>Address: <a href='https://maps.app.goo.gl/3erFaxrL4BkFNNDcA' target='_blank' className='ml-5'>B704, Nirman
                        Complex,<br /> Opp Havmor
                        restaurant,<br /> Navranpura,<br />
                        Ahmedabad 380009</a></div>
                    <div className='mt-[1rem] text-lg font-normal text-grey-500 flex'>Phone: <div className='ml-[1.88rem] block'>(+91)9824048871 (+91)8758588781</div></div>
                    <div className='mt-[1rem] text-lg font-normal text-grey-500 flex'>Email: <div className='ml-[2.4rem] block'>sunil@kamalia.in kamaliashreyas@gmail.com</div></div>
                </div>
                <div className='w-full h-[20.5rem] lg:px-8 px-7 2xl:w-1/2 lg:w-1/2 '>
                    <iframe src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6147733726243!2d72.56359230967293!3d23.03791247907612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f538500001%3A0x4a0cf75ddec83bf2!2sNirman%20complex!5e0!3m2!1sen!2sin!4v1708605335563!5m2!1sen!2sin" className='w-full h-full mt-7 pb-1' referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;