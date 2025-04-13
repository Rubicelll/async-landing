const API = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c31030f5b6mshc35fa7ea3c5b5bap1097cbjsn7e7b3d9991cf',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

// const content = null || document.getElementById('content')
const content = document.getElementById('content')

// try {
// 	const response = await fetch(API, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()

    return data
}

(async () => {
    try {
        const videos = await fetchData(API)
console.log(videos);

        let view = `
            ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join('')}
        `
console.log(view);

        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
})()