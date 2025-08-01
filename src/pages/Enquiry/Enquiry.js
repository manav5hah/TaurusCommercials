import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
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
        <>
        <Helmet>
        {/* Primary SEO */}
        <title>Contact Taurus Commercials Pvt Ltd | Enquiry for SAIL TMT Bars & Steel in Ahmedabad</title>
        <meta name="description" content="Contact Taurus Commercials Pvt Ltd in Ahmedabad for enquiries about SAIL SEQR Fe550D TMT bars, construction steel supplies, pricing, and expert support. Fast, genuine, and IS:1786-certified solutions for all your construction needs." />
        <meta name="keywords" content="Contact Taurus Commercials, enquiry SAIL TMT Ahmedabad, steel supplier Gujarat, Fe550D contact, construction steel dealer, IS:1786 distributor, Gujarat steel enquiry" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />

        {/* Open Graph (Facebook/WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taurus.ind.in/contact" />
        <meta property="og:title" content="Contact Taurus Commercials Pvt Ltd | SAIL TMT Bars Enquiry Ahmedabad" />
        <meta property="og:description" content="Get in touch with Taurus Commercials Pvt Ltd for SAIL SEQR Fe550D steel, construction solutions, and expert assistance in Ahmedabad. Genuine products, transparent pricing, and fast service." />
        <meta property="og:image" content="https://taurus.ind.in/og-image-contact.webp" />
        <meta property="og:image:alt" content="Contact Taurus Commercials — Office & Team in Ahmedabad" />
        <meta property="og:site_name" content="Taurus Commercials Pvt Ltd" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://taurus.ind.in/contact" />
        <meta name="twitter:title" content="Contact Taurus Commercials Pvt Ltd | Enquiry for SAIL TMT Bars & Steel" />
        <meta name="twitter:description" content="Enquire with Taurus Commercials Pvt Ltd today. Expert response and best SAIL TMT bar deals in Gujarat." />
        <meta name="twitter:image" content="https://taurus.ind.in/og-image-contact.webp" />
        <meta name="twitter:image:alt" content="Contact Taurus Commercials Gujarat" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://taurus.ind.in/contact" />

        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data: Local Business schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Taurus Commercials Pvt Ltd",
          "image": "https://taurus.ind.in/og-image-contact.webp",
          "@id": "https://taurus.ind.in/contact",
          "url": "https://taurus.ind.in/contact",
          "telephone": "+91-8758588781", // Replace with your real number
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "B801, Nirman Complex Here",
            "addressLocality": "Ahmedabad",
            "postalCode": "380009", // Update if needed
            "addressRegion": "GJ",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.0225,
            "longitude": 72.5714
          },
          "sameAs": [
            "https://www.facebook.com/YourPage",
            "https://www.instagram.com/YourPage",
            "https://www.linkedin.com/company/YourPage"
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
          },
          "description": "Contact Taurus Commercials for authorized SAIL TMT bars, steel supplies, and construction expertise in Ahmedabad."
        })}</script>
      </Helmet>
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
        </>
    );
}

export default Enquiry;