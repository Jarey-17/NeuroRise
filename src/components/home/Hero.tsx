import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-neutral pt-16 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Bienestar Integral
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-secondary font-neulis leading-tight mb-6">
              Recupera tu <span className="text-primary">libertad</span> y vive
              sin limitaciones.
            </h1>
            <p className="text-lg text-secondary/80 mb-8 max-w-2xl mx-auto lg:mx-0 font-poppins">
              Tratamientos no invasivos para todas las edades. Empatía,
              profesionalismo y educación para que retomes el control de tu
              cuerpo, ya sea presencial o desde casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg text-lg"
              >
                Agenda tu cita presencial
              </a>
              <a
                href="#online"
                className="bg-white text-secondary border-2 border-secondary px-8 py-3.5 rounded-full font-medium hover:bg-secondary hover:text-white transition-all text-lg mb-4 sm:mb-0"
              >
                Terapia Online (Nacional)
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-secondary/70">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Atención Empática</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Para todas las edades (0-65)</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Graphic */}
          <div className="relative mx-auto max-w-md lg:max-w-full">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] transform -rotate-6 scale-105" />
            <img
              src="../../../public/profile-photo.png"
              alt="Fisioterapia y recuperación"
              className="relative rounded-[3rem] shadow-xl object-cover w-full h-125"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl items-center gap-4 hidden sm:flex border border-neutral">
              <div className="bg-secondary/10 p-3 rounded-full">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-secondary">+1000</p>
                <p className="text-xs text-secondary/70">
                  Pacientes recuperados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
