import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Ahmed Marnissi</h1>
        <p className="text-lg text-gray-600">
          Embedded Systems Engineer passionate about low-level programming,
          secure architectures, and real-time systems.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:ahmed.marnissi202@gmail.com">
            <button className="bg-blue-600 text-white px-4 py-2 rounded inline-flex items-center gap-2">
              <Mail size={18} /> Email
            </button>
          </a>
          <a href="https://github.com/Ahmed-Marnissi" target="_blank">
            <button className="bg-gray-800 text-white px-4 py-2 rounded inline-flex items-center gap-2">
              <Github size={18} /> GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/ahmedmarnissi/" target="_blank">
            <button className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
