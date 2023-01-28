import Title from "../components/Title";

function Business() {
    return ( 

        <>
        
        <div className="  m-2 ">

        <Title
                 main="Business registration"
                 sub="Opening a free business account"
                 />
                 </div>
<div className=" from-control w-50  m-auto px-4 ">
<div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
            </div>


                                 {/* Send verification data to a business account {biz=true} */}
                                 {/* Click to go to create a business card */}
            <button
                // onClick={submit}
                className="btn btn-primary btn-lg"
            >
                Sign Up
            </button>
        </div>
        </>
     );
}
     


export default Business;