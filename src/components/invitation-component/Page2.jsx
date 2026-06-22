import React from 'react'
import { getTheme } from '../../theme/theme'
import PhoneContact from './PhoneContact'
import { FaGoogle } from "react-icons/fa";
import { FaWaze } from "react-icons/fa6";

function Page2({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  return (
    <div className="text-center max-w-full mx-auto px-2">
      {/* Opening line */}
      <h2
        className="text-2xl mb-3 font-semibold tracking-wide"
        style={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
        }}
      >
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h2>

      {/* Parents */}
      <h3
        className="text-xl mb-3 font-semibold"
        style={{
          fontFamily: themeFonts.secondary,
          color: themeColors.lightText,
        }}
      >
        {config.person1.parents}
      </h3>

      {/* Invitation text */}
      <p
        className="mb-4 leading-relaxed"
        style={{
          fontFamily: themeFonts.secondary,
          color: themeColors.text,
          fontSize: '0.9rem',
        }}
      >
        Dengan penuh kesyukuran atas limpah kurnia-Nya,
        kami sekeluarga menjemput dengan segala hormat ke majlis perkahwinan anakanda kami yang dikasihi.
      </p>

      {/* Names */}
      <h2
        className="text-xl mb-2 font-semibold leading-snug"
        style={{
          fontFamily: themeFonts.primary,
          color: themeColors.primary,
        }}
      >
        {config.person1.fullName}
        <br />
        &
        <br />
        {config.person2.fullName}
      </h2>

      {/* Event Details */}
      <div
        className="rounded-lg p-3 mb-2 text-center"
        style={{
          backgroundColor: themeColors.lightBackground || '#f5f5f5',
        }}
      >
        <h3
          className="text-lg font-semibold mb-1.5"
          style={{
            fontFamily: themeFonts.primary,
            color: themeColors.primary,
          }}
        >
          {config.event.date}
        </h3>

        <p
          className="mb-2"
          style={{
            fontFamily: themeFonts.secondary,
            color: themeColors.text,
            fontSize: '0.9rem',
          }}
        >
          {config.event.startTime} – {config.event.endTime}
        </p>

        <div style={{ borderTop: `1px solid ${themeColors.border || '#e5e7eb'}`, margin: '0.5rem 0' }} />

        <h4
          className="font-medium mb-1.5"
          style={{
            fontFamily: themeFonts.primary,
            color: themeColors.primary,
            fontSize: '1rem',
          }}
        >
          {config.location.venue}
        </h4>

        <p
          className="leading-relaxed"
          style={{
            fontFamily: themeFonts.secondary,
            color: themeColors.lightText,
            fontSize: '0.85rem',
          }}
        >
          {config.location.fullAddress}
        </p>
      </div>

      {/* Map Links */}
      <div className="mb-4">
        <div className="flex gap-4 justify-center">
          {/* Google Maps */}
          <a
            href={config.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl transition-all duration-300 hover:bg-gray-100"
            style={{
              borderColor: themeColors.primary,
              color: themeColors.primary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColors.secondary;
              e.currentTarget.style.borderColor = themeColors.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = themeColors.primary;
              e.currentTarget.style.borderColor = themeColors.primary;
            }}
          >
            <FaGoogle size={26} />
          </a>

          {/* Waze */}
          <a
            href={config.location.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl transition-all duration-300 hover:bg-gray-100"
            style={{
              borderColor: themeColors.primary,
              color: themeColors.primary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColors.secondary;
              e.currentTarget.style.borderColor = themeColors.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = themeColors.primary;
              e.currentTarget.style.borderColor = themeColors.primary;
            }}
          >
            <FaWaze size={26} />
          </a>
        </div>
      </div>

      <PhoneContact config={config} contacts={config.contacts} />
    </div>
  )
}

export default Page2
