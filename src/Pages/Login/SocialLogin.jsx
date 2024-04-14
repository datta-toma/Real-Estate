import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth();

    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/"

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(from)
            
            }
        })
    }

    return (
        <div>
            <div className="text-center">Continue with</div>
            <div className="mt-5 gap-7 flex justify-center">
                <button onClick={() =>handleSocialLogin(googleLogin)}><FcGoogle className="text-3xl  ">Google</FcGoogle></button>
                <button onClick={() =>handleSocialLogin(githubLogin)}> <ImGithub className="text-3xl">GitHub</ImGithub></button>
            </div>

        </div>
    );
};

export default SocialLogin;