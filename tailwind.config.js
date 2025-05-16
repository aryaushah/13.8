module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: { 
    extend: {
      keyframes: {
        typewriter: {
          '0%': {
            width: '0%',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
          },
          '100%': {
            width: '100%',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
          }
        },
        blink: {
          '50%': {
            borderColor: 'transparent'
          }
        }
      },
      animation: {
        typewriter: 'typewriter 3s steps(40) forwards',
        blink: 'blink 0.8s step-end infinite'
      }
    } 
  },
  plugins: []
}; 