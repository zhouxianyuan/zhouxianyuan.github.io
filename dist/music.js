const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,

    audio: [
      {
        name: "アイロニ",
        artist: '许まじ娘',
        url: 'https://music.163.com/song?id=31421442',
        cover: 'http://p1.music.126.net/4Zpn57gnArtV3F5xiNBK0g==/109951163598414321.jpg',
      },
      {
        name: "打上花火",
        artist: 'DAOKO / 米津玄師',
        url: 'https://music.163.com/song?id=496869422',
        cover: 'http://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg',
      },
      {
        name: "Shelter",
        artist: 'Porter Robinson、Madeon',
        url: 'https://music.163.com/song?id=425280053',
        cover: 'http://p2.music.126.net/9krlgGqhzoAHfK5NIWTZbw==/109951163345022045.jpg',
      }
    ]
});