let currentCategory = 'coffee';

function showImage(category) {
    currentCategory = category;
    const image = document.getElementById('current-image');
    switch (category) {
        case 'coffee':
            image.src = 'assets/images/coffee-thumbnail.jpg';
            break;
        case 'pasta':
            image.src = 'assets/images/pasta-thumbnail.jpg';
            break;
        case 'mojito':
            image.src = 'assets/images/mojito-thumbnail.jpg';
            break;
        case 'pizza':
            image.src = 'assets/images/pizza-thumbnail.jpg';
            break;
    }
}

function redirectToPage() {
    switch (currentCategory) {
        case 'coffee':
            window.location.href = 'coffee.html';
            break;
        case 'pasta':
            window.location.href = 'pasta.html';
            break;
        case 'mojito':
            window.location.href = 'mojito.html';
            break;
        case 'pizza':
            window.location.href = 'pizza.html';
            break;
    }
}
