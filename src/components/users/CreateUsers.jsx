import { Formik } from "formik"
import * as Yup from 'yup' 

const CreateUser = () => {

    const ValidationSchema = Yup.object().shape({
        email: Yup.string()
        .required('Este campo es requerido')
        .email('Por facor, correo electrónico válido')
    })

    return(

    )
}

export default CreateUser