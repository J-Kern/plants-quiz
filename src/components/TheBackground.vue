<template>
  <div id="the-background" class="bg-cover" :style="{backgroundImage:`url(@/assets/bg.jpg)`}"></div>
<!--  <div id="the-background" class="bg-cover"></div>-->
</template>

<script lang="js">
  export default {
    name: "TheBackground",
    created() {},
    data() {
        return {
          camera: null,
          scene: null,
          renderer: null,
          mesh: null
        };
      },
    methods: {
      init() {
        let container = document.getElementById('the-background');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;

        this.scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

      },
      animate() {
          requestAnimationFrame(this.animate);
          this.mesh.rotation.x += 0.01;
          this.mesh.rotation.y += 0.02;
          this.renderer.render(this.scene, this.camera);
      }
    },
  };
</script>

<style scoped>
#the-background {
  background-image: require('@/assets/bg.jpg');
  @apply absolute inset-0 -z-10 w-full h-full;
}
</style>