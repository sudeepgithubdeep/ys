const video = document.createElement('video');

// 👇️ Local file
// video.src = 'video.mp4';

// 👇️ Remote file
video.src =
  'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

video.poster =
  'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217';

video.autoplay = true;
video.controls = true;
video.muted = true;
video.height = 240; // 👈️ in px
video.width = 320; // 👈️ in px

const box = document.getElementById('box');

box.appendChild(video);