import Nav from "@/app/components/nav";
import Input from "@/app/components/shared/input";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { useState  } from "react";
import ParticleBackground from "../particles";

const Login = () => {

    const [signIn, setSighIn] = useState(true);


    // this should be run only once per application lifetime
   
        return (
            <>
                <Nav />
                <ParticleBackground />
                <div>
                    {signIn
                        ?
                        // sign up form
                        <div style={{ background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur( 4px )", WebkitBackdropFilter: "blur( 4px )", borderRadius: "10px" }} className="w-full max-w-md mx-auto my-auto">
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 mt-10 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <h2 style={{ fontFamily: 'vazir' }} className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
                                        عضویت
                                    </h2>
                                    <button className="absolute -top-5 left-52 right-52" onClick={() => {
                                        setSighIn(!signIn)
                                    }}>
                                        <ArrowsRightLeftIcon className="w-10 h-10 border-2 border-gray-200 rounded-full p-1 text-gray-200" />
                                    </button>
                                </div>
                                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <form>
                                        <div>
                                            <Input
                                                label="نام"
                                                name="name"
                                                type="name"
                                                id="name"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                label="ایمیل"
                                                name="email"
                                                type="email"
                                                id="email"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                label="رمز عبور"
                                                name="password"
                                                type="password"
                                                id="passwrd"
                                            />
                                        </div>
                                        <div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="mb-2 mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                ثبت نام
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        :
                        //login form
                        <div style={{ background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur( 4px )", WebkitBackdropFilter: "blur( 4px )", borderRadius: "10px" }} className="w-full max-w-md mx-auto my-auto">
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 mt-10 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <h2 style={{ fontFamily: 'vazir' }} className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
                                        ورود
                                    </h2>
                                    <button className="absolute -top-5 left-52 right-52" onClick={() => {
                                        setSighIn(!signIn)
                                    }}>
                                        <ArrowsRightLeftIcon className="w-10 h-10 border-2 border-gray-200 rounded-full p-1 text-gray-200" />
                                    </button>
                                </div>
                                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <form>
                                        <div>
                                            <Input
                                                label="ایمیل"
                                                name="email"
                                                type="email"
                                                id="email"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                label="رمز عبور"
                                                name="password"
                                                type="password"
                                                id="passwrd"
                                            />
                                        </div>
                                        <div>
                                            <div style={{ fontFamily: 'vazir' }} className="text-sm my-3">
                                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                    فراموشی رمز عبور
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                ورود
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }



export default Login;


