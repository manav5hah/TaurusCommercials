import * as React from 'react';
import { Link } from 'react-router-dom';

function CRSheets() {
    return (
        <div>
            <div className="bg-[url('./pages/cr-sheets/CRHeader.jpg')] bg-center bg-no-repeat relative bg-cover h-[20rem] flex flex-col-reverse">
                <div className='text-white font-extrabold text-center text-2xl p-2'>Cold Rolled Coil/Sheet (CRC)</div>
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                Cold rolling is a process used in the production of steel or metal products where the metal is rolled at room temperature or below its recrystallization temperature. This process enhances the strength, surface finish, and dimensional accuracy of the metal.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                Cold-rolled coils are often used in various industries, including automotive, construction, and appliances, where high-quality and precise metal sheets are required. The cold rolling process involves passing the metal through a series of rollers to reduce its thickness and improve its mechanical properties.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                CR coils are known for their smooth surface finish and uniform thickness, making them suitable for applications that require tight tolerances and a high-quality appearance. The term "coil" indicates that the metal is usually supplied in coil form, which is a long, continuous strip wound into a coil for easier handling and processing in manufacturing facilities.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                At <span className='text-[#37427C] font-bold'>Taurus Commercials Private Limited </span> we deal with the following thickness and grade offered by Steel Authority of India Limited.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify overflow-x-auto'>
                <table className="w-full">
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Grade</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Mill</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' colSpan={2}>Thickness (mm)</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' colSpan={2}>Width (mm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Min</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Max</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Min</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Max</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>IS 513 CR2/3</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>CRM III</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.6</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>2.0</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>900</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1320</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                The Chemical properties in the above-mentioned grade are as follows:
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify overflow-x-auto'>
                <table className="w-full">
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Grade</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Carbon</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Manganese</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Sulphur</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Phosphorus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>%Max</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>%Max</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>%Max</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>%Max</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>CR2</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.12</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.50</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.035</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.040</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>CR3</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.10</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.45</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.030</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                Mechanical Properties of CR coil/Sheets are as follows:
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify overflow-x-auto'>
                <table className="w-full">
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Grade</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Yield point, mPa, Max</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Tensile Strength mPa, Max</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' colSpan={2}>Minimum Elongation</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Test Direction</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Gauge Length 80mm</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Gauge Length 50mm</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>CR2</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>240</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>370</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>30</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>31</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>&nbsp;</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>CR3</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>220</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>350</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>34</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>35</td>
                            <td className='p-3 text-sm text-gray-700 text-center'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex items-center justify-center'>
            <Link to="/enquiry" className="px-4 py-2 my-3 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700" >Enquiry</Link>
            </div>
        </div>
    );
}

export default CRSheets;