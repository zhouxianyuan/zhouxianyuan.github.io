const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,

    audio: [   
      {
        name: "写给我第一个喜欢的女孩的歌",
        artist: '西瓜Kune',
        url: '  https://music.163.com/song/media/outer/url?id=408250378.mp3',
        cover: 'http://p1.music.126.net/hdrjFYPZXd2HgL-3OMlDIw==/18290375928279193.jpg',
      },
      {
        name: "アイロニ",
        artist: 'majiko',
        url: '  https://music.163.com/song/media/outer/url?id=31421442.mp3',
        cover: 'http://p1.music.126.net/4Zpn57gnArtV3F5xiNBK0g==/109951163598414321.jpg',
      },
      {
        name: "打上花火",
        artist: 'DAOKO / 米津玄師',
        url: '  https://music.163.com/song/media/outer/url?id=496869422.mp3',
        cover: 'http://p1.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg',
      },
      {
        name: "Shelter",
        artist: 'Porter Robinson、Madeon',
        url: '  https://music.163.com/song/media/outer/url?id=425280053.mp3',
        cover: 'http://p2.music.126.net/9krlgGqhzoAHfK5NIWTZbw==/109951163345022045.jpg',
      }
    ]
});