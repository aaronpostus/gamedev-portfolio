<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello, my name is <strong>Aaron Post</strong> 👋</h1>

    <div class="paragraph">
      <div>
        I am a recent graduate from The Ohio State University, and I am
        passionate about <br />
        building interactive media applications, especially alongside artists.
      </div>

      <div style="margin-top: 20px;">
        I am currently working as a Software Engineering Intern for
        <a href="https://www.trace3d.app/">Trace 3D</a> to make cutting-edge
        tools for their augmented reality app. Outside of work, I have worked on
        <router-link to="/game-projects">many games</router-link> and
        <router-link to="/other-projects">other software projects</router-link>.
        <br />
        <br />
        Feel free to take a look!
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Aaron Post" />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
