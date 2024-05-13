function bitchange() {

    const bit_input = document.getElementById("bit_input");
    bit_input.value = Math.floor(bit_input.value);
    const bits = bit_input.value;


    const byteInput = document.getElementById("byte_input");


    if (bits % 8 === 0) {
        byteInput.style.color = "green";
    } else {
        byteInput.style.color = "red";
    }


    byteInput.value = Math.floor(bits / 8);


    document.getElementById("bit_output").innerText =
        `Min Unsigned: 0
        Max Unsigned: ${BigInt(2 ** bits - 1)}
        ---
        Min Signed: ${BigInt(-(2 ** (bits - 1)))}
        Max Signed: ${BigInt(2 ** (bits - 1) - 1)}        `;
}

function bytechange() {
    document.getElementById("bit_input").value = document.getElementById("byte_input").value * 8;
    bitchange();
}


function bitenter() {

    const bit = document.getElementById("bit_input_2");
    const hex = document.getElementById("hex_input");
    const uint = document.getElementById("uint_input");
    // const sint = document.getElementById("sint_input");

    bit.value = bit.value.replace(/[^01]/g, "");

    hex.value = parseInt(bit.value, 2).toString(16).toUpperCase();
    uint.value = parseInt(bit.value, 2).toString(10);
    // sint.value = parseInt(bit.value >>> 0, 2).toString(10);
}

function hexenter() {

    document.getElementById("bit_input_2").value = Number(document.getElementById("uint_input").value).toString(2);
}

function uintenter() {
    document.getElementById("bit_input_2").value = Number(document.getElementById("uint_input").value).toString(2);
    bitenter();
}

// function sintenter() {
//     document.getElementById("bit_input_2").value = (Number(document.getElementById("sint_input").value) >>> 0).toString(2);
//     bitenter();
// }