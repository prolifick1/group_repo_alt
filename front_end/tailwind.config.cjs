/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/Forums.jsx", 
    "./src/components/CommentForm.jsx",
    "./src/components/Comment.jsx"  
  ],
  theme: {
    colors: {
      'main': {
        100: '',
      },
      'surface': {
        100: '#f3f3f3',
        200: '#DDDDDD'
      }
    },
    extend: {},
  },
  plugins: [],
}
