const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,

    audio: [
      {
        name: "写给我第一个喜欢的女孩的歌",
        artist: '西瓜Kune',
        url: '  http://music.163.com/#/song?id=408250378',
        cover: 'http://p2.music.126.net/hdrjFYPZXd2HgL-3OMlDIw==/18290375928279193.jpg',
      },
      {
        name: "打上花火",
        artist: 'DAOKO / 米津玄師',
        url: '  http://antiserver.kuwo.cn/anti.s?format=mp3|aac&rid=40174955&type=convert_url&response=res',
        cover: 'http://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg',
      },
      {
        name: "Shelter",
        artist: 'Porter Robinson、Madeon',
        url: '  http://antiserver.kuwo.cn/anti.s?format=mp3|aac&rid=9936460&type=convert_url&response=res',
        cover: 'http://p2.music.126.net/9krlgGqhzoAHfK5NIWTZbw==/109951163345022045.jpg',
      }
    ]
});