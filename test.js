import { createDiv, createInput, createSelect, createDataList, createBtn, createA, createH, createLabel } from './utils.js';
const body = document.querySelector( 'body' );

body.append( 
    createDiv(
        'test-1',
        'Div di esempio',
        'col',
        { test: '1' }
    )
);

body.append(
    createInput(
        'input-1',
        'text',
        'placeholder',
        'col',
        true
    )
);

body.append(
    createSelect(
        'select-1',
        'placeholder',
        'col',
        [
            { 
                key: 'opzione1',
                value: 'opzione 1',
                disabled: true,
                selected: true,
            },
            {
                key: 'opzione2',
                value: 'opzione 2',
                disabled: true,
            },
            {
                key: 'opzione3',
                value: 'opzione 3'
            }
        ]
    )
);

body.append(
    createDataList(
        'input-1-datalist',
        [ 'opzione 1', 'opzione 2', 'opzione 3']
    )
);

body.append(
    createBtn(
        'Bottone',
        [ 'btn', 'btn-primary' ]
    )
);

body.append( 
    createA(
        'Clicca qui',
        '/vai-qui.html',
        '_self',
        'color-primary'
    )
);

body.append(
    createH(
        'h2',
        'header-1',
        'Header',
        'color-white'
    )
);

body.append(
    createLabel(
        'label-1',
        'Etichetta',
        'input-1',
    )
);