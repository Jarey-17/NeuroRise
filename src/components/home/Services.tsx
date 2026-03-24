import React from "react";

const Services = () => {
  const services = [
    {
      title: "Fisiatría Integral",
      description:
        "Evaluación y tratamiento no invasivo para recuperar la movilidad perdida por lesiones musculares, articulares o neurológicas.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Logopedia",
      description:
        "Tratamientos empáticos y pacientes para superar trastornos del habla, lenguaje y la comunicación en niños y adultos.",
      icon: (
        <svg
          className="w-8 h-8 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Terapia Online",
      description:
        "Consultas accesibles sin importar dónde estés (Nivel Nacional). Recibe orientación, ejercicios terapéuticos y seguimiento sin salir de casa.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Intervención Temprana",
      description:
        "Atención a recién nacidos y niños (0-12 años) con enfoque respetuoso para potenciar su desarrollo psicomotor y cognitivo natural.",
      icon: (
        <svg
          className="w-8 h-8 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-secondary font-neulis mb-4">
            Acompañamiento <span className="text-primary">Especializado</span>
          </h2>
          <p className="text-lg text-secondary/80 font-poppins">
            Un enfoque humano y profesional orientado a tratar la raíz del dolor
            o limitación, sin fricciones y a tu ritmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral/30 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-neutral/60 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 ${index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-poppins">
                {service.title}
              </h3>
              <p className="text-secondary/70 leading-relaxed font-poppins">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
