import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth()
    return (
        <div>
            <div>Continue with</div>
            <div className="">
                <button onClick={() =>googleLogin()} className="btn btn-primary btn-sm btn-outline">Google</button>
                <button onClick={() =>githubLogin()} className="btn btn-primary btn-sm btn-outline">GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;