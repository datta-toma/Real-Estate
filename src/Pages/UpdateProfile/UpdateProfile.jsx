import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';

const UpdateProfile = () => {
    const { updateUserProfile,  } = useAuth();
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
         {
            await updateUserProfile(email, photoURL);
            console.log('Profile updated successfully');
        } 
         {
            setIsUpdating(false); 
        }
    }
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init();
    }, []);

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>

            <h2 className="text-center text-5xl font-bold mt-14"  data-aos="zoom-in-up">Update Profile</h2>
            <div className="flex justify-center" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  mt-20 ">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary" disabled={isUpdating}>
                            {isUpdating ? 'Updating...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
