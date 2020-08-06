const shareButton = document.getElementById('share-article-button');
const socials = document.getElementById('social-container')

shareButton.addEventListener('click', function() {
	console.log('share button clicked!');
	socials.classList.toggle('active');
});
