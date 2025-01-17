
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye  } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import "./Login.css";
import AOS from 'aos';

const Register = () => {

    const {createUser} = useAuth();
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
  
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/"
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
        const {email, password} = data
        createUser(email, password)
        .then((result) =>{
          if(result.user){
            navigate(from);
          }
          // console.log(result);
          // console.log(error)
          // navigate("/")
          // Show success message using SweetAlert
       Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login successfully!',
      });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message, 
          });
        });
      } 

      useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init();
    }, []);


    return (
        <div className="hero  SinIn-container">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10"  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
            <h1 className="text-3xl font-bold text-center">Sing Up</h1>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered" required 
                {...register("FullName", { required: true })}
                 />
                  {errors.FullName && <span>This field is required</span>}

              </div>
              <div className="form-control">
              <div className="text-center ">
          </div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required 
                {...register("email", { required: true })}
                />
                 {errors.email && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input type="text" placeholder="image url" className="input input-bordered" required
                {...register("image")}
                 />
                 {errors.image && <span>This field is required</span>}

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required
                {...register("password", { required: true })}
                 /> <span className="absolute top-4 right-3" onClick={()=> setShowPassword(!showPassword)}>
                 {
                  showPassword ? <FaEye></FaEye> :  <FaEyeSlash></FaEyeSlash>
                 }
                  </span>
                 {errors.password && <span>This field is required</span>}
                </div>
                

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing Up</button>
              </div>
              <label>
                Have an account? {""}
                <Link to ="/login" className="lebel-text-alt link link-hover">
                Please Login
                </Link>
              </label>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;