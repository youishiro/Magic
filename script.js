document.addEventListener('DOMContentLoaded', () => {
    // Random Spell Generator for Regular Spells
    const spellButton = document.createElement('button');
    spellButton.textContent = 'Generate Random Spell';
    spellButton.style.marginTop = '20px';
    spellButton.style.padding = '10px 20px';
    spellButton.style.backgroundColor = '#4d004d';
    spellButton.style.color = '#fff';
    spellButton.style.border = 'none';
    spellButton.style.borderRadius = '5px';
    spellButton.style.cursor = 'pointer';

    const spellContainer = document.querySelector('#spells .spell-list');
    spellContainer.appendChild(spellButton);

    const spells = [
        { name: 'Prosperity Spell', description: 'Attract wealth and abundance.' },
        { name: 'Healing Spell', description: 'Promote physical and emotional healing.' },
        { name: 'Wisdom Spell', description: 'Enhance knowledge and intuition.' },
    ];

    spellButton.addEventListener('click', () => {
        const randomSpell = spells[Math.floor(Math.random() * spells.length)];
        const newSpell = document.createElement('div');
        newSpell.className = 'spell';
        newSpell.innerHTML = `<h3>${randomSpell.name}</h3><p>${randomSpell.description}</p>`;
        spellContainer.insertBefore(newSpell, spellButton);
    });

    // Random Black Magic Spell Generator
    const blackMagicButton = document.createElement('button');
    blackMagicButton.textContent = 'Generate Random Black Magic Spell';
    blackMagicButton.style.marginTop = '20px';
    blackMagicButton.style.padding = '10px 20px';
    blackMagicButton.style.backgroundColor = '#000000';
    blackMagicButton.style.color = '#ff4d4d';
    blackMagicButton.style.border = 'none';
    blackMagicButton.style.borderRadius = '5px';
    blackMagicButton.style.cursor = 'pointer';

    const blackMagicContainer = document.querySelector('#black-magic .spell-list');
    blackMagicContainer.appendChild(blackMagicButton);

    const blackMagicSpells = [
        { name: 'Hexing Spell', description: 'Bring misfortune to an enemy. Use with caution.' },
        { name: 'Binding Spell', description: 'Restrict someone\'s actions or influence.' },
        { name: 'Cursing Spell', description: 'Inflict harm or bad luck on a target.' },
        { name: 'invisibility', description: 'If you sprinkle some of the dust into your eyes,\ you will see but you will not be seen.' }
    ];

    blackMagicButton.addEventListener('click', () => {
        const randomSpell = blackMagicSpells[Math.floor(Math.random() * blackMagicSpells.length)];
        const newSpell = document.createElement('div');
        newSpell.className = 'spell dark';
        newSpell.innerHTML = `<h3>${randomSpell.name}</h3><p>${randomSpell.description}</p>`;
        blackMagicContainer.insertBefore(newSpell, blackMagicButton);
    });
});