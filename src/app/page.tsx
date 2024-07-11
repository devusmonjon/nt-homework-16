"use client";

import Image from "next/image";
import { useState } from "react";
import bgImage from "@/app/assets/images/background.jpg";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoEnter } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

type Props = {};

const Page = (props: Props) => {
    const [passShow, setPassShow] = useState<boolean>(false);
    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPassword, setLoginPassword] = useState<string>("");

    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [registerPassword, setRegisterPassword] = useState<string>("");
    const [registerPasswordConfirm, setRegisterPasswordConfirm] =
        useState<string>("");

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const togglePassShow = () => {
        setPassShow(!passShow);
    };

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "email":
                setLoginEmail(value);
                break;
            case "password":
                setLoginPassword(value);
                break;
            case "register-email":
                setRegisterEmail(value);
                break;
            case "register-password":
                setRegisterPassword(value);
                break;
            case "register-password-confirmation":
                setRegisterPasswordConfirm(value);
                break;
            default:
                break;
        }
    };

    return (
        <main className="w-full h-screen flex justify-center items-center">
            <div className="w-full h-screen fixed top-0 left-0 -z-10">
                <Image
                    src={bgImage}
                    alt="background"
                    fill
                    className="object-cover"
                />
            </div>
            <form className="w-[400px] backdrop-blur-2xl p-10 flex flex-col gap-5">
                <div className="border-solid border-[2px] border-[#fff]">
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent p-2 outline-none text-[#fff] w-full"
                        name="email"
                        onChange={handleInput}
                        value={loginEmail}
                    />
                </div>
                <div className="border-solid border-[2px] border-[#fff] flex items-center justify-between mb-[150px]">
                    <input
                        type={`${passShow ? "text" : "password"}`}
                        placeholder="Password"
                        className="bg-transparent p-2 outline-none text-[#fff] w-[calc(100% - 40px)]"
                        name="password"
                        onChange={handleInput}
                        value={loginPassword}
                    />

                    <button
                        type="button"
                        className="text-[#fff] h-[30px] w-[30px] hover:bg-[#30303080] focus:bg-[#30303080] transition flex justify-center items-center rounded-full outline-none mr-[10px]"
                        title={`show ${passShow ? "password" : "text"}`}
                        onClick={togglePassShow}
                    >
                        {loginPassword.length > 0 ? (
                            passShow ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )
                        ) : null}
                    </button>
                </div>

                <div className="flex justify-between gap-5">
                    <button
                        type="submit"
                        className="flex justify-center items-center gap-[10px] w-full p-2 border-solid border-[2px] border-[#fff] hover:bg-[#fff] hover:text-[#000] focus:bg-[#fff] focus:text-[#000] transition outline-none"
                    >
                        Login <IoEnter fontSize={20} />
                    </button>
                    <button
                        onClick={toggleModal}
                        type="button"
                        className="flex justify-center items-center gap-[10px] w-full p-2 border-solid border-[2px] border-[#fff] bg-[#fff] text-[#000] hover:bg-transparent hover:text-[#fff] focus:bg-transparent focus:text-[#fff] transition outline-none"
                    >
                        Register <IoIosAddCircle fontSize={20} />
                    </button>
                </div>
            </form>
            <div
                className={`fixed top-0 left-0 w-full h-full z-50 ${
                    modalOpen ? "flex" : "hidden"
                } justify-center items-center modal`}
            >
                <div
                    className="-z-10 absolute top-0 left-0 w-full h-full backdrop-blur-2xl animate-show"
                    onClick={toggleModal}
                ></div>
                <form className="w-[400px] backdrop-blur-3xl p-10 flex flex-col gap-5">
                    <div className="border-solid border-[2px] border-[#fff]">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent p-2 outline-none text-[#fff] w-full"
                            name="register-email"
                            onChange={handleInput}
                            value={registerEmail}
                        />
                    </div>
                    <div className="border-solid border-[2px] border-[#fff] flex items-center justify-between">
                        <input
                            type={`${passShow ? "text" : "password"}`}
                            placeholder="Password"
                            className="bg-transparent p-2 outline-none text-[#fff] w-[calc(100% - 40px)]"
                            name="register-password"
                            onChange={handleInput}
                            value={registerPassword}
                        />

                        <button
                            type="button"
                            className="text-[#fff] h-[30px] w-[30px] hover:bg-[#30303080] focus:bg-[#30303080] transition flex justify-center items-center rounded-full outline-none mr-[10px]"
                            title={`show ${passShow ? "password" : "text"}`}
                            onClick={togglePassShow}
                        >
                            {registerPassword.length > 0 ? (
                                passShow ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )
                            ) : null}
                        </button>
                    </div>
                    <div className="border-solid border-[2px] border-[#fff] flex items-center justify-between mb-[150px]">
                        <input
                            type={`${passShow ? "text" : "password"}`}
                            placeholder="Password confirmation"
                            className="bg-transparent p-2 outline-none text-[#fff] w-[calc(100% - 40px)]"
                            name="register-password-confirmation"
                            onChange={handleInput}
                        />

                        <button
                            type="button"
                            className="text-[#fff] h-[30px] w-[30px] hover:bg-[#30303080] focus:bg-[#30303080] transition flex justify-center items-center rounded-full outline-none mr-[10px]"
                            title={`show ${passShow ? "password" : "text"}`}
                            onClick={togglePassShow}
                            value={registerPasswordConfirm}
                        >
                            {registerPasswordConfirm.length > 0 ? (
                                passShow ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )
                            ) : null}
                        </button>
                    </div>

                    <div className="flex justify-between gap-5">
                        <button
                            type="submit"
                            className="flex justify-center items-center gap-[10px] w-full p-2 border-solid border-[2px] border-[#fff] bg-[#fff] text-[#000] hover:bg-transparent hover:text-[#fff] focus:bg-transparent focus:text-[#fff] transition outline-none"
                        >
                            Register <IoIosAddCircle fontSize={20} />
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Page;
