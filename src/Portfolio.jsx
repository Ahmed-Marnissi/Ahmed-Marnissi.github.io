import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <div className="flex justify-center gap-4">
          <a href="mailto:ahmed.marnissi202@gmail.com">
            <Button><Mail className="mr-2" /> Email</Button>
          </a>
          <a href="https://github.com/Ahmed-Marnissi" target="_blank">
            <Button variant="secondary"><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/ahmedmarnissi/" target="_blank">
            <Button variant="secondary"><Linkedin className="mr-2" /> LinkedIn</Button>
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
            <Card key={skill} className="text-center">
              <CardContent className="p-4 font-medium">{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">
                <a href="https://github.com/Ahmed-Marnissi/Audio_PDM" target="_blank">
                  Audio PDM Decimation & Spectrum Analysis
                </a>
              </h3>
              <p className="text-gray-600">
                Convert PDM to PCM, perform FFT, and visualize spectrum with PyQt.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Ethernet Audio Streaming (Private)</h3>
              <p className="text-gray-600">
                RTSP/RTP audio client on STM32 using FreeRTOS with real-time buffers.
              </p>
            </CardContent>
          </Card>
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
