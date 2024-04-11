
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import Result from "postcss/lib/result";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {

    const {createUser} = useAuth();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
        const {email, password} = data
        createUser(email, password)
        .then(result =>{
          console.log(result);
        })
      } 


    return (
        <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
            <h1 className="text-3xl font-bold">Sing In</h1>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered" required 
                {...register("FullName", { required: true })}
                 />
                  {errors.FullName && <span className="text-red-500">This field is required</span>}

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
                <input type="password" placeholder="password" className="input input-bordered" required
                {...register("password", { required: true })}
                 />
                 {errors.password && <span>This field is required</span>}

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing In</button>
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