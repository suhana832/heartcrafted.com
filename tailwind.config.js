/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"],
  theme: {
    fontFamily: {
      'cusive': ['Cedarville Cursive','cursive', 'sans'],
      'mont': ['montserrat', 'sans'],
      'normal':['EB Garamond', 'sans'],
      'zedaya':['zedaya', 'sans'],
      'tilt':['tilt neon', 'sans'],
      'satisfy':['satisfy', 'sans']
    },
      extend: {
        colors: {
          vampireblack: '#050505',
          cosmos: ' #610C27 ',
          grullo: '#AC9C8D ',
          desertsand: '#E3C1B4',
          timberwolf: '#DDD9CE ',
          alabaster: ' #EFECE9'
        },
        animation: {
          'bounce-slow': 'bounce 3s linear infinite',
          'pulse-slow': 'pulse 3s linear infinite',
          'ping-slow': 'ping 5s linear infinite',
        },
        backgroundImage: {
          'sewing': "url('/static/Images/bg.jpg')",
        }
      },
  },
  plugins: [],
}

