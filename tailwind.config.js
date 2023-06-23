/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      
      screens: {
        'hmd': '1000px', // Add a new breakpoint at 1016px
        'in&sm': '480px',
        'in': '0px',
        
      },
      
    backgroundImage: {
         'heroPattern1': "url('images/feature-section-3BG.svg')"
      },
      backgroundPosition: {
        'left-top': '-590px top',
        'left-top2': '-147px top',
      },

      backgroundImage: {
        'Bg-1': "url('images/instant-settlement-bghover.svg')",
        'Bg-2': "url(/images/upi-autopay-hoverbg.svg)",
        'Bg-3': "url(/images/magic-checkout-hoverbg.svg)",
        'Bg-4': "url(/images/payment-button-hoverbg.svg)",
        'Bg-5': "url(/images/instant-settlement-bghover.svg)",
      },

    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      darkdeep: "#181C2E",
      
    },
    },
    },
    
  plugins: [],
}

