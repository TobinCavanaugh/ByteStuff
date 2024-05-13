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
        Max Signed: ${BigInt(2 ** (bits - 1) - 1)}`;
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
    document.getElementById("bit_input_2").value = parseInt(document.getElementById("hex_input").value, 16).toString(2);
    bitenter();
}

function uintenter() {
    document.getElementById("bit_input_2").value = Number(document.getElementById("uint_input").value).toString(2);
    bitenter();
}

function numberscale() {
    const input = document.getElementById("numberscale_input");
    const values = {
        0: "the known number of languages better than C",
        1: "the amount of people who made this site",
        8: "the average RAM size in GB of a home PC",
        256: "the max value of a component of an 8 bit RGB value",
        4528: "the number of transistors on a MOS Technology 6502 microcontroller",
        2082240: "the number of pixels on a 1920x1080 display (1080p)",
        3686400: "the number of pixels on a 2560x1440 display (1440p)",
        8294400: "the number of pixels on a 3840x2160 display (4k)",
        983571056: "the speed of light in feet per second",
        4800000000: "the number of transistors on an Xbox One's GPU",
        8109166279: "the number of people alive as of 5:24 on 2024/05/12",
        67000000000: "the number of transistors on an M2 MAX CPU",
        1099511627776: "one terabyte (TB) of data in bytes",
        30000000000000: "the number of cells in the human body",
        26184000000000000000000: "the size of the internet as of 2024/05/12 in bytes",
        1000000000000000000000000: "the estimated number of stars in the universe",
        880000000000000000000000000: "the diameter of the universe in meters",
        3280000000000000000000000000000000000000000000000000000000000000000000000000000: "the number of particles in the known universe",
    }

    let lastKey = Number(Object.keys(values).pop());

    // const closest = values.keys()
    for (let key in values) {
        const a = Math.abs(input.value - key);
        const b = Math.abs(input.value - lastKey);

        if (a < b) {
            lastKey = key;
        }
    }

    document.getElementById("numberscale_output").innerText = `This number is close to the ${values[lastKey]} (${lastKey})`;
}


function eformToSciform(eForm) {
    const ef = "*10^"
    return (eForm.replace("e+", ef).replace("e", ef).replace("E+", ef).replace("E", ef));
}

function sciformToNum(sciForm) {
    const delim = ",";

    let repl = sciForm.replace("x10^", delim).replace(" x 10^", delim).replace("x 10^", delim).replace(" * 10^", delim).replace("* 10^", delim).replace("*10^", delim);

    const parts = repl.split(delim);

    return Number(parts[0]) * (10 ** Number(parts[1]));
}

function numberConvert() {

    const numInput = document.getElementById("num_input");
    const eInput = document.getElementById("e_input");
    const sciInput = document.getElementById("sci_input");

    eInput.value = Number(numInput.value).toExponential().toString();
    sciInput.value = eformToSciform(eInput.value);
}


function eConvert() {

    const numInput = document.getElementById("num_input");
    const eInput = document.getElementById("e_input");

    console.log(eInput.value);
    const e = eformToSciform(eInput.value);
    console.log(e);
    const parts = e.split("*10^");
    console.log(parts.length);

    numInput.value = Number(parts[0]) ** Number(parts[1]);

    numberConvert();
}

function sciConvert() {
    const numInput = document.getElementById("num_input");
    const sciInput = document.getElementById("sci_input");

    console.log(sciformToNum(sciInput.value));
    numInput.value = sciformToNum(sciInput).toString();

    numberConvert();
}

// function sintenter() {
//     document.getElementById("bit_input_2").value = (Number(document.getElementById("sint_input").value) >>> 0).toString(2);
//     bitenter();
// }