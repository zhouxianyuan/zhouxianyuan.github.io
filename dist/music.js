const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
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
      }
    ]
});