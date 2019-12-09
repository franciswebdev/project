


@endCard('share')
@stateHandler('proxyAPI')
class VideoPlayer {

  @dfp
  play() { }
}

@login('video-login-template')
@endCard('subscribe', 'share')
class TWGVideoPlayer extends VideoPlayer {

  @dfp('with-companion')
  play() {}
}

@introCard()
class InsightVideoPlayer extends VideoPlayer {}

