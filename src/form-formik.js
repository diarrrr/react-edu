import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {

    const doregister = (values) => {
        console.log('form values', values);
        alert(`username: ${values.username}
            email  : ${values.email}
            password: ${values.password}
            `)
        setTimeout(() => {
            formik.setSubmitting(false);
            formik.resetForm();
        }, 2000);
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            
        },
        
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username tidak boleh kosong!'),
            email: Yup.string()
                .required()
                .email('Format email salah!!'),
            password: Yup.string()
                .required('Password tidak boleh kosong!')
                .min(8, 'Harus lebih dari 8 karakter')
                .matches(/[a-z]/g, 'Harus terdapat minimal 1 huruf kecil')
                .matches(/[A-Z]/g, 'Harus terdapat minimal 1 huruf besar')
                .matches(/[0-9]/g, 'Harus terdapat minimal 1 angka')
                .matches(/^\S*$/, 'Tidak boleh terdapat karakter spasi'),
            confirmPassword: Yup.string()
                .required('Password tidak boleh kosong!')
                .oneOf([Yup.ref('password')], 'Password tidak cocok!')
            
        }),
        
        onSubmit: doregister
    });
    return ( 
        <div className='content'>
            <h1>Register Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label className="label-required">Username</label>
                    <input
                        type="text"
                        name="username"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Email</label>
                    <input
                        type="text"
                        name="email"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Password</label>
                    <input
                        type="password"
                        name="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
                </div>
                <div className="form-group">
                    <label className="label-required">Confirm Password</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
                </div>
                                <button type="submit" disabled={formik.isSubmitting}>Register</button>
            </form>
        </div>
     );
}
 
export default FormikForm;
