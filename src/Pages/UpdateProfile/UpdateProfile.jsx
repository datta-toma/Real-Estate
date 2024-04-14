import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const {userProfile} = useAuth();
    const {email, setEmail} = useState('');
    const {photoURL, setPhotoURL} = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        userProfile(email, photoURL);
    }
    return (
        <div>
          <Helmet>
            <title>Update Profile</title>
          </Helmet>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateProfile;