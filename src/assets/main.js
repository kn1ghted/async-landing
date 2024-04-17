const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCNaBv8sQbe7rd7Q71NkbVkA&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a5b47722fmsh285850f9de17606p174d9ejsn77767232c10b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// This is a async function to fetch the data as JSON from the url
async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () =>{
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video=>`
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </a>
            
          </div>
        </div>
        `).slice(0,4).join('')}`;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();