import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth()
    return (
        <div>
            <div className="text-center">Continue with</div>
            <div className="mt-5 gap-7 flex justify-center">
                <button onClick={() =>googleLogin()}><FcGoogle className="text-3xl  ">Google</FcGoogle></button>
                <button onClick={() =>githubLogin()}> <ImGithub className="text-3xl">GitHub</ImGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;