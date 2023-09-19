const renderGift = async () => {
    try {
        const requestedID = parseInt(window.location.href.split('/').pop());
        const response = await fetch('/gifts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const giftContent = document.getElementById('gift-content');

        let gift = data.find(gift => gift.id === requestedID);
        
        if (gift) {
            document.getElementById('image').src = gift.image;
            document.getElementById('name').textContent = gift.name;
            document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy;
            document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint;
            document.getElementById('audience').textContent = 'Great For: ' + gift.audience;
            document.getElementById('description').textContent = gift.description;
            document.title = `UnEarthed - ${gift.name}`;
        } else {
            const message = document.createElement('h2');
            message.textContent = 'No Gifts Available 😞';
            giftContent.appendChild(message);
        }
    } catch (error) {
        console.error('Fetch failed:', error);
    }
};

renderGift();
