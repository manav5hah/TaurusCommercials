import * as React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import './Enquiry.css'


function Enquiry() {
    const [details, setDetails] = useState({
        name: '',
        contact: '',
        message: ''
    })

    const [capVal, setCapVal] = useState();

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const Inquire = (e) => {
        e.preventDefault();
        send('tauruscommercials', 'enquiry_mail', details, 'xv1G_n4VU97g9uI7w').then(
            (response) => {
                alert("Thank you");
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    }

    return (
        <div>
            <div className="bg-[url('./pages/enquiry/Enquiry.jpg')] bg-center bg-no-repeat relative bg-cover h-[20rem] flex flex-col-reverse">
                <title className='text-white font-extrabold text-center text-2xl p-2'>Enquiry</title>
            </div>
            <form className='m-5 flex justify-center items-center' onSubmit={Inquire}>
                <div className="space-12 w-1/2">
                    <div className="border-gray-900 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input type="text" name="name" id="name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={details.name} onChange={handleChange} required/>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label for="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">+91</span>
                                        <input type="number" name="contact" id="contact" autocomplete="contact" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6" value={details.contact} onChange={handleChange} required/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label for="message" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                                <div className="mt-2">
                                    <textarea id="message" name="message" rows="3" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={details.message} onChange={handleChange} required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <ReCAPTCHA sitekey='6LcuRqspAAAAANebrLssNrTp0RuCxIqCSWECl1ry' onChange={(val) => setCapVal(val)} />
                        </div>
                        <div className='flex justify-center items-center m-5'>
                            <button type='submit' disabled={!capVal} className="px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700 disabled:bg-gray-400" >Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Enquiry;