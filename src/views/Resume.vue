<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I am a software engineer currently working as an AR Software Engineer at
      <a href="https://www.trace3d.app/">Trace 3D</a> with a passion for
      developing interactive media applications. I’ve led projects ranging from
      immersive augmented reality experiences to 3D educational simulations. I
      enjoy working with multidisciplinary teams and have hands-on experience
      with Unity, C#, JavaScript, and Babylon.js. I am committed to strong
      programming practices and driven by a passion for crafting intuitive,
      engaging digital experiences.
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/AaronPost_Resume.pdf" target="_blank"
          ><i class="fa fa-download fa-lg fa-fw"></i>Resume PDF</a
        >
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <div style="clear:both" />

      <h2>Besides Programming...</h2>
      <div>
        <h3>I 🩶 Music</h3>
        <div>
          I deeply appreciate music -- creating it, listening to new releases,
          and following internet discourse.
        </div>

        <h3>I 🩵 Fitness</h3>
        <div>
          I love lifting heavy objects in my spare time. I've also been trying
          to convince myself I enjoy running..
        </div>

        <h3>I 💙 Film and TV</h3>
        <div>
          One of my favorite days was spent eating cherry pie at the real-life
          Double R Diner from Twin Peaks.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
