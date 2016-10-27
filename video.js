var video_list = [
    {
        "title":"Big Buck Bunny",
        "src":"videos/big_buck_bunny.mp4"
    },
    {
        "title":"Sony Playstation",
        "src":"videos/sony_playstation.mp4"
    },
    {
        "title":"Wildlife",
        "src":"videos/wildlife.mp4"
    }
    ];


var video_index = 0;

var video_play = document.getElementById("play");
var video_title = document.getElementsByClassName("video-title")[0];

function ChangeVideo(i) {
    video_index = (video_index + i) % 3;
    video_play.setAttribute("src", video_list[video_index].src);
    video_title.innerHTML = video_index[video_index].title;
}

ChangeVideo(0); // Initialization