import Navbar from "@/components/Navbar";
import accounts from "@/static/accounts";
import React, { useEffect, useState } from "react";

function LawyerLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [requests, setRequests] = useState([]);

  const handleSubmit = () => {
    accounts.map((account) => {
      if (
        account.email === email &&
        account.password === password &&
        account.type === "lawyer"
      ) {
        setName(account.name);
        setIsLoggedIn(true);
      }
    });
  };

  useEffect(() => {
    //check local storage for requests every 2 seconds

    setInterval(() => {
      let items = localStorage.getItem("requests")
        ? JSON.parse(localStorage.getItem("requests"))
        : [];
      setRequests(items);
    }, 2000);
  }, [isLoggedIn]);

  return (
    <div>
      <Navbar />
      <div className="mt-24 px-24">
        {isLoggedIn == false && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="bg-neutral-100 w-[90%] p-8"
          >
            <div>
              <h2 className="text-center font-semibold text-2xl">
                Lawyer Login
              </h2>
              <p className="text-center text-sm mt-2 text-neutral-500">
                Please use your valid email and password to login
              </p>
            </div>
            <div className="mt-10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full border-b py-3 outline-none"
                placeholder="Email"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                className="bg-transparent w-full border-b py-3 outline-none"
                type="pasword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name=""
                id=""
              />
            </div>
            <div className="mt-10">
              <button type="submit" className="h-12 bg-black text-white w-full">
                Login
              </button>
            </div>
          </form>
        )}

        {isLoggedIn && (
          <div>
            <h1 className="text-2xl font-semibold">Welcome {name}</h1>
            <div className="mt-4">
              <h1>Received Cases</h1>
              <div className="mt-6 space-y-4">
                {requests.map((request, i) => (
                  <div key={i} className="p-5 bg-neutral-50">
                    <div className="flex items-center">
                      <span className="text-sm text-neutral-800">
                        {request.name}
                      </span>
                      <span className="text-sm ml-auto">Today</span>
                    </div>
                    <p className="mt-5">{request.description}</p>
                    <div className="flex items-center mt-5">
                      <button className="py-2 text-white bg-green-600 w-1/2">
                        Accept
                      </button>
                      <button className="py-2 w-1/2">Archive</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LawyerLogin;
