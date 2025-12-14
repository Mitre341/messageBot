const birthdayStory = [
  "0. Paula, today you turn 24. I have 12 reasons, and I will try to double them because today is the 24th.",
  "1. Happy birthday to the woman who carries calm the way others carry noise.",
  "2. You study literature, but you also live it carefully, patiently, and honestly.",
  "3. Borges once imagined the universe as a library. If that’s true, you are one of its quiet, essential books. And I hope you will upload your book to that artificial universe.",
  "4. Moldova lives in you the way Tatiana Țîbuleac writes it, fragile, strong, and full of quiet truth.",
  "5. You are not loud with the world, but the world listens when you speak. Except when we play table tennis, then you can be loud.",
  "6. That summer in Maine, in Rangeley, you learned how far courage can travel from home.",
  "7. You worked, you adapted, you stayed yourself, and that is rare.",
  "8. Peru taught us many things, including that neither of us loved Colca Canyon, and that’s okay.",
  "9. Some places test you, Colca Canyon did. What mattered was that we faced it side by side.",
  "10. Now Cartagena gives us warmth, colors, and days that feel like slow sentences, and mosquitoes, bites, and sweat.",
  "11. Even when we pack and unpack our lives again and again, I love how beautifully you plan every step, down to the tiniest details. And still forget raincoats, and things for your hair.",
  "12. You see patterns where others see confusion. Your conclusions always arrive quietly and stay. I think you understand life much better than most people.",
  "13. Virginia Woolf wrote about moments of being, and with you, even ordinary days become one.",
  "14. I love when you find new things to cook, chickpea curry, potato stew, sometimes tuna with mint.",
  "15. You don’t float easily in water, but on the ground, I think you float effortlessly through life.",
  "16. We jump over waves together, laughing, and that feels like freedom, except when salt water fills our nostrils and eyes.",
  "17. I love that you enjoy when I prepare hot chocolate for you with pure Colombian cacao, and I love doing it.",
  "18. I speak when the world needs words, you listen when the world needs understanding, together we balance.",
  "19. I love how you let me guide us through cities without navigation, trusting my experience, but even more, I love how you guide us through countries and places we visit.",
  "20. Gabriel García Márquez believed love grows stronger with time. I feel that truth living between us.",
  "21. You remind me that gentleness is not weakness, but a form of quiet strength. Sometimes I am too sensitive, but I love gentleness.",
  "22. Paula, happy 24th birthday. I choose you today, and in every chapter ahead."
];
// Hardcoded array of strings


let index = 0;

document.getElementById("nextBtn").addEventListener("click", function () {
  if (index < birthdayStory.length) {
    console.log(birthdayStory[index]);        // console log
    document.getElementById("output").textContent = birthdayStory[index]; // show on screen
    index++;
  } else {
    console.log("No more messages");
    document.getElementById("output").textContent = "No more messages";
  }
});


