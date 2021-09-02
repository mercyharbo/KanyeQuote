const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://api.kanye.rest/', config)
    const data = await res.json()
    jokeEl.innerHTML = data.quote
}

// const config = {
//     headers: {
//         'Accept': 'application/json'
//     }
// }

// fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     })