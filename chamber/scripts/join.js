// get timestamp and set it in the hidden field
const timestampField = document.getElementById('timestamp');
const currentTime = new Date();
timestampField.value = currentTime.toLocaleString();

const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');
const openButton4 = document.querySelector('#openButton4');
const dialogBox = document.querySelector('#dialogBox');
const dialogText = document.querySelector('#dialogBox div');
const closeButton = document.querySelector('#closeButton');

openButton1.addEventListener('click', () => {
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

openButton2.addEventListener('click', () => {
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

openButton3.addEventListener('click', () => {
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

openButton4.addEventListener('click', () => {
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

