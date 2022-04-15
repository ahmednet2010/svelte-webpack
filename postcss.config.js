module.exports = ({mode}) =>({
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: ["default", {
                discardComments: {
                    removeAll: mode === "production"
                }
            }]
        })
    ]
})