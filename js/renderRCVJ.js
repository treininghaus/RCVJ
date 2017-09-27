// build from example https://threejs.org/examples/#webgl_loader_playcanvas
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
var camera, scene, renderer, stats;
function init() {
    	var container = document.getElementById( 'container' );
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
	camera.position.set( - 150, 300, 600 );
	scene = new THREE.Scene();
	//
	var manager = new THREE.LoadingManager();
	var loader = new THREE.OBJLoader( manager);
	loader.load( 'model/RCVJ.obj', function ( object ) {
		scene.add( object );
	});
   	//
	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( ambientLight );
	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
	camera.add( pointLight );
	scene.add( camera );
	//
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	//
	var controls = new THREE.OrbitControls( camera );
	//
	// stats = new Stats();
	// container.appendChild( stats.dom );
	//
	window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
	requestAnimationFrame( animate );
	render();
}
function render() {
	renderer.render( scene, camera );
}

init();
animate();

