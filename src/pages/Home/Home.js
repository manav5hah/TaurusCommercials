import * as React from 'react';
import { Link } from 'react-router-dom';
import HomeSide from './HomeLeft.jpg';
import SailInfinity from './SailInfinity.jpeg';

function Home() {
    return (
        <div>
            <div className="bg-[url('./pages/Home/HomeHeader.jpeg')] bg-center bg-no-repeat relative bg-cover h-[20rem] flex flex-col-reverse">
                <div className='text-white font-extrabold text-center text-2xl p-2'>SAIL TMT Bars: Ab Nishchint Ho Jayein</div>
            </div>
            <div className='flex flex-col md:flex-row sm:flex-row my-8 lg:px-8 px-7 mr-3'>
                <div className='w-full lg:flex justify-center mx-3'>
                    <img src={HomeSide} />
                </div>
                <div className='w-full my-4 mx-3 text-lg font-normal text-grey-500 lg:text-lg text-justify'>
                    SAIL TMT bars are premium quality construction materials manufactured by Steel Authority of India Limited (SAIL), one of the largest steel-making companies in India. Engineered through an advanced Thermo Mechanical Treatment process, SAIL TMT bars provide exceptional strength, durability, and resistance to corrosion, making them the ideal choice for all types of construction projects. As an authorized distributor for SAIL SEQR TMT Fe550D, we ensure that you receive genuine, high-quality TMT bars that meet your construction needs. Our commitment to quality and customer satisfaction makes us your trusted partner in building strong and safe structures.
                </div>
            </div>
            <div className='my-6 mx-3 text-xl font-extrabold text-[#37427C] lg:text-lg lg:px-8 px-7'>
                Why Choose SAIL TMT Bars?
            </div>
            <ol className='my-4 mx-3 lg:px-14 px-7 text-justify list-decimal'>
                <li className='my-1'><span className='text-[#37427C] font-bold'>Superior Strength:</span> SAIL TMT bars are known for their high tensile strength, ensuring that your structures can withstand heavy loads and stresses.</li>
                <li className='my-1'><span className='text-[#37427C] font-bold'>Enhanced Flexibility:</span> The unique manufacturing process of SAIL TMT bars imparts excellent ductility and bend ability, allowing for easy shaping and use in various construction applications.</li>
                <li className='my-1'><span className='text-[#37427C] font-bold'>Corrosion Resistance:</span> These bars are treated to resist corrosion, making them suitable for use in humid and coastal areas, as well as for long-lasting durability in various environmental conditions.</li>
                <li className='my-1'><span className='text-[#37427C] font-bold'>Earthquake Resistance:</span> The superior strength and flexibility of SAIL TMT bars provide better shock absorption during seismic activities, making your buildings safer and more resilient.</li>
                <li className='my-1'><span className='text-[#37427C] font-bold'>Cost-Effective:</span> With their long-lasting durability and minimal maintenance requirements, SAIL TMT bars offer an economical solution for all your construction needs.</li>
                <li className='my-1'><span className='text-[#37427C] font-bold'>Quality Assurance:</span> AIL, with its decades of experience and state-of-the-art manufacturing facilities, ensures that each TMT bar adheres to the highest quality standards and industry specifications.</li>
            </ol>
            <div className='my-6 text-xl font-extrabold text-[#37427C] lg:text-lg lg:px-8 px-7 text-center'>
                Rationalised Sizes of SAIL SeQR TMT bars
            </div>
            <div className='my-4 mx-3 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
            <div className='flex flex-col md:flex-row sm:flex-row'>
                <table className='w-full m-auto py-5'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center'>Size (in mm)</th>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center'>Weight (in kg/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>8</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.395</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>10</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.617</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>12</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.888</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>16</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1.58</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>20</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>2.47</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>25</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>3.85</td>
                        </tr>
                    </tbody>
                </table>
                <div className='w-full flex justify-center py-5'>
                    <img className='w-[18rem] ' src={SailInfinity} />
                </div>
                </div>
            </div>
            <div className='my-6 text-xl font-extrabold text-[#37427C] lg:text-lg lg:px-8 px-7 text-center'>
                SAIL SEQR Fe550D TMT Bars: Chemical and Mechanical Properties
            </div>
            <div className='text-lg font-bold text-[#37427C] my-2 lg:px-8 px-7 mx-3'>
                Chemical Properties (Ladle analysis in %):
            </div>
            <div className='my-4 text-lg mx-3 font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify overflow-x-auto'>
                <table className="w-full">
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >Element</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >IS: 1786-2008<br/>Fe-500D</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >IS: 1786-2008<br/>Fe-550D</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >SAIL SeQR<br/>Fe-550D<br/>(Typical values)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Carbon (C) (max.)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.25</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.25</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.25</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Sulphur (S) (max.)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.040</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.040</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.035</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Phosphorus (P) (max.)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.040</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.040</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.035</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>S+P (max.)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.075</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.075</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.070</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-lg font-bold text-[#37427C] my-2 lg:px-8 px-7 mx-3'>
                Mechanical Properties:
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 mx-3 text-justify overflow-x-auto'>
                <table className="w-full">
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >Parameter</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >IS: 1786-2008<br/>Fe-500D</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >IS: 1786-2008<br/>Fe-550D</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' >SAIL SeQR<br/>Fe-550D<br/>(Typical values)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>YS, MPa (min.)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>500</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>500</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>500</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Tensile Strength, MPa (min.)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>565</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>600</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>15% higher than YS</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>UTS/YS ratio (min.)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1.10</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1.08</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1.15</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Total Elongation (min.) (GL=5.65 &#8730;Ao)</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>16.0</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>14.5</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>16.0</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Bend test min mandrel dia</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>For nominal dia upto 20mm</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>3d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>4d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>3d</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>For nominal dia above 20mm</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>4d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>5d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>4d</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Rebend mandrel dia upto 10mm</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>4d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>6d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>5d</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>Rebend mandrel dia above 10mm to 20mm</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>6d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>7d</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>6d</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg  text-justify px-7 mx-4'>
                These properties ensure that SAIL SEQR Fe550D TMT bars provide the highest level of performance, reliability, and safety for your construction projects.
            </div>

            <div className='flex items-center justify-center'>
                <Link to="/enquiry" className="px-4 py-2 my-3 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700" >Enquiry</Link>
            </div>

        </div>
    );
}

export default Home;