import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import Select from "../input/Select";


interface FormData {
    email: string,
    userName: string,
    password: string,
    age: string,
    gender: 'F' | 'M' | 'other'
}


const SignUp = () => {

    const formObj: FormData = {
        email: '',
        userName: '',
        password: '',
        age: '',
        gender: 'F'
    }


    const formik = useFormik({
        initialValues: formObj,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })


    let list = [
        { label: "Label A1", value: "A" },
        { label: "Label B2", value: "B" },
        { label: "Label C3", value: "C" },
        { label: "Label D4", value: "D" },
        { label: "Label E5", value: "E" },
        { label: "Label F6", value: "F" },
    ]


    return (
        <Select options={list} style={{ width: "90%" }} name='selctTest' />
    )
}

export default SignUp;