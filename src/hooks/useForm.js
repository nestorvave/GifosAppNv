/**
 * Dependencies
 */
 import { useState } from "react"

 /**
  * @description Hook for handle a data of an input
  * @returns {state,function,setState} – input,handleInput,setInput
  */

const useForm = (initialState={}) => {

    const [values,setValues]  = useState(initialState);

    function handleForm( { target } ) {
        setValues({
            ...values,
            [target.name]: target.value
        })
        
    }

    

  return [values,handleForm,setValues]
   
}
export default useForm;