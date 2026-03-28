// get timestamp and set it in the hidden field
const timestampField = document.getElementById('timestamp');
const currentTime = new Date();
timestampField.value = currentTime.toLocaleString();

const npBtn = document.querySelector('#npBtn');
const bronzeBtn = document.querySelector('#bronzeBtn');
const silverBtn = document.querySelector('#silverBtn');
const goldBtn = document.querySelector('#goldBtn');
const dialogBox = document.querySelector('#dialogBox');
const dialogText = document.querySelector('#dialogBox div');
const closeButton = document.querySelector('#closeButton');

npBtn.addEventListener('click', () => {
    dialogText.innerHTML = `
    <h3>Non Profit Membership</h3>
    <p>This is a non-profit and no-fee membership level offering the following benefits:</p>
    <ul>
        <li>Exclusive event invitations</li>
        <li>Priority customer support</li>
        <li>Complimentary workshop registration</li>
    </ul>`;
    dialogBox.showModal();
});

bronzeBtn.addEventListener('click', () => {
    dialogText.innerHTML = `
    <h3>Bronze Membership</h3>
    <p>This membership level provides fundamental benefits, including:</p>
    <ul>
        <li>Exclusive event invitations</li>
        <li>Priority customer support</li>
        <li>Complimentary workshop registration</li>
        <li>Discounted training programs</li>
        <li>Enhanced website listing</li>
    </ul>
`;
    dialogBox.showModal();
});

silverBtn.addEventListener('click', () => {
    dialogText.innerHTML = `
    <h3>Silver Membership</h3>
    <p>Silver Membership offers advanced benefits, including:</p>
    <ul>
        <li>Exclusive event invitations</li>
        <li>Priority customer support</li>
        <li>Complimentary workshop registration</li>
        <li>Discounted training programs</li>
        <li>Enhanced website listing</li>
        <li>Prominent homepage feature</li>
        <li>Complimentary annual conference tickets</li>
    </ul>`;
    dialogBox.showModal();
})

goldBtn.addEventListener('click', () => {
    dialogText.innerHTML = `
    <h3>Gold Membership</h3>
    <p>Gold Membership provides premium benefits, including:</p>
    <ul>
        <li>Exclusive event invitations</li>
        <li>Priority customer support</li>
        <li>Complimentary workshop registration</li>
        <li>Discounted training programs</li>
        <li>Enhanced website listing</li>
        <li>Prominent homepage feature</li>
        <li>Complimentary annual conference tickets</li>
        <li>Personalized account management</li>
        <li>Early access to new products and services</li>
    </ul>`;;
    dialogBox.showModal();
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});

