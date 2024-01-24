import React, { useState } from "react";
import { Field } from 'formik';

interface SelectOption {
    label: string,
    value: any;
    description?: string
}

interface SelectProps {
    options: SelectOption[],
    style: React.CSSProperties,
    name: string
}


const Select = ({ options, style, name }: SelectProps) => {

    // const [selectObj, setSelectObj] = useState({})



    return (

        <>

            <div className={`${'input-dropdown'}`} style={style}>

                {options.map((v, i) => {
                    return (
                        <button className="input-dropdown-item" key={i} value={v.value}>
                            {v.label}
                        </button>
                    )
                })}
            </div>
        </>
    )
}


export default Select;