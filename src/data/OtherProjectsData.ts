import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Simple Drive", "img/projects/drive.png", `
    <div class="paragraph">
      I designed and developed a Windows Forms app that integrates with AWS services. Users are able to create their own account and securely upload, download, and share files in the cloud.
            </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/eu_6SOVnN8g" frameborder="0" allowfullscreen></iframe>
    </div>
        <div class="paragraph center">
              <div class="notice">
                Source code available on <a href="https://github.com/aaronpostus/SimpleDrive" target="_blank">GitHub</a>.
              </div>
        </div>
    `, "#000000", false, true),
    new ProjectData("project-7", "Network File Transfer Programs", "img/projects/networkinglabs.png", `
    <div class="paragraph">
I created four file transfer programs with Python that send files over the internet using UDP and TCP. I implemented an alternating-bit protocol that retransmits lost packets.
</br>
Lab 1: File Transfer </br>

Lab 2: File Transfer via TCP </br>

Lab 3: File Transfer via UDP </br>

Lab 4: File Transfer via UDP (with dropped packets in both directions)            

</div>

        <div class="paragraph center">
              <div class="notice">
                Source code available on <a href="https://github.com/aaronpostus/cse3461" target="_blank">GitHub</a>.
              </div>
        </div>
            <div class="paragraph center">

            </div>`, "#000000"),
    new ProjectData("project-8", "Toy Interpreter and Tokenizer", "img/projects/coreprogram.png", `
    <div class="paragraph">
I created an interpreter and tokenizer in Java for the toy language CORE. The interpreter is full-featured; it parses, pretty-prints, and executes code.

        <div class="paragraph center">
              <div class="notice">
                Source code available on <a href="https://github.com/aaronpostus/CSE3341-PROJECT" target="_blank">GitHub</a>.
              </div>
        </div>

            <div class="paragraph center">
            </div>`)
];