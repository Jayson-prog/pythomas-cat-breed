function showBreed(breed) {
    // Hide all breed sections
    document.getElementById('all').style.display = 'none';
    document.getElementById('persian').style.display = 'none';
    document.getElementById('siamese').style.display = 'none';
    document.getElementById('maineCoon').style.display = 'none';
    document.getElementById('ragdoll').style.display = 'none';
    document.getElementById('scottish').style.display = 'none';
    document.getElementById('munchkin').style.display = 'none';
    document.getElementById('bengal').style.display = 'none';

    if (breed === 'all') {
        document.getElementById('all').style.display = 'block';
    } else {
        document.getElementById(breed).style.display = 'block';
    }
}