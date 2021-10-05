<template>
<!--  <div id="the-background" class="bg-cover" style="background-image:url('./static/assets/bg.jpg')"></div>-->
   <div id="the-background"></div>
</template>

<script lang="js">
//import * as Three from 'three'

export default {
  name: "TheBackground",
  data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null
      };
    },
  // methods: {
  //   init() {
  //     let container = document.getElementById('the-background');

  //     this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
  //     this.camera.position.z = 1;

  //     this.scene = new Three.Scene();

  //     let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
  //     let material = new Three.MeshNormalMaterial();

  //     this.mesh = new Three.Mesh(geometry, material);
  //     this.scene.add(this.mesh);

  //     this.renderer = new Three.WebGLRenderer({antialias: true});
  //     this.renderer.setSize(container.clientWidth, container.clientHeight);
  //     container.appendChild(this.renderer.domElement);

  //   },
  //   animate() {
  //       requestAnimationFrame(this.animate);
  //       this.mesh.rotation.x += 0.01;
  //       this.mesh.rotation.y += 0.02;
  //       this.renderer.render(this.scene, this.camera);
  //   }
  // },
  // mounted() {
  //     this.init();
  //     this.animate();
  // }
};
</script>

<style scoped>
#the-background {
  @apply absolute inset-0 -z-10 w-full h-full transition-all duration-500 dark:bg-gray-800 bg-gray-200;
}
</style>
