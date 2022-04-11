const popUpDiv = document.querySelector(".pop-up-div");
const popUpClose = document.querySelector(".pop-up-close");
const popUpContainer = document.querySelector(".pop-up-container");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");

button1.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">TECHQUIZ</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Here’s an exciting opportunity to know around on growing technologies. Test your memory by
            the quirky questions coming your way. Showcase your knowledge with your partner by answering
            the questions and become a Tech geek among your group.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>Only team entries are eligible.</li>
                <li>A team shall consist of two members.</li>
                <li>The decision of the judges will be final and will not be subjected to any change.
                </li>
                <li>The questions shall be in the form of multiple choice, true or false, specific
                    answer questions.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes
                    before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp group.</li>
                <li>Id card or bonafide certificate is mandatory.</li>
                <li>Panel decision is final</li>
            </ul>
            <ul>
                <li>Round 1: General Topic</li>
                <li>Round 2: Technical Topic</li>
            </ul>
            <h4>Student coordinator: Gokul N Ph. +91 8754411553</h4>
            <button class="button" style="width: 30%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button2.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Paper presentation provides a platform for young minds to be the technology changers with their ideas and just let it flow through their words. Paper presentation is where the students can share their knowledge and improvise their communication skills.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>The team contains only two members.</li>
                <li>Team members can be from different colleges.</li>
                <li>Participants are requested to register in advance.
                </li>
                <li>Topics can be from any mechanical domain.</li>
                <li>Panel decision will be final.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp/Telegram group.</li>
                <li>Submit your manuscript through the link below</li>
                <li>College ID card and Bonafide certificate is mandatory</li>
                <li>Last date for the submission: MAY 03, 2021 (6:00PM)</li>
            </ul>
            <h4>Student coordinator: P M Bupathi Ram : +91 8056048674</h4>
            <button class="button" style="width: 30%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button3.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Paper presentation provides a platform for young minds to be the technology changers with their ideas and just let it flow through their words. Paper presentation is where the students can share their knowledge and improvise their communication skills.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>The team contains only two members.</li>
                <li>Team members can be from different colleges.</li>
                <li>Participants are requested to register in advance.
                </li>
                <li>Topics can be from any mechanical domain.</li>
                <li>Panel decision will be final.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp/Telegram group.</li>
                <li>Submit your manuscript through the link below</li>
                <li>College ID card and Bonafide certificate is mandatory</li>
                <li>Last date for the submission: MAY 03, 2021 (6:00PM)</li>
            </ul>
            <h4>Student coordinator: P M Bupathi Ram : +91 8056048674</h4>
            <button class="button" style="width: 30%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button4.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Paper presentation provides a platform for young minds to be the technology changers with their ideas and just let it flow through their words. Paper presentation is where the students can share their knowledge and improvise their communication skills.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>The team contains only two members.</li>
                <li>Team members can be from different colleges.</li>
                <li>Participants are requested to register in advance.
                </li>
                <li>Topics can be from any mechanical domain.</li>
                <li>Panel decision will be final.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp/Telegram group.</li>
                <li>Submit your manuscript through the link below</li>
                <li>College ID card and Bonafide certificate is mandatory</li>
                <li>Last date for the submission: MAY 03, 2021 (6:00PM)</li>
            </ul>
            <h4>Student coordinator: P M Bupathi Ram : +91 8056048674</h4>
            <button class="button" style="width: 30%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

button5.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Paper presentation provides a platform for young minds to be the technology changers with their ideas and just let it flow through their words. Paper presentation is where the students can share their knowledge and improvise their communication skills.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>The team contains only two members.</li>
                <li>Team members can be from different colleges.</li>
                <li>Participants are requested to register in advance.
                </li>
                <li>Topics can be from any mechanical domain.</li>
                <li>Panel decision will be final.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp/Telegram group.</li>
                <li>Submit your manuscript through the link below</li>
                <li>College ID card and Bonafide certificate is mandatory</li>
                <li>Last date for the submission: MAY 03, 2021 (6:00PM)</li>
            </ul>
            <h4>Student coordinator: P M Bupathi Ram : +91 8056048674</h4>
            <button class="button" style="width: 30%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
});

function closeTag() {
    popUpDiv.style.display = "none";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Paper presentation provides a platform for young minds to be the technology changers with their ideas and just let it flow through their words. Paper presentation is where the students can share their knowledge and improvise their communication skills.</p> <br>
        <div class="pop-up-text">
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>The team contains only two members.</li>
                <li>Team members can be from different colleges.</li>
                <li>Participants are requested to register in advance.
                </li>
                <li>Topics can be from any mechanical domain.</li>
                <li>Panel decision will be final.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp/Telegram group.</li>
                <li>Submit your manuscript through the link below</li>
                <li>College ID card and Bonafide certificate is mandatory</li>
                <li>Last date for the submission: MAY 03, 2021 (6:00PM)</li>
            </ul>
            <h4>Student coordinator: P M Bupathi Ram : +91 8056048674</h4>
            <button class="button" style="width: 30%;" onclick="closeTag()">Back to events</button>
        </div>
    </div>
    `;
}
