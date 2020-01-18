const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'list',
    theme: '#FADFA3',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    //volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    audio: [
      {
        name: "アイロニ",
        artist: '许まじ娘',
        url: 'http://music.163.com/song/media/outer/url?id=ID31421442.mp3',
        cover: 'http://p1.music.126.net/4Zpn57gnArtV3F5xiNBK0g==/109951163598414321.jpg',
      },
      {
        name: "打上花火",
        artist: 'DAOKO / 米津玄師',
        url: 'http://music.163.com/song/media/outer/url?id=ID496869422.mp3',
        cover: 'http://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg',
      },
      {
        name: "Shelter",
        artist: 'Porter Robinson、Madeon',
        url: 'http://music.163.com/song/media/outer/url?id=ID425280053.mp3',
        cover: 'http://p2.music.126.net/9krlgGqhzoAHfK5NIWTZbw==/109951163345022045.jpg',
      }
    ]
});