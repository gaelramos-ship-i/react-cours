import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

// Définition du schéma de validation 
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('Ce champ est requis'),
    password: Yup.string().min(8, "Le mot de passe est trop court !").required("Le mot de passe est requis")
})

function Fomulaire(){
    return(
        // initialisation de Formik
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(val) => console.log(val)}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage name='email' component="div" className='Error' />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Mot de passe" />
                        <ErrorMessage name='password' component="div" className='Error' />
                    </div>
                    <button type='submit' disabled={isSubmitting}>Valider</button>
                </Form>
            )}
        </Formik>
    )
}

export default Fomulaire