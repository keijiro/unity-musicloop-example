#pragma strict

function Start() {
	yield WaitForSeconds(1.0);
	
	var audios = GetComponents.<AudioSource>();
	
	audios[0].Play();
	audios[1].Play(audios[0].clip.samples);
}
