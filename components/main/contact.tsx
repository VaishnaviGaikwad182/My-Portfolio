"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");
      formRef.current.reset(); // ✅ always clears
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-28 px-6 flex flex-col items-center"
    >
      {/* HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Touch
          </span>
        </h1>
        <div className="flex flex-col items-center mt-4">
          <span className="w-32 h-[2px] bg-white/30 rounded-full" />
          <span className="w-20 h-[2px] bg-purple-500/40 rounded-full mt-1" />
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Contact Information
          </h2>

          <p className="text-white/70 mb-10 leading-relaxed">
            Feel free to reach out through any of the following channels.
            I’m always open to discussing new projects and opportunities.
          </p>

          <a
            href="mailto:vaishnavig182@gmail.com"
            className="flex items-center gap-4 mb-10 group"
          >
            <div className="p-3 rounded-lg border border-white/20 flex items-center justify-center text-purple-800 text-2xl transition-all duration-300 group-hover:text-white group-hover:border-purple-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              <MdEmail />
            </div>

            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-white/60 text-sm">
                vaishnavig182@gmail.com
              </p>
            </div>
          </a>

          <div className="h-px w-full bg-white/10 mb-8" />

          <p className="text-white font-medium mb-4">Connect With Me</p>
          <div className="flex gap-4">
            <SocialIcon href="https://github.com/VaishnaviGaikwad182">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/vaishnavi-gaikwad-675093294/">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="https://instagram.com/vaishnavi_gaikwad182">
              <FaInstagram />
            </SocialIcon>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="glass-card p-8">
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input name="name" placeholder="Your Name" />
              <Input name="email" placeholder="Your Email" />
            </div>

            <div>
              <label className="text-white mb-2 block">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-fit px-8 py-3 rounded-lg button-primary text-white font-semibold flex items-center gap-3 justify-center disabled:opacity-50"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
              </svg>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* INPUT — autofill FIX ONLY */
const Input = ({ placeholder, name }: { placeholder: string; name: string }) => (
  <input
    name={name}
    placeholder={placeholder}
    required
    autoComplete="off"
    className="
      input-field
      w-full px-4 py-3 rounded-lg
      bg-white/5 text-white
      border border-white/20
      focus:outline-none focus:border-purple-400
      placeholder:text-white/60
      transition-all duration-300
      [&:-webkit-autofill]:shadow-[0_0_0px_1000px_rgba(255,255,255,0.05)_inset]
      [&:-webkit-autofill]:text-white
    "
  />
);

const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-full border border-white/20 text-white/80 text-xl transition-all duration-300 hover:text-white hover:border-purple-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center"
  >
    {children}
  </a>
);
