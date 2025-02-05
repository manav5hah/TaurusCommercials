import * as React from 'react';
import SailLogo from './sail-logo.svg';
import ShreyasbhaiImage from './shreyasbhai-image.png';
import SunilbhaiImage from './sunilbhai-image.png';

function AboutUs() {
    return (
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
    );
}

export default AboutUs;