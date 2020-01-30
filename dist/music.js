const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,

    audio: [
      {
        name: "アイロニ",
        artist: '许まじ娘',
        url: '  http://music.163.com/#/song?id=31421442',
        cover: 'http://p1.music.126.net/4Zpn57gnArtV3F5xiNBK0g==/109951163598414321.jpg',
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