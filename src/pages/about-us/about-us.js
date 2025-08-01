import * as React from 'react';
import { Helmet } from 'react-helmet';
import SailLogo from './sail-logo.svg';
import ShreyasbhaiImage from './shreyasbhai-image.png';
import SunilbhaiImage from './sunilbhai-image.png';

function AboutUs() {
    return (
        <>
            <Helmet>
                {/* Primary SEO */}
                <title>About Taurus Commercials Pvt Ltd | Gujarat’s Trusted Steel Distributor | Company Profile</title>
                <meta name="description" content="Learn about Taurus Commercials Pvt Ltd – over 30 years of experience in the iron and steel industry, strong leadership, SAIL partnership, expertise in flat and long steel products, and a nationwide reputation for reliability and quality." />
                <meta name="keywords" content="About Taurus Commercials, company profile, steel distributor Gujarat, SAIL steel dealer, iron and steel company India, trusted steel supplier, industry experience, leadership, Sunil Kamalia, Shreyas Kamalia" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#003366" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://taurus.ind.in/about" />
                <meta property="og:title" content="About Taurus Commercials Pvt Ltd | Trusted SAIL Steel Distributor Gujarat" />
                <meta property="og:description" content="Discover the story, vision, SAIL partnership, and leadership behind Taurus Commercials Pvt Ltd. Serving Gujarat and India with quality steel products for 30+ years." />
                <meta property="og:image" content="https://taurus.ind.in/og-image-about.webp" />
                <meta property="og:image:alt" content="Taurus Commercials leadership team & warehouse" />
                <meta property="og:site_name" content="Taurus Commercials Pvt Ltd" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://taurus.ind.in/about" />
                <meta name="twitter:title" content="About Taurus Commercials Pvt Ltd | Company Profile & Leadership" />
                <meta name="twitter:description" content="Taurus Commercials Pvt Ltd – Over 30 years of iron & steel expertise, SAIL partnership, and a legacy of trust. Meet our team and learn our mission." />
                <meta name="twitter:image" content="https://taurus.ind.in/og-image-about.webp" />
                <meta name="twitter:image:alt" content="Taurus Commercials Pvt Ltd About Us Gujarat" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://taurus.ind.in/about" />

                {/* Favicon and Manifest */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />

                {/* Structured Data: Local Business schema */}
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Taurus Commercials Pvt Ltd",
                    "image": "https://taurus.ind.in/og-image-about.webp",
                    "@id": "https://taurus.ind.in/about",
                    "url": "https://taurus.ind.in/about",
                    "telephone": "+91-8758588781", // Use actual phone
                    "priceRange": "$$",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "B801, Nirman Complex",
                        "addressLocality": "Ahmedabad",
                        "postalCode": "380009",
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
                    "description": "Taurus Commercials Pvt Ltd: Trusted distributor with 30+ years experience, partner to SAIL, and expert in all steel products for customers nationwide."
                })}</script>
            </Helmet>
            <div>
                <div className="bg-[url('./pages/about-us/AboutUs.jpg')] bg-center bg-no-repeat relative bg-cover h-[20rem] flex flex-col-reverse">
                    <div className='text-white font-extrabold text-center text-2xl p-2'>About Us</div>
                </div>
                <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify '>
                    <span className='text-[#37427C] font-bold'>Taurus Commercials Private Limited </span>
                    is a well-established company with
                    over 30 years of experience in the
                    iron and steel industry. Based in
                    Gujarat, India, we specialise in the
                    distribution and trading of both flat
                    and long steel products. Our
                    extensive business reach spans
                    across the entire nation, making us
                    a trusted name in the industry.</div>
                <div className='my-6 text-xl font-extrabold text-[#37427C] lg:text-lg lg:px-8 px-7'>
                    Our Partnership
                </div>
                <div>
                    <div className='my-2 text-[#37427C] text-lg font-bold lg:px-8 px-7' >
                        Steel Authority Of India Limited (SAIL)
                    </div>
                    <div className='flex flex-col md:flex-row sm:flex-row'>
                        <div className='w-full lg:w-4/5  my-2 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                            Taurus Commercials Private Limited
                            proudly holds an MOU (Memorandum
                            of Understanding) with Steel Authority
                            Of India Limited (SAIL), one of India's
                            leading steel producers. This strategic
                            partnership allows us to offer a wide
                            range of high-quality steel products
                            sourced directly from SAIL. Our
                            commitment to quality and excellence is
                            reflected in our association with this
                            esteemed organisation.
                        </div>
                        <div className='w-1/5 hidden lg:flex justify-center'>
                            <img src={SailLogo} className='w-[10rem]' />
                        </div>
                    </div>
                </div>
                <div className='my-6 text-xl font-extrabold text-[#37427C] lg:text-lg lg:px-8 px-7'>
                    Leadership
                </div>
                <div className='lg:px-8 px-7 my-2'>
                    <div className='flex my-5'>
                        <div className='w-full lg:w-4/5 text-lg font-normal text-grey-500 text-justify'>
                            <span className='font-bold text-[#37427C]'> Mr. Sunil Kamalia (Founder & Managing Director)</span>, the visionary founder of Taurus Commercials Private
                            Limited, has been at the helm of the company since its inception.
                            With his decades of industry experience and unwavering
                            dedication, he has steered the company to its current position of
                            prominence.
                        </div>
                        <div className='w-1/5 hidden lg:flex justify-center'>
                            <img src={SunilbhaiImage} className='w-[10rem]' />
                        </div>
                        {/* <div className='w-1/5 hidden lg:flex'>
                        <img src={SunilbhaiImage} />
                    </div> */}
                    </div>
                    <div className='flex my-5'>
                        <div className='w-full lg:w-4/5 text-lg font-normal text-grey-500 text-justify'>
                            <span className='font-bold text-[#37427C]'> Mr. Shreyas Kamalia (Director)</span>, the son of
                            Mr. Sunil Kamalia, has joined the family business and is actively
                            working alongside his father to uphold the company's legacy and
                            drive it towards new heights of success. His fresh perspective and
                            innovative ideas complement the company's strong foundation.</div>
                        <div className='w-1/5 hidden lg:flex justify-center'>
                            <img src={ShreyasbhaiImage} className='w-[10rem]' />
                        </div>
                    </div>
                </div>
                <div className='my-6 text-xl font-extrabold text-[#37427C] lg:text-lg lg:px-8 px-7'>
                    Mission and Vision
                </div>
                <div className=''>
                    <div className='w-full  my-2 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                        At Taurus Commercials Private Limited, our mission is to consistently provide
                        high-quality steel products, uphold ethical business practices, and meet the
                        evolving needs of our customers. We envision becoming a leading force in
                        the iron and steel industry, recognised for our commitment to excellence and
                        customer satisfaction.
                    </div>
                    <div className='w-full  my-2 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                        <span className='text-xl font-bold text-[#37427C] lg:text-lg' >Quality Assurance: </span>Quality is at the core of everything we do. We adhere to stringent quality control measures
                        throughout our supply chain to ensure that our customers receive steel products that meet
                        the highest industry standards.
                    </div>
                    <div className='w-full  my-2 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                        <span className='text-xl font-bold text-[#37427C] lg:text-lg' >Clientele: </span>Our extensive client base includes a wide range of industries, such as construction,
                        manufacturing, infrastructure development, and more. We take pride in serving our clients
                        with dedication and reliability.
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;