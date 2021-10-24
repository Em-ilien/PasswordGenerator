let hebergeurButton = document.querySelector("footer button");

hebergeurButton.addEventListener("click", (e) => {
    hebergeurButton.parentElement.innerHTML = `Hébergeur : OVH ; RCS Roubaix – Tourcoing 424 761 419 00045 ; Code APE 6202A ; N° TVA : FR 22 424 761 419 ; Siège social : 2 rue Kellermann - 59100 Roubaix - France.`;
});