"use client";

import { Create } from "@/contexts/AuthContext";
import api from "@/services/api";
import { useContext, useState } from "react";

export default function SignIn() {

  const {user, setUser } = useContext(Create)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleEvent(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault()

    try {
      const promise = await api.signIn(formData)
      return setUser(promise.data)
    } catch (err) {
      console.log(err.response.data)
    }  
  }

  console.log("aqui")
  console.log(user)

  return (
    <>
      <form
        className="flex flex-col items-center justify-center text-zinc-900 w-64"
        onSubmit={submit}
      >
        <input
          className="mb-2 h-10 rounded box-border p-3 w-full"
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleEvent}
        />
        <input
          className="mb-2 h-10 rounded box-border p-3 w-full"
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
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
        <a href="/signup">First time? Sign up!</a>
      </p>
    </>
  );
}
