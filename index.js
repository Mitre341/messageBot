const textStory  =[
  "For my birthday, you gave me 12 wishes, one every hour, and I loved waiting for each of them and reading them. This time, I was a bit lazy, so I made you this website. It’s a one time thing. But I doubled it! 24 wishes, one for each year of your life.\n\nToday you turn 24, in case you didn’t get it.",

  "🎉 Happy birthday 🎉 to the woman who carries calm the way others carry noise. 💐",
  "You study 📖, but you also live it carefully, patiently, and honestly.",
  "Borges once imagined the universe as a library. If that’s true, you are one of its quiet, essential books. 👓 And I hope you will upload yours to that artificial universe.",
  "Moldova lives in you the way Tatiana Țîbuleac writes it, fragile, strong, and full of quiet truth.",
  "You are not loud with the world, but the world listens when you speak. Except when we play table tennis, then you can be loud.",
  "You worked, you adapted, you stayed yourself, and that is rare.",
  "Peru taught us many things, including that neither of us loved Colca Canyon, and that’s okay.🥾",
  "Are you counting? That was ? wishes so far.",
  "Some places test you. Colca Canyon did. What mattered was that we faced it side by side.",
  "Now Cartagena gives us warmth, colors, days that feel like slow sentences, and 🦟, bites, and sweat.",
  "Even when we pack and unpack our 🧳 again and again, I love how beautifully you plan every step, down to the tiniest details.",
  "You see patterns where others see confusion. Your conclusions always arrive quietly and stay. I think you understand life much better than most people.",

  "It was really difficult to choose only 24 wishes or reasons. Just joking, how did you do it?",

  "Virginia 🐺 wrote about moments of being, and with you, even ordinary days become one.",

  "ChatGPT? Naaahhhh, it didn’t help me at all. All of these are from my heart <3",

  "I love when you find new things to cook, chickpea curry, potato stew, sometimes tuna with mint. But really, I enjoy your dishes, and even more when we experiment with food together.",
  "You don’t float easily in water. 🐬 But on the ground, and in life, I think you float effortlessly. 🏊🏻",
  "We jump over 🌊 together, like a 🦈, laughing, and that feels like freedom, except when salt water fills our nostrils and eyes.",
  "I love that you enjoy when I prepare hot🍫 for you with pure Colombian cacao, and I love doing it.",
  "I speak when the world needs words, you listen when the world needs understanding. Together, we balance.",
  "I love how you let me guide us through cities without 🧭, trusting my experience. But even more, I love how you guide us through countries and places we’ve visited, and you should know I trust you with that more than anyone.",
  "Gabriel García Márquez believed love grows stronger with time. I feel that truth living between us.",
  "Maaaaybe ChatGPT helped me a bit with the formulation of some wishes, but all of them are from my heart <3",

  "You remind me that gentleness is not weakness 🌹, but a form of quiet strength. Sometimes I am too sensitive for your gentleness, but I love gentleness."
]

;
// Hardcoded array of strings
const imageStory = [
  {img: "images/img0.jpg", text: "They say you’re getting older… so tell me, do you already feel like a granny?"},
  {img: "images/img1.jpg", text: "Today a fake Petra, but tomorrow I wish for you to see the real one too, and all Miracles of the world."},
  {img: "images/img2.jpg", text: "I wish you many breathtaking places like this. It fits you well"},
  {img: "images/img3.jpg", text: "But actually I know that something like this fits you more, because you are like a piece of art bold, beautiful, and astonishing. So that would be my wish for you to admire many more astonishing works of 'ass'. Hope we discover many more together."},
]

let textIndex = 0;
let imageIndex  = 0;
let mode = "text"; // text → images → end

const output = document.getElementById("output");
const img = document.getElementById("storyImg");
const btn = document.getElementById("nextBtn");
const imgText = document.getElementById("imgText");




  btn.addEventListener("click", () => {
  if (mode === "text") {
    if (textIndex < textStory.length) {
      output.textContent = textStory[textIndex++];
    } else {
      // switch to image mode
      mode = "images";
      output.hidden = true;
      img.hidden = false;
        imgText.hidden = false;

      img.src = imageStory[imageIndex].img;
            imgText.textContent = imageStory[imageIndex].text;
      imageIndex++;
    }
    return;
  }

  if (mode === "images") {
    if (imageIndex < imageStory.length) {
      img.src = imageStory[imageIndex].img;
          imgText.textContent = imageStory[imageIndex].text;
              imageIndex++; // 👈 THIS WAS MISSING

    } else {
      mode = "end";
      showEnd();
    }
  }
});

function showEnd() {
  document.getElementById("app").innerHTML = `
    <h1>🎂 MAKE A WISH! 🎂</h1>
    <button onclick="location.reload()">🔄 Start again</button>
  `;

}