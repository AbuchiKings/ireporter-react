class Typewriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.txt = '';
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.isDeleting = false;

    }
    type = () => {
        if (window.getComputedStyle(this.txtElement).getPropertyValue('display') !== 'none') {
            const current = this.wordIndex % this.words.length;
            const fulltext = this.words[current];

            if (this.isDeleting) {
                this.txt = fulltext.substring(0, this.txt.length - 1);
            } else {
                this.txt = fulltext.substring(0, this.txt.length + 1);
            }
            this.txtElement.textContent = this.txt;
            let typespeed = 100;
            if (this.isDeleting) {
                typespeed /= 2
            }
            if (!this.isDeleting && fulltext === this.txt) {
                typespeed = this.wait;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.wordIndex++
                typespeed = 500
            }
            setTimeout(() => this.type(), typespeed);

        }
    }
}


export default Typewriter;