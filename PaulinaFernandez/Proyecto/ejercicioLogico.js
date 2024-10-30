const mensaje = "^[()`~^*/?`[()^+`°~()#[$()/~()%-[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^-{()*~¡[$[{()¡[()?=[]`-¬]()¿()[{;+[$_~()`~]=-]+~ ";

function descifrarMensaje(mensaje) {
    const simbolosAVocales = {
        '?': 'a',
        '[': 'e',
        '-': 'i',
        '~': 'o',
        '+': 'u',
        '¬': 'ó',
        '()': '',
        '^': 'm',
        '=': 't',
        '$': 'r',
        '{': 's',
        '/': 'l',
        '`': 'c',
        ']': 'n',
        '*': 'p',
        '%': 'b',
        '}': 'q',
        '#': 'v',
        '!': 'j',
        '¡': 'd',
        '¿': 'y',
        '°': 'h',
        ';': 'f',
        '_': 'z'

    };

    let mensajeDescifrado = '';
    for (let i = 0; i < mensaje.length; i++) {
        const simbolo = mensaje[i];
        mensajeDescifrado += simbolosAVocales[simbolo] || simbolo;
    }

    return mensajeDescifrado;
}

const mensajeDescifrado = descifrarMensaje(mensaje);
console.log(mensajeDescifrado);