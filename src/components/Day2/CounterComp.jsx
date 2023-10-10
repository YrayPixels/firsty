
import React, { useState } from 'react';
import ButtonComp from '../buttonComp';

function CounterComp() {
    const [value, setValue] = useState(10);
    function Addition() {
        setValue(value + 1)
    }
    function Subtract() {
        setValue(value - 1);
    }

    const [visible, setVisible] = useState(true);

    function Hide() {
        setVisible(false);
        console.log('Hide called');
    }
    function Show() {
        setVisible(true);
        console.log('Show called');

    }


    return (
        <>
            <div className='py-5 col-5 m-auto top-25'>
                {/* <p className='display-1 text-center'>{value}</p> */}

                {
                    visible &&
                    <div className='border border-1 rounded mb-3 shadow-sm'>
                        <p className='display-5 text-center'>Hide this box</p>
                    </div>
                }


                <div className='d-flex justify-content-between'>
                    <ButtonComp action={Show} name="show" color="success" size="sm" />

                    <ButtonComp action={Hide} name="hide" color="danger" size="sm" />
                </div>

            </div>
        </>
    )
}

export default CounterComp