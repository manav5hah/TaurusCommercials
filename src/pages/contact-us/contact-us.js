import * as React from 'react';
import { Helmet } from 'react-helmet';
function ContactUs() {
    return (
        <>
        <Helmet>
        {/* Primary SEO */}
        <title>Contact Taurus Commercials Pvt Ltd | Ahmedabad Steel Distributors | Get in Touch</title>
        <meta name="description" content="Contact Taurus Commercials Pvt Ltd in Ahmedabad for your iron and steel product needs: address, phone, email, and map included. Fast response and reliable service." />
        <meta name="keywords" content="Contact Taurus Commercials, steel distributor Ahmedabad, iron steel supplier Gujarat, Taurus Commercials address, steel contact Gujarat, SAIL distributor contact" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taurus.ind.in/contact-us" />
        <meta property="og:title" content="Contact Taurus Commercials Pvt Ltd | Ahmedabad Steel Distributors" />
        <meta property="og:description" content="Need steel? Contact Taurus Commercials Pvt Ltd in Ahmedabad for SAIL steel supplies: address, phone, email, and map." />
        <meta property="og:image" content="https://taurus.ind.in/og-image-contactus.webp" />
        <meta property="og:image:alt" content="Taurus Commercials office reception and customer service in Ahmedabad" />
        <meta property="og:site_name" content="Taurus Commercials Pvt Ltd" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://taurus.ind.in/contact-us" />
        <meta name="twitter:title" content="Contact Taurus Commercials Pvt Ltd | Ahmedabad Steel Supplier" />
        <meta name="twitter:description" content="Get in touch with Taurus Commercials: SAIL steel distributor in Ahmedabad. Address, phone, email, and Google Maps link." />
        <meta name="twitter:image" content="https://taurus.ind.in/og-image-contactus.webp" />
        <meta name="twitter:image:alt" content="Contact Taurus Commercials Team Gujarat" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://taurus.ind.in/contact-us" />

        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data: Local Business schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Taurus Commercials Pvt Ltd",
          "image": "https://taurus.ind.in/og-image-contactus.webp",
          "@id": "https://taurus.ind.in/contact-us",
          "url": "https://taurus.ind.in/contact-us",
          "telephone": "+91-9824048871, +91-8758588781",
          "email": "sunil@kamalia.in, kamaliashreyas@gmail.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "B801, Nirman Complex, Opp Havmor restaurant, Navrangpura",
            "addressLocality": "Ahmedabad",
            "postalCode": "380009",
            "addressRegion": "GJ",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.037912,
            "longitude": 72.563592
          },
          "hasMap": "https://maps.app.goo.gl/3erFaxrL4BkFNNDcA",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
          },
          "description": "Contact Taurus Commercials Pvt Ltd for all your iron and steel product needs in Ahmedabad, Gujarat. Address, phone, email, and Google Maps directions included."
        })}</script>
      </Helmet>
        <div>
            <div className="bg-[url('./pages/contact-us/ContactUs.jpg')] bg-center bg-no-repeat relative bg-cover h-[20rem] flex flex-col-reverse">
                <div className='text-white font-extrabold text-center text-2xl p-2'>Contact Us</div>
            </div>
            <div className='flex flex-col md:flex-row sm:flex-row my-8'>
                <div className='w-full 2xl:w-1/2 lg:w-1/2 lg:px-8 px-7'>
                    <p className="my-4 text-lg font-normal text-grey-500 lg:text-lg"><span className='text-[#37427C] font-bold'>Taurus Commercials Private Limited</span> looks forward to serving your iron and steel product needs.</p>

                    <p className="mt-4 text-lg font-normal text-grey-500 lg:text-lg">For inquiries, partnerships, or any other information, please feel free to contact us at:</p>
                    <div className='mt-[1rem] text-lg font-normal text-grey-500 flex'>Address: <a href='https://maps.app.goo.gl/3erFaxrL4BkFNNDcA' target='_blank' className='ml-5'>B801, Nirman
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
        </>
    );
}

export default ContactUs;