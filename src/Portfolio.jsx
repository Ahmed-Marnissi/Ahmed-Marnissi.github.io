import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
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

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "C", "C++", "Python", "Linux", "FreeRTOS", "QNX",
            "Docker", "Git", "LwIP", "OpenAMP", "STM32", "ARM"
          ].map(skill => (
            <div key={skill} className="border rounded p-4 text-center font-medium shadow">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">
              <a href="https://github.com/Ahmed-Marnissi/Audio_PDM" target="_blank" className="text-blue-600 hover:underline">
                Audio PDM Decimation & Spectrum Analysis
              </a>
            </h3>
            <p className="text-gray-600">
              Convert PDM to PCM, perform FFT, and visualize spectrum with PyQt.
            </p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Ethernet Audio Streaming (Private)</h3>
            <p className="text-gray-600">
              RTSP/RTP audio client on STM32 using FreeRTOS with real-time buffers.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Developed real-time communication protocols over Wi-Fi and LTE.</li>
          <li>Integrated IMUs with real-time signal processing and fusion algorithms.</li>
          <li>Created secure, multi-core architectures with TrustZone and OP-TEE.</li>
          <li>Ported legacy code to 64-bit Linux and dockerized environments.</li>
        </ul>
      </section>

      {/* Goals Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Goals</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Master Linux kernel driver development for embedded hardware.</li>
          <li>Explore multi-core ARM architecture design and performance.</li>
          <li>Advance secure boot and trusted firmware practices.</li>
          <li>Contribute to open-source embedded tools and resources.</li>
        </ul>
      </section>
    </main>
  );
}
