<template>
  <div>
    <h1>Other Projects</h1>

    <div style="margin-bottom: 30px;">
      These are other software projects that I have worked on outside of my 3D
      work.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function() {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
