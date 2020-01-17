const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "アイロニ",
        artist: '许まじ娘',
        url: 'http://antiserver.kuwo.cn/anti.s?format=mp3|aac&rid=20673606&type=convert_url&response=res',
        cover: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjS_-f2-IrnAhXGUN4KHVRoABwQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Fhajimete2233&psig=AOvVaw2kHJHE2YbA3-JVKhHVJImm&ust=1579361147903826',
      }
      /*{
        name: '多余的解释',
        artist: '许嵩',
        url: 'http://www.ytmp3.cn/down/60447.mp3',
        cover: 'http://img.ytmp3.cn/image/78.jpg',
      }*/
    ]
});