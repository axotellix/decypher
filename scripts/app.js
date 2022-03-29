
// [ PRESETS ]
const btn_enter     = document.querySelector('#btn_enter');
const btn_decypher  = document.querySelector('#btn_decypher');
const inp_pass      = document.querySelector('#inp_pass')
const inp_text      = document.querySelector('#inp_text')
const cypher_str    = 'иккечкоодлт ч кко б  оловрова вюотк'
const decypher_str  = 'ключ от кладовки в коробке от очков'



// [ MAIN ]

// button > enter
if( btn_enter !== null ) {
    btn_enter.addEventListener('click', ( e ) => {
        e.preventDefault()
        let pass = inp_pass.value
        if( pass == '1270' ) {
            window.location.href = "decypher.html"
        }
    })
}

// button > decypher
if( btn_decypher !== null ) {
    btn_decypher.addEventListener('click', ( e ) => {
        e.preventDefault()
        let text = inp_text.value
        if( text == cypher_str ) {
            inp_text.value = decypher_str
        }
    })
}