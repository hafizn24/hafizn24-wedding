import React from 'react'
import { getTheme } from '../../theme/theme'

function Page1({ config }) {
  const themeData = getTheme(config.themeName)
  const themeColors = themeData.colors
  const themeFonts = themeData.fonts

  return (
    <div className="text-center max-w-full mx-auto px-2">
      {/* Names */}
      <h2
        className="text-4xl mb-2.5 font-medium leading-snug"
        style={{
          fontFamily: themeFonts.primary,
          color: themeColors.text,
        }}
      >
        {config.person1.shortName} & {config.person2.shortName}
      </h2>

      {/* Decorative Divider */}
      <div
        className="w-15 mx-auto my-6 opacity-60"
        style={{
          borderTop: `1px solid ${themeColors.secondary}`,
        }}
      />

      {/* Date */}
      <h3
        className="text-2xl mb-1.5 font-medium"
        style={{
          fontFamily: themeFonts.secondary,
          color: themeColors.text,
        }}
      >
        {config.event.date}
      </h3>
    </div>
  )
}

export default Page1
