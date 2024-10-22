<template>
  <div>
    <h1>Contact Me</h1>

    <div style="margin-bottom:40px;">
      I'm looking for a job as a software engineer.<br />Feel free to reach out
      to me about any opportunity!
    </div>

    <ul>
      <li>
        <i class="fa fa-user-circle-o fa-lg fa-fw"></i>
        <a href="http://aaronpost.dev" target="_blank">https://aaronpost.dev</a>
      </li>
      <li>
        <i class="fa fa-envelope-o fa-lg fa-fw"></i>
        <a href="mailto:aaronpost@gmail.com" target="_blank"
          >aarontpost@gmail.com</a
        >
      </li>
      <li>
        <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%;"></i>
        <a href="https://www.linkedin.com/in/aaron-t-post/" target="_blank"
          >linkedin.com/in/aaron-t-post</a
        >
      </li>
      <li>
        <i class="fa fa-github fa-lg fa-fw"></i>
        <a href="https://github.com/aaronpostus" target="_blank"
          >github.com/aaronpostus</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding-inline-start: 0px;
}

li {
  line-height: 1.8em;
  font-size: 1.2em;
}

@media only screen and (min-width: 620px) {
  ul {
    padding-inline-start: 40px;
  }

  li {
    line-height: 2em;
    font-size: 1.4em;
  }
}

i {
  margin-right: 20px;
}
</style>
