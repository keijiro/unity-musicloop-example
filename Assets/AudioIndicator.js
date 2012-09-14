#pragma strict

var target : GameObject;
var index = 0;

private var buffer = new float[44100 / 60];
private var source : AudioSource;

function Start() {
	source = target.GetComponents.<AudioSource>()[index];
}

function Update() {
	source.GetOutputData(buffer, 0);

	var rms = 0.0;
	for (var level in buffer) {
		rms += level * level;
	}
	rms = Mathf.Sqrt(rms / buffer.Length);

	var dbScale = 0.5 * (2.0 + Mathf.Log10(rms));
	transform.localScale = Vector3.one * Mathf.Clamp01(dbScale);
}
