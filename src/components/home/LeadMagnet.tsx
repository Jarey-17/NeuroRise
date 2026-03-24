import React from 'react';

const LeadMagnet = () => {
  return (
    <section id="recursos" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/20">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-neulis mb-6 leading-tight">
                Potencia tu recuperación desde hoy con nuestra comunidad.
              </h2>
              <p className="text-lg text-white/90 mb-8 font-poppins">
                Cuidar tu cuerpo empieza con la información correcta. Descarga gratis mis <strong>E-books y Tips prácticos</strong> para aliviar lesiones comunes, mejorar la postura en la oficina, y ejercicios en casa.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-secondary p-1 rounded-full"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Guía para manejo del estrés físico y cervical (E-book)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-secondary p-1 rounded-full"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Tips de habla y estimulación temprana</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-secondary p-1 rounded-full"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                  <span>Rutinas en video para pausas activas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-secondary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                100% Gratis
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Accede al contenido</h3>
              <p className="text-gray-600 mb-6">Déjame tu correo y te enviaré el material de inmediato.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="sr-only">Nombre</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Tu nombre" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Tu correo electrónico" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-secondary text-white font-bold py-3.5 rounded-lg hover:bg-opacity-90 transition-all shadow-md"
                >
                  ¡Quiero el material!
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">Tus datos están seguros. Odiamos el spam tanto como tú.</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;