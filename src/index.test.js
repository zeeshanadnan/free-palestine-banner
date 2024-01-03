const addAdditionalStatement = require('./utils/addStatement/addStatement');
const addSlogan = require("./utils/addSlogan/addSlogan");
const addCSSStyles = require("./utils/addCSS/addCSSStyles");

describe('addAdditionalStatement function', () => {
    let container; // A container element to simulate the freePalestine element

    beforeEach(() => {
        container = document.createElement('div'); // Create a div element to act as freePalestine
        document.body.appendChild(container); // Append the container to the document body
    });

    afterEach(() => {
        document.body.removeChild(container); // Clean up after each test
    });

    test('adds default statement when config is empty', () => {
        addAdditionalStatement(container, { statement: '', externalLink: '' });

        expect(container.innerHTML).toContain('Lets stand together in solidarity for the people of Palestine.');
    });

    test('adds custom statement when provided in config', () => {
        addAdditionalStatement(container, { statement: 'Custom statement', externalLink: '' });
        expect(container.innerHTML).toContain('Custom statement');
    });

    test('adds a link when a valid external link is provided', () => {
       addAdditionalStatement(container, { statement: '', externalLink: 'https://example.com' });

        const linkElement = container.querySelector('.free-paestine-banner-link');
        expect(linkElement).not.toBeNull();

        // Simulate click event and check if it opens in a new tab
        const openSpy = jest.spyOn(window, 'open');
        linkElement.dispatchEvent(new MouseEvent('click'));

        expect(openSpy).toHaveBeenCalledWith('https://example.com', '_blank');
        openSpy.mockRestore(); // Restore the original 'window.open' after the test
    });

    // Add more test cases to cover different scenarios (invalid URL, etc.) if needed
});

describe('addSlogan function', () => {
    let container; // A container element to simulate the freePalestine element

    beforeEach(() => {
        container = document.createElement('div');
    });

    afterEach(() => {
        global.document = undefined;
        container = undefined;
    });

    test('adds "free-palestine-banner" class to the element', () => {
        addSlogan(container);

        expect(container.classList.contains('free-palestine-banner')).toBe(true);
    });

    test('adds a red-text slogan to the element', () => {
        addSlogan(container);

        const sloganElement = container.querySelector('span');
        expect(sloganElement).not.toBeNull();
        expect(sloganElement.classList.contains('free-paestine-banner-text-color-red')).toBe(true);
        expect(sloganElement.innerHTML).toContain('#FreePalestine.');
    });

    // Add more test cases to cover edge cases or additional scenarios if needed
});

describe('addCSSStyles function', () => {
    let container;
    beforeEach(() => {
        container = document.createElement('div');
    });

    afterEach(() => {
        global.document = undefined;
    });

    test('applies styles to the document head', () => {
        addCSSStyles();

        // Retrieve the styles added to the head
        const headStyles = document.head.querySelector('style');

        expect(headStyles).not.toBeNull();
        expect(headStyles.innerHTML).toContain('margin-top: 45px;');
        // Add more assertions to check for other CSS rules applied
    });

    // Add more test cases for specific CSS rules if needed
});