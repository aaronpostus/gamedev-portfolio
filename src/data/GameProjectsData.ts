import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Good Soup", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
    I led the design and development of a cozy point-and-click game called <strong>Good Soup</strong> where you play as a mischievous ghost, influencing the life of Amber, a culinary student. I built a behavior tree system that drives Amber’s actions, where player interactions directly impact the branches she follows. Your choices dynamically affect her mood, alter her decisions, and unlock different story outcomes.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ZxpT_qYhBYM?si=8c0U85ghGwJnQBA0" frameborder="0" allowfullscreen></iframe>
    </div>

        <div class="paragraph">
<strong>Good Soup</strong> went through four key development milestones: a "Core Mechanics" whitebox, followed by alpha, beta, and gold iterations. Each release was thoroughly playtested, and I worked to integrate as much feedback as possible, with a focus on refining mechanics, game feel, intuitiveness, and art assets.
        </div>
        <div class="paragraph center">
            <img class="pc-screenshot" src="img/projects/versionssouop.gif"></img>
        </div>
    <div class="paragraph center">
        <strong>Good Soup is coming soon to steam!</strong>
    </div>
    `, "#800080", true),
    new ProjectData("project-2", "Lost in the Static", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        I led the design and development of a narrative puzzle game over 6 weeks. I programmed many systems for the game and built a one-of-a-kind radio controller using an Arduino. I worked alongside a diverse team of six students: software engineers, artists, narrative writers. <strong>Lost in the Static</strong> was presented at the <a href="https://accad.osu.edu/outreach">2024 ACCAD Open House</a> as an example of some of the best work being done in the department.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ZJPeOQ3XgFY" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/litsgif (1).gif" alt="LITS demo" />
    <img class="pc-screenshot" src="img/projects/radiocontroller.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/controllerfront.jpg" alt="LITS demo" />
    <img class="pc-screenshot" src="img/projects/controllerwiring.jpg" alt="Singing Addict Screenshot" />
    </div>
    `, "#880808"),
    new ProjectData("project-3", "ClashCraft", "img/projects/clash.png", `
    <div class="paragraph">
I created a Minecraft plugin using Java that transforms a multiplayer server into a recreation of the mobile game Clash of Clans. Players can build their own island, attack offline players' bases, and collect resources.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/H8aE69ND6ew" frameborder="0" allowfullscreen></iframe>
    </div>
    Sample JSON Data for Player Islands
    <pre class="code-snippet">
{
    "island": {
        "buildingsToSave": [
        {
            "type": "TownHall",
            "properties": {
            "state": {
                "type": "IslandState",
                "properties": {}
            },
            "uuid": "756d6990-126a-4d6c-8d14-87987bce9feb",
            "x": 36,
            "z": 30,
            "buildTime": 4,
            "level": 1
            }
        },
        {
            "type": "ElixirCollector",
            "properties": {
                "amount": 5000.0,
                "currencyName": "elixir",
                "state": {
                    "type": "IslandState",
                    "properties": {}
                },
                "uuid": "8826a726-1965-4d24-bdb0-e954e2b13146",
                "x": 38,
                "z": 54,
                "buildTime": 686,
                "level": 4
            }
        },
        {
            "type": "ElixirStorage",
            "properties": {
                "state": {
                    "type": "IslandState",
                    "properties": {}
                },
                "uuid": "4cf8291b-ccc0-4a0f-ad9d-7ca8c1d25e38",
                "x": 22,
                "z": 50,
                "buildTime": 1412,
                "level": 3
            }
        }
        ]
    },
    "currencies": {
        "elixir": {
            "type": "Elixir",
            "properties": {
                "amount": 7000,
                "maxAmount": 7000
            }
        }
    },
    "u": "89465e61-a25d-45a1-891e-1fcac9bf49f2",
    "playerUsername": "Aaronn"
}
    </pre>
    `, "#454B1B"),
    new ProjectData("project-4", "Limbo Arcade", "img/projects/limboarcade.png", `
    <div class="paragraph">
    I designed and developed a short puzzle game using C# and Unity. Along with programming, I created basic animations, 3D and 2D art assets, particle effects, and sound effects.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/nCea7lnLYwE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        <strong>Limbo Arcade</strong> was the culmination of three smaller, experimental PS2-style games I made. Playtesters were most captivated by the light puzzle aspects of these games, so I structured <strong>Limbo Arcade</strong> as an escape room full of puzzles.
        You can view the other Limbo games <a href="https://www.youtube.com/watch?v=EA5PAlIobvw&list=PLjBSsBYMtaRxzSvgKYxw55_NHFzq9YmrI">here</a>.
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