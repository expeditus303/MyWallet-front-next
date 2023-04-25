"use client";

import { useState } from "react";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleEvent(event) {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    console.log(userInfo);
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-center text-zinc-900 w-64"
        onSubmit={submit}
      >
        <input
          className="mb-2 h-10 rounded box-border p-3 w-full"
          type="text"
          name="name"
          placeholder="name"
          value={userInfo.name}
          onChange={handleEvent}
        />

        <input
          className="mb-2 h-10 rounded box-border p-3 w-full"
          type="email"
          name="email"
          placeholder="email"
          value={userInfo.email}
          onChange={handleEvent}
        />

        <input
          className="mb-2 h-10 rounded box-border p-3 w-full"
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handleEvent}
        />

        <input
          className="mb-2 h-10 rounded box-border p-3 w-full"
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={userInfo.confirmPassword}
          onChange={handleEvent}
        />

        <button
          className="bg-purple-600 text-xl/4 font-bold py-3 w-full rounded text-zinc-50 mb-6"
          type="submit"
        >
          Sign in!
        </button>
      </form>
      <p className="text-sm">
        <a href="/signin">Been here before? Sign in!</a>
      </p>
    </>
  );
}
