import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Good Soup", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
    I led the design and development of a cozy point-and-click game where you play as a mischievous ghost, influencing the life of Amber, a culinary student. I built a behavior tree system that drives Amber’s actions, where player interactions directly impact the branches she follows. Your choices dynamically affect her mood, alter her decisions, and unlock different story outcomes.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/OPVhYqheEM8" frameborder="0" allowfullscreen></iframe>
    </div>


    <div class="paragraph">
        Coming soon to steam!
    </div>
    `, "#800080", true),
    new ProjectData("project-2", "Lost in the Static", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        I led the design and development of a narrative puzzle game over 6 weeks. I programmed many systems for the game and built a one-of-a-kind radio controller using an Arduino. I worked alongside a diverse team of six students: software engineers, artists, narrative writers. Lost in the Static was presented at the <a href="https://accad.osu.edu/outreach">2024 ACCAD Open House</a> as an example of some of the best work being done in the department.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ZJPeOQ3XgFY" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/litsgif (1).gif" alt="LITS demo" />
    <img class="pc-screenshot" src="img/projects/radiocontroller.gif" alt="Singing Addict Screenshot" />
    </div>
    `, "#880808"),
    new ProjectData("project-3", "ClashCraft", "img/projects/clash.png", `
    <div class="paragraph">
I created a Minecraft plugin using Java that transforms a multiplayer server into a recreation of the mobile game Clash of Clans. Players can build their own island, attack offline players' bases, and collect resources.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/H8aE69ND6ew" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#454B1B"),
    new ProjectData("project-4", "Limbo Arcade", "img/projects/limboarcade.png", `
    <div class="paragraph">
    I designed and developed a short puzzle game using C# and Unity. Along with programming, I created animations, 3D and 2D art assets, particle effects, and sound effects.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/nCea7lnLYwE" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#A9A9A9"),
    new ProjectData("project-5", "Stern Gerlach Simulation", "img/projects/sg.png", `
    <div class="paragraph">
        I designed and developed a prototype educational simulation with Unity and C# that intends to teach abstract physics concepts to college students. Users place down components including magnets and detector plates and fire silver atoms through the setup.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/GjAn0ApUaGY" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">

    </div>`, "#e48246")
];