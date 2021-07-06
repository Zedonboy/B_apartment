/* eslint-disable @next/next/no-img-element */
export default function Signin() {
    return (
        <main className="flex">
            <section className="w-1/2 hidden md:flex flex-col justify-center items-center bg-[#439a82] h-screen">
                <img alt="cjsdncj" className="w-1/2" src="/images/House.png"></img>
                <p className="font-bold text-5xl text-white">Find a Home Anywhere</p>
                <p className="text-white">Helping 10 million renters find their perfect fit.</p>
            </section>
            <section className="w-full md:w-1/2 flex flex-col justify-center items-center h-screen">
                <h1 className="font-bold text-[#439a82] text-4xl">Create an account</h1>
                <form className="flex flex-col space-y-3 w-2/3 md:w-1/2 text-[#439a82]">
                    <label>Enter Your Name</label>
                    <input className="form-input border border-[#439a82] focus:ring-[#439a82] rounded" placeholder="Enter your name"/>
                    <label>Enter Your Email</label>
                    <input className="form-input border border-[#439a82] focus:ring-[#439a82] rounded" placeholder="Enter your Email"/>
                    <label>Choose your password</label>
                    <input type="password" className="form-input border border-[#439a82] focus:ring-[#439a82] rounded" placeholder="Enter a password"/>
                   
                    <input type="password" className="form-input border border-[#439a82] focus:ring-[#439a82] rounded" placeholder="Re-enter password"/>
                    <div className="flex space-x-2 items-center">
                        <input type="checkbox" className="form-checkbox rounded"></input>
                        <label>I am a proffessional </label>
                    </div>
                    <label>Which best describes your role</label>
                    <select className=" form-select focus:ring-[#439a82] rounded" placeholder="Enter a password">
                        <option hidden>Select</option>
                    </select>
                    <button type="submit" className="bg-[#439a82] text-white rounded-md py-3">Create Account</button>
                </form>
            </section>
        </main>
    )
}