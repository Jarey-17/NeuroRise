import React from "react";
import { FOOTER_DATA } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-neulis text-2xl font-bold text-neutral mb-6 inline-block">
              {FOOTER_DATA.brandName}
            </span>
            <p className="text-neutral/80 text-sm leading-relaxed mb-6">
              {FOOTER_DATA.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral">
              {FOOTER_DATA.quickLinks.title}
            </h4>
            <ul className="space-y-3 text-neutral/80 text-sm">
              {FOOTER_DATA.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral">
              {FOOTER_DATA.services.title}
            </h4>
            <ul className="space-y-3 text-neutral/80 text-sm">
              {FOOTER_DATA.services.list.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral">
              {FOOTER_DATA.contact.title}
            </h4>
            <ul className="space-y-3 text-neutral/80 text-sm">
              <li className="flex items-center gap-3 ">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div className="flex flex-col gap-1">
                  {FOOTER_DATA.contact.locations.map((loc, index) => (
                    <span key={index}>
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {loc.city}
                      </a>
                    </span>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>
                  <a
                    href={FOOTER_DATA.contact.phone.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {FOOTER_DATA.contact.phone.text}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href={FOOTER_DATA.contact.email.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{FOOTER_DATA.contact.email.text}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-sm text-neutral/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{FOOTER_DATA.copyright}</p>
          <div className="flex space-x-4">
            {FOOTER_DATA.legal.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
