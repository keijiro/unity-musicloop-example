#pragma strict

function Start() {
	var audios = GetComponents.<AudioSource>();

	audios[0].clip = WWW("http://cloud.github.com/downloads/keijiro/unity-musicloop-example/Intro.ogg").GetAudioClip(false, true, AudioType.OGGVORBIS);
	audios[1].clip = WWW("http://cloud.github.com/downloads/keijiro/unity-musicloop-example/Loop.ogg").GetAudioClip(false, true, AudioType.OGGVORBIS);

	Debug.Log("Loading...");

	while (!audios[0].clip.isReadyToPlay || !audios[1].clip.isReadyToPlay) yield;

	Debug.Log("Play");

	audios[0].Play();
	audios[1].Play(audios[0].clip.samples);
}
