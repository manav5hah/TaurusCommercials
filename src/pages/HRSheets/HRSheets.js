import * as React from 'react';
import { Link } from 'react-router-dom';

function HRSheets() {
    return (
        <div>
            <div className="bg-[url('./pages/HRSheets/HRHeader.jpeg')] bg-center bg-no-repeat relative bg-cover h-[20rem] flex flex-col-reverse">
                <div className='text-white font-extrabold text-center text-2xl p-2'>Hot Rolled Coil/Sheet (HRC)</div>
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                HR coil stands for Hot Rolled coil. Hot rolling is a metalworking process where the metal is heated above its recrystallization temperature and then passed through rollers to achieve the desired thickness and shape. The hot rolling process is typically used to produce larger and thicker metal sheets compared to cold rolling.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                Hot-rolled coils are often used in various industries, including construction, manufacturing, and pipe-making. The hot rolling process imparts different characteristics to the metal compared to cold rolling. Hot-rolled coils generally have a rougher surface finish and a broader range of tolerances in terms of thickness and dimensions. The mechanical properties of hot-rolled steel are also different, with the material often having lower strength but higher ductility compared to cold-rolled steel.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                Like CR coils, HR coils are often supplied in coil form, making them convenient for transportation and further processing in manufacturing facilities. The choice between hot-rolled and cold-rolled coils depends on the specific requirements of the application and the desired properties of the final product.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                At <span className='text-[#37427C] font-bold'>Taurus Commercials Private Limited </span> we have the following range of coils available from two reputed plants of SAIL RSP and BSP.
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify overflow-x-auto'>
                <table className="w-full">
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Grade Designation</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Quality</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' colSpan={5}>Ladle Analysis %, max</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Carbon Equivalent (CE), max</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Method of Deoxidation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>C</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Mn</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>S</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>P</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Si</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>E250</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>BR, B0</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.22</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1.5</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.045</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.045</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.4</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.41</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>Killed</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>E350</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>BR, B0</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.2</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1.55</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.045</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.045</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.45</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>0.47</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>Killed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                We also offer Chequred Coil and sheets at our unit from Steel Authority Of India Limited. They are available in the following sizes:
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                <table className='w-2/5 m-auto'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center'>Thickness</th>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center'>Dimension</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>3</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1250,1500</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>4</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1250,1500</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>5</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1250,1500</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>6</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1250,1500</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>8</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>1250,1500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify'>
                Mechanical Properties of HR coil/Sheets are as follows:
            </div>
            <div className='my-4 text-lg font-normal text-grey-500 lg:text-lg lg:px-8 px-7 text-justify overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Grade Designation</th>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Quality</th>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>Tensile Strength (MPa) min</th>
                            <th className='w-18 p-3 text-sm font-semibold tracking-wide text-center' colSpan={3}>Yield Stress (MPa) Min</th>
                            <th className='w-10 p-3 text-sm font-semibold tracking-wide text-center' rowSpan={2}>%age Elongation A, at Gauge Length, L=5.65 SQRT(SoMin)</th>
                            <th className='w-18 p-3 text-sm font-semibold tracking-wide text-center' colSpan={2}>Internal Bend Diameter Min</th>
                            <th className='w-18 p-3 text-sm font-semibold tracking-wide text-center' colSpan={2}>Charpy Impact Test</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&gt;20</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>20-40</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&lt;40</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&nbsp;</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>25</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>&gt;25</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>Temp</td>
                            <td className='p-3 text-sm text-gray-700 text-center font-semibold'>j.min</td>
                        </tr>
                        <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 text-center'>E250</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>BR</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>410</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>250</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>240</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>230</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>23</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>2t</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>3t</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>RT</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>27</td>
                        </tr>
                        <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 text-center'>E350</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>BR</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>490</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>350</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>330</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>320</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>22</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>2t</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>-</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>RT</td>
                            <td className='p-3 text-sm text-gray-700 text-center'>27</td>
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

export default HRSheets;