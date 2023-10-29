import Navbar from "@/components/Navbar";
import accounts from "@/static/accounts";
import React, { useState } from "react";

function UserLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitRequest = () => {
    let data = {
      name: name,
      description: description,
    };

    let items = localStorage.getItem("requests")
      ? JSON.parse(localStorage.getItem("requests"))
      : [];

    items.push(data);
    localStorage.setItem("requests", JSON.stringify(items));
    setDescription("");
  };

  const handleSubmit = () => {
    accounts.map((account) => {
      if (
        account.email === email &&
        account.password === password &&
        account.type === "user"
      ) {
        setName(account.name);
        setIsLoggedIn(true);
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div className="mt-24 flex flex-col items-center justify-center">
        {isLoggedIn == false && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="bg-neutral-100 w-[500px] p-8"
          >
            <div>
              <h2 className="text-center font-semibold text-2xl">User Login</h2>
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
            <div className="mt-6">
              <textarea
                name=""
                className="border p-8"
                placeholder="Write a description & send a request"
                id=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              onClick={() => handleSubmitRequest()}
              className="w-full bg-black text-white py-3"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserLogin;
