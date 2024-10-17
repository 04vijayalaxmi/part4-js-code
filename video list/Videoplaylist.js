const videosList = [
{
	video: 'images/one.mp4',
	title: 'Water '
},
{
	video: 'images/two.mp4',
	title: 'Tiger Walking'
},
{
	video: 'images/three.mp4',
	title: 'Lion hunting animation'
},
{
	video: 'images/kedar.mp4',
	title: 'Heaven on Earth'
},

{
	video: 'images/five.mp4',
	title: '3D AI animation'
},
{
	video: 'images/forest.mp4',
	title: '3D Forest animation'
},
{
	video: 'images/drop.mp4',
	title: '3D Drop animation'
},
{
	video: 'images/forestt.mp4',
	title: 'Forest is Important'
},


]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});