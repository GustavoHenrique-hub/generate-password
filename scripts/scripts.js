const _password = {
    value: '',
    length: 15,
    characters: {
        numbers: '0123456789',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        special: '?/~^{}[]!@#$%&*()_-+=.,:;'
    },

    generate(chars){
        let pwd = '';

        this.length = this.length < 5 || this.length > 255 ? 15 : this.length;

        chars = chars || Object.values(this.characters).join();

        for (let i = 0; i < this.length; i++) {
            pwd  += chars[Math.floor(Math.random() * chars.length)];
            
        }

        this.value = pwd;
        return pwd;
    }

    
}

const passwordContent = document.getElementById('resultado');
const btnGenerate = document.getElementById('pswGenerate');

const passwordLenth = document.getElementById('pswLenght')
const passwordInputChars = document.getElementById('check').getElementsByTagName('input')

function pswGenerate(){
    let chars = '';

    for (let i = 0; i < passwordInputChars.length; i++) {

        if (passwordInputChars[i].checked){
            chars += _password.characters[passwordInputChars[i].name]
        }
        
    }

    _password.length = passwordLenth.value;
    passwordContent.textContent = _password.generate(chars);
    
}

for (let i = 0; i < passwordInputChars.length; i++) {
    
    passwordInputChars[i].addEventListener('change', pswGenerate)
    
}

