/**
 * Generate a DIV tag
 * 
 * @param {String} id 
 * @param {String} text content text
 * @param {String|Array} classes class list
 * @param {Object} attributes attributes list
 * @returns 
 */
export function createDiv( id, text = '', classes = [], attributes = {} ) {
    let defaultDiv = document.createElement( 'div' );
    defaultDiv.innerHTML = text;
    ( typeof classes === 'string' ) ? defaultDiv.classList.add( classes ) : defaultDiv.classList.add( ...classes );
    for( const[ key, value ] of Object.entries( attributes ) ) {
        defaultDiv.setAttribute( key, value )
    }
    defaultDiv.id = id;
    return defaultDiv;
}

/**
 * Generate an INPUT tag
 * 
 * @param {String} id 
 * @param {String} type text, number, etc
 * @param {String} placeholder to print in field
 * @param {String|Array} classes class list
 * @param {Boolean} datalist is an input datalist?
 * @returns 
 */
export function createInput( id, type, placeholder = '', classes = [], datalist = false ){
    let defaultInput = document.createElement( 'input' );
    defaultInput.name = defaultInput.id = id;
    defaultInput.type = type;
    defaultInput.placeholder = placeholder;
    ( typeof classes === 'string' ) ? defaultInput.classList.add( classes ) : defaultInput.classList.add( ...classes );
    if( datalist ) defaultInput.setAttribute( 'list', `${id}-datalist` );
    return defaultInput;
}

/**
 * Generate a SELECT/OPTION tag
 * 
 * @param {String} id 
 * @param {String} placeholder to print in field
 * @param {String|Array} classes class list
 * @param {Array} options options to nest
 * @returns 
 */
export function createSelect( id, placeholder, classes = [], options = [] ){
    let defaultSelect = document.createElement( 'select' );
    let option;
    defaultSelect.name = defaultSelect.id = id;
    defaultSelect.placeholder = placeholder;
    ( typeof classes === 'string' ) ? defaultSelect.classList.add( classes ) : defaultSelect.classList.add( ...classes );
    options.forEach( ( { key, value, disabled = false, selected = false } ) => {
        option = document.createElement( 'option' );
        option.value = key;
        option.innerText = value;
        option.disabled = disabled;
        option.selected = selected;
        defaultSelect.appendChild( option );
    });
    return defaultSelect;
}

/**
 * Generate a DATALIST tag
 * 
 * @param {String} id 
 * @param {Array} options options to nest
 * @returns 
 */
export function createDataList( id, options = [] ){
    let defaultDataList = document.createElement( 'datalist' );
    let option;
    defaultDataList.id = id;
    options.forEach( value => {
        option = document.createElement( 'option' );
        option.value = value;
        defaultDataList.appendChild( option );
    });
    return defaultDataList;
}

/**
 * Generate a BUTTON tag
 * 
 * @param {String} label CTA
 * @param {String|Array} classes class list
 * @returns 
 */
export function createBtn( label, classes = [] ){
    let defaultBtn = document.createElement( 'button' );
    defaultBtn.innerHTML = label;
    defaultBtn.classList.add( 'btn-cuneo' );
    ( typeof classes === 'string' ) ? defaultBtn.classList.add( classes ) : defaultBtn.classList.add( ...classes );
    return defaultBtn;
}

/**
 * Generate an A tag
 * 
 * @param {String} label CTA
 * @param {String} href specified the URL
 * @param {String} target _blank(default), _self, _parent, _top
 * @param {String|Array} classes class list
 * @returns 
 */
export function createA( label, href, target = '_blank', classes = [] ){
    let a = document.createElement( 'a' );
    a.innerText = label;
    a.href = href;
    a.target = target;
    ( typeof classes === 'string' ) ? a.classList.add( classes ) : a.classList.add( ...classes );
    return a;
}

/**
 * Generate an H tag
 * 
 * @param {String} header ex: h1, h2, h3, h4, h5, h6
 * @param {String} id identifier
 * @param {String} text content text
 * @param {String|Array} classes class list
 * @returns 
 */
export function createH( header = 'h1', id, text, classes = [] ){
    let h = document.createElement( header );
    h.id = id;
    h.innerHTML = text;
    ( typeof classes === 'string' ) ? h.classList.add( classes ) : h.classList.add( ...classes );
    return h;
}

/**
 * 
 * @param {String} id 
 * @param {String} text 
 * @param {String} attrFor 
 * @param {String|Array} classes 
 */
export function createLabel( id, text, attrFor, classes = [] ){
    let label = document.createElement( 'label' );
    label.id = id;
    label.innerHTML = text;
    label.for = attrFor;
    ( typeof classes === 'string' ) ? label.classList.add( classes ) : label.classList.add( ...classes );
    return label;
}