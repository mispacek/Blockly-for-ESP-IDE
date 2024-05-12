/**Converts RGB to HEX
  * @param {number} r - Red color, from 0 to 255.
  * @param {number} g - Green color, from 0 to 255.
  * @param {number} b - Blue color, from 0 to 255.
  * @returns {string} HEX code for the RGB color.
  */
  function RGB2HEX(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  /**Converts HEX to RGB
  * @param {string} hex - HEX code
  * @returns {(Object|null)} RGB code for the RGB color.
  */
  function HEX2RGB(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  /**Converts HUE to HEX
  * @param {number} h - Hue, from 0 to 360.
  * @param {number} s - Saturation, from 0 to 100.
  * @param {number} l - Lightness, from 0 to 100.
  * @returns {string} HEX code for the HUE color.
  */
  function HUE2HEX (h,s,l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  } 


/// Pinout ESP8266
Blockly.Blocks['pinout8266'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('pin')
        .appendField(new Blockly.FieldDropdown([
            ["D0 / GPIO16", "16"],
            ["D1 / GPIO05", "5"],
            ["D2 / GPIO04", "4"],
            ["D3 / GPIO00", "0"],
            ["D4 / GPIO02", "2"],
            ["D5 / GPIO14", "14"],
            ["D6 / GPIO12", "12"],
            ["D7 / GPIO13", "13"],
            ["D8 / GPIO15", "15"],
            ["RX / GPIO03", "3"],
            ["TX / GPIO01", "1"],
            ]), 'PIN');
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setHelpUrl("http://iotserver.cz");
  },
};


/// Pinout ESP32
Blockly.Blocks['pinout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('pin')
        .appendField(new Blockly.FieldDropdown([
            ["00 / GPIO00", "0"],
            ["01 / TX0 / GPIO01", "1"],
            ["02 / GPIO02", "2"],
            ["03 / RX0 / GPIO03", "3"],
            ["04 / GPIO04", "4"],
            ["05 / GPIO05", "5"],
            ["12 / GPIO12", "12"],
            ["13 / GPIO13", "13"],
            ["14 / GPIO14", "14"],
            ["15 / GPIO15", "15"],
            ["16 / RX2 / GPIO16", "16"],
            ["17 / TX2 / GPIO17", "17"],
            ["18 / GPIO18", "18"],
            ["19 / GPIO19", "19"],
            ["21 / GPIO21", "21"],
            ["22 / LED / GPIO22", "22"],
            ["23 / GPIO23", "23"],
            ["25 / GPIO25", "25"],
            ["26 / GPIO26", "26"],
            ["27 / GPIO27", "27"],
            ["32 / ADC / GPIO32", "32"],
            ["33 / ADC / GPIO33", "33"],
            ["34 / ADC / GPIO34", "34"],
            ["35 / ADC / GPIO35", "35"],
            ["VP / ADC / GPIO36", "36"],
            ["VN / ADC / GPIO39", "39"],
            ]), 'PIN');
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pins-and-gpio");
  },
};



/// Pinout ESP32C3
Blockly.Blocks['pinout_ESP32C3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('pin')
        .appendField(new Blockly.FieldDropdown([
            ["00 / GPIO00", "0"],
            ["01 / GPIO01", "1"],
            ["02 / GPIO02", "2"],
            ["03 / GPIO03", "3"],
            ["04 / GPIO04", "4"],
            ["05 / GPIO05", "5"],
            ["06 / GPIO06", "6"],
            ["07 / GPIO07", "7"],
            ["08 / GPIO08", "8"],
            ["09 / GPIO09", "9"],
            ["10 / GPIO10", "10"],
            ["18 / GPIO18", "18"],
            ["19 / GPIO19", "19"],
            ["20 / U0RXD / GPIO20", "20"],
            ["21 / U0TXD / GPIO21", "21"],
            ]), 'PIN');
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pins-and-gpio");
  },
};


/// ADC Pinout
Blockly.Blocks['adc_pinout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('pin')
        .appendField(new Blockly.FieldDropdown([
            ["32 / ADC / GPIO32", "32"],
            ["33 / ADC / GPIO33", "33"],
            ["34 / ADC / GPIO34", "34"],
            ["35 / ADC / GPIO35", "35"],
            ["VP / ADC / GPIO36", "36"],
            ["VN / ADC / GPIO39", "39"],
            ]), 'PIN');
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp8266/quickref.html#pins-and-gpio");
  },
};


/// ADC Pinout
Blockly.Blocks['adc_ESP32C3_pinout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('pin')
        .appendField(new Blockly.FieldDropdown([
            ["00 / ADC1_CH0 / GPIO00", "0"],
            ["01 / ADC1_CH4 / GPIO01", "1"],
            ["02 / ADC1_CH2 / GPIO02", "2"],
            ["03 / ADC1_CH3 / GPIO03", "3"],
            ["04 / ADC1_CH4 / GPIO04", "4"],
            ]), 'PIN');
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp8266/quickref.html#pins-and-gpio");
  },
};




// Convert to int
Blockly.Blocks['any_to_int'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("na celé číslo (int)");
    this.setOutput(true, null);
    this.setColour("#40bf4a");
 this.setTooltip("Převede cokoli na celé číslo");
 this.setHelpUrl("https://www.w3schools.com/python/ref_func_int.asp");
  }
};




Blockly.Blocks['gpio_set'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("nastavit digitální výstup");
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("na");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
 this.setTooltip("Nastaví digitální výstup do požadovaného stavu");
 this.setHelpUrl("http://iotserver.cz");
  }
};


Blockly.Blocks['pwm'] = {
  init: function(){
    this.appendDummyInput()
        .appendField("analogový výstup PWM:")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID");
    this.appendValueInput("pin")
        .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Pin");
    this.appendValueInput("frequency")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("frekvence [5HZ - 40MHz]");
    this.appendValueInput("duty")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("hodnota [0-1023]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
    this.setTooltip("Spuštění a nastavení PWM s frekvencí (1Hz až 40MHz) a rozsahem (0-1023)");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
 },
  setID: function(id_) {
    this.setFieldValue(id_, "ID")
  },
};


Blockly.Blocks['pwm.freq'] = {
  init: function() {
    this.appendValueInput('frequency')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("analogový výstup:")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID")
        .appendField("frekvence");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
    this.setTooltip("Nastavení výstupní frekvence mezi 1Hz a 40MHz");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
  },
};



Blockly.Blocks['pwm.duty'] = {
  init: function() {
    this.appendValueInput('duty')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("analogový výstup:")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID")
        .appendField("výstupní hodnota [0-1023]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
    this.setTooltip("Nastavení hodnoty na výstupu v rozsahu 0-1023");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
  },
};



Blockly.Blocks['pwm.deinit'] = {
  init: function() {
    this.appendDummyInput('')
        .appendField("zastavit analogový výstup:")
        .appendField(new Blockly.FieldNumber(0, 0, 50, 1), "ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
    this.setTooltip("zastavení PWM");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pwm-pulse-width-modulation");
  }
};








Blockly.Blocks['gpio_init_get'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("nastavit digitální vstup");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("jako")
        .appendField(new Blockly.FieldDropdown([["bez pull odporu","None"], ["pull-up","PULL_UP"], ["pull-down","PULL_DOWN"]]), "in_pin");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
 this.setTooltip("Nastaví pin jako digitální vstup");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pins-and-gpio");
  }
};




Blockly.Blocks['gpio_get'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("logický stav digitálního pinu");
    this.setOutput(true, null);
    this.setColour("#00979d");
 this.setTooltip("Přečte hodnotu digitálního pinu");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#pins-and-gpio");
  }
};


Blockly.Blocks['esp32_adc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hodnota analogového vstupu");
    this.appendDummyInput()
        .appendField("měřený rozsah: ")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["0 - 1V","0"], ["0 - 1.34V","1"], ["0 - 2V","2"], ["0 - 3.6V","3"]]), "Attenuation");
    this.appendDummyInput()
        .appendField("výstupní hodnota: ")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["0 - 511","0"], ["0 - 1023","1"], ["0 - 2047","2"], ["0 - 4095","3"]]), "Width: ");
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin");
    this.setOutput(true, null);
    this.setColour("#00979d");
 this.setTooltip("Přečte hodnotu na analogovém vstupu 32 - 39.");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#adc-analog-to-digital-conversion");
  }
};



Blockly.Blocks['esp32C3_adc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hodnota analogového vstupu");
    this.appendDummyInput()
        .appendField("měřený rozsah: ")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["0 - 0.75V","0"], ["0 - 1V","1"], ["0 - 1.3V","2"], ["0 - 2.5V","3"]]), "Attenuation");
    this.appendDummyInput()
        .appendField("výstupní hodnota: ")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["0 - 100","41"],["0 - 511","8"], ["0 - 1023","4"], ["0 - 2047","2"], ["0 - 4095","1"]]), "Width: ");
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin");
    this.setOutput(true, null);
    this.setColour("#00979d");
 this.setTooltip("Přečte hodnotu na analogovém vstupu 0 - 4.");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#adc-analog-to-digital-conversion");
  }
};





Blockly.Blocks['touch_pin_sens'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dotyk na pinu :")
        .appendField(new Blockly.FieldDropdown([
        ["02 / GPIO02","2"],
        ["04 / GPIO04","4"],
        ["12 / GPIO12", "12"],
        ["13 / GPIO13", "13"],
        ["14 / GPIO14", "14"],
        ["15 / GPIO15", "15"],
        ["27 / GPIO27", "27"],
        ["32 / ADC / GPIO32", "32"],
        ["33 / ADC / GPIO33", "33"]
        ]), "pin");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("citlivost :")
        .appendField(new Blockly.FieldDropdown([["střední","300"], ["nízká","150"], ["vysoká","450"]]), "citlivost");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour("#00979d");
 this.setTooltip("Piny na kterých jde snímat dotyk");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html?highlight=touch#capacitive-touch");
  }
};




Blockly.Blocks['gpio_interrupt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("externí událost (Přerušení na vstupním pinu)");
    this.appendDummyInput()
        .appendField("událost:")
        .appendField(new Blockly.FieldDropdown([["Sestupná hrana","IRQ_FALLING"], ["Vzestupná hrana","IRQ_RISING"], ["Libovolná změna","BOTH"]]), "trigger");
    this.appendValueInput("pin")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin");
    this.appendStatementInput("code")
        .setCheck(null)
        .appendField("dělej");
    this.setColour("#00979d");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("Nastaví detekci přerušení na daném vstupním pinu");
 this.setHelpUrl("http://iotserver.cz");
  }
};

Blockly.Blocks['gpio_interrupt_off'] = {
  init: function() {

    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vypne generování přerušení na pinu");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
 this.setTooltip("vypne detekci přerušení na daném vstupním pinu");
 this.setHelpUrl("http://iotserver.cz");
  }
};





/*LEGACY_BLOCKS_END: Old timings blocks*/
Blockly.Blocks['utime.delay'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck(null)
        .appendField("čekej");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sekund","sleep"], ["milisekund","sleep_ms"], ["mikrosekund","sleep_us"]]), "SCALE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
    this.setTooltip("Pauza v programu na zvolený čas.");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.sleep");

  }
};

Blockly.Blocks['utime.vars'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("získat počet")
        .appendField(new Blockly.FieldDropdown([["sekund","time"], ["milisekund","ticks_ms"], ["mikrosekund","ticks_us"], ["nanoseconds","time_ns"], ["cpu ticks","ticks_cpu"]]), "VARS")
        .appendField("od zapnutí");
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setTooltip("Returns a counter in the defined scale, only integer values.");
   this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_ms");
  }
};

Blockly.Blocks['utime.ticks_add'] = {
  init: function() {
    this.appendValueInput("TIME1")
        .setCheck(null)
        .appendField("přičíst čas");
    this.appendValueInput("TIME2")
        .setCheck(null)
        .appendField("k času");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setTooltip("Přičte nebo odečte dva časy k sobě, oba musí být v ms");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_add");
  }
};

Blockly.Blocks['utime.ticks_diff'] = {
  init: function() {
    this.appendValueInput("TIME1")
        .setCheck(null)
        .appendField("od času");
    this.appendValueInput("TIME2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("odečíst čas");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setTooltip("Odečte od sebe dva časy.");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_diff");
  }
};


Blockly.Blocks['esp32_set_rtc'] = {
  init: function() {
   this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("nastavit hodiny reálného času (RTC)"), "SET_RTC");
    this.appendValueInput("year")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("rok");

    this.appendValueInput("month")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("měsíc");

    this.appendValueInput("day")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("den");

    this.appendValueInput("hour")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("hodina");

    this.appendValueInput("minute")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("minuta");

    this.appendValueInput("second")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sekunda");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
 this.setTooltip("Nastaví hodiny reálného času.");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html?highlight=touch#real-time-clock-rtc");
  }
};


Blockly.Blocks['esp32_get_rtc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("aktuální čas z RTC"), "MSG_GET_RTC");
    this.setOutput(true, null);
    this.setColour("#00979d");
 this.setTooltip("Varcí aktuální hodnotu z RTC");
 this.setHelpUrl("http://iotserver.cz");
  }
};

Blockly.Blocks['ntp_sync'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("načíst čas z internetu");
    this.appendValueInput("tz")
        .setCheck("Number")
        .appendField(" časová zóna:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
 this.setTooltip("Automatiky nastaví čas pomocí internetu.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['cas_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["rok","0"], ["mesic","1"], ["den","2"], ["hodina","4"], ["minuta","5"], ["sekunda","6"]]), "idx");
    this.setOutput(true, null);
    this.setColour("#00979d");
 this.setTooltip("Vrací zvolený údaj z hodin reálného času.");
 this.setHelpUrl("");
  }
};




Blockly.Blocks['deep_sleep'] = {
    init: function() {
    this.appendValueInput("interval")
        .setCheck("Number")
    .appendField("uspat procesor na [ms]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d")
 this.setTooltip("Uspání procesoru, čas v milisekundách");
 this.setHelpUrl("http://iotserver.cz");
  }
};




Blockly.Blocks['loop_forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("opakuj stále");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#f1cd18");
 this.setTooltip("Smyčka který se opakuje stále dokola");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['timer'] = {
  init: function() {
    this.setColour("#f1cd18");
    this.appendDummyInput()
        .appendField("časovač #")
        .appendField(new Blockly.FieldNumber(2, 0, 9, 1), "timerNumber")
        .appendField("dělej")
        .appendField(new Blockly.FieldDropdown([["každých","PERIODIC"], ["jen jednou za","ONE_SHOT"]]), "MODE")
        .appendField(new Blockly.FieldNumber(1000, 0, Infinity, 1), "interval")
        .appendField("ms");
    this.appendStatementInput("statements")
        .setCheck("image");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('nastavit časovač, aby vykonával kód perodicky, nebo jednou za nastavený čas.');
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html#timers")
  }
};


Blockly.Blocks['stop_timer'] = {
  init: function() {

    this.appendValueInput("timerNumber")
        .setCheck("Number")
        .appendField("zastavit časovač");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#f1cd18");
 this.setTooltip("zastavit časovač");
 this.setHelpUrl("www.http://iotserver.cz");
  }
};


Blockly.Blocks['utime.deadline'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck(null)
        .appendField("dokud čas")
        .appendField(new Blockly.FieldNumber(Math.floor(Math.random() * 10), 0, 9, 1), "ID")
        .appendField("nepřesáhne");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["sekund","time"], ["milisekund","ticks_ms"], ["mikrosekund","ticks_us"], ["nanosekund","time_ns"], ["taktů procesoru","ticks_cpu"]]), "SCALE");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("dělej");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#f1cd18");
    this.setTooltip("Smyčka ukončená časem.");
    this.setHelpUrl("https://docs.micropython.org/en/latest/library/utime.html#utime.ticks_add");
  }
};



//neopixel
Blockly.Blocks['neopixel_init'] = {
  init: function() {
    this.setColour("#df006e");
    this.appendDummyInput()
        .appendField("inicializovat NeoPixel");
    this.appendValueInput("pin")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin");
    this.appendValueInput("number")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("počet LED diod");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Inicializuje Neopixel LED pásek na nastaveném pinu");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html?highlight=touch#neopixel-and-apa106-driver");
  }
};



Blockly.Blocks['neopixel_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel("ovládání neopixelu"), "MSG_NEOPIXEL");

    this.appendValueInput("address")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("pořadí LED");

    this.appendValueInput("color")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("barva");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setColour("#df006e");
 this.setTooltip("nastaví NeoPixel na zvolenou barvu");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html?highlight=touch#neopixel-and-apa106-driver");
  }
};


Blockly.Blocks['neopixel_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabel("aktualizovat NeoPixely"), "MSG_NEOPIXEL");

    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setColour("#df006e");
    this.setTooltip("Pošle nastavené barvy do jednotlivých Neopixelů");
    this.setHelpUrl("http://iotserver.cz");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html?highlight=touch#neopixel-and-apa106-driver");
  }
};

function componentToHex(c) {
  var hex =  parseInt(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

Blockly.Blocks['neopixel_color_numbers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("červená [0 - 255]");
    this.appendValueInput("red")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("zelená [0 - 255]");
    this.appendValueInput("green")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("modrá [0 - 255]");
    this.appendValueInput("blue")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#df006e");
    this.setTooltip("Volba barvy z RGB");
    this.setHelpUrl("https://http://iotserver.cz/wp/?page_id=177");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#FF0000");
  }
};

Blockly.Blocks['neopixel_color_colors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("barva")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#df006e");
 this.setTooltip("Blok barvy pro neopixel");
 this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html?highlight=touch#neopixel-and-apa106-driver");

  }
};

Blockly.Blocks['HSL_to_RGB'] = {
  init: function  () {
    this.appendDummyInput()
        .appendField("odstín [0 - 360]");
    this.appendValueInput("hue")
        .setCheck('Number');
    this.appendDummyInput()
        .appendField("sytost [0 - 100]");
    this.appendValueInput("saturation")
        .setCheck('Number');
    this.appendDummyInput()
        .appendField("světlost [0 - 100]");
    this.appendValueInput("lightness")
        .setCheck('Number');

    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#df006e");
    this.setTooltip("Převod z HSV do RGB");
    this.setHelpUrl("https://docs.micropython.org/en/latest/esp32/quickref.html?highlight=touch#neopixel-and-apa106-driver");
  },

  styleBlock: function(colours) {
    colours = colours.map(x => parseFloat(x))
    colours = colours.includes(NaN) ? [230,30,50] : colours
    if (colours[0] <= 360 && colours[0] >= 0 && colours[1] >= 0 && colours[1] <= 100 && colours[2] >= 0 && colours[2] <= 100) {
      let hex_ = HUE2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#FF0000");
  }
};



Blockly.Blocks['neopixel_5x5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Neopixel 5x5");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "pix24")
        .appendField(new Blockly.FieldColour("#000000"), "pix15")
        .appendField(new Blockly.FieldColour("#000000"), "pix14")
        .appendField(new Blockly.FieldColour("#000000"), "pix5")
        .appendField(new Blockly.FieldColour("#000000"), "pix4");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "pix23")
        .appendField(new Blockly.FieldColour("#000000"), "pix16")
        .appendField(new Blockly.FieldColour("#000000"), "pix13")
        .appendField(new Blockly.FieldColour("#000000"), "pix6")
        .appendField(new Blockly.FieldColour("#000000"), "pix3");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "pix22")
        .appendField(new Blockly.FieldColour("#000000"), "pix17")
        .appendField(new Blockly.FieldColour("#000000"), "pix12")
        .appendField(new Blockly.FieldColour("#000000"), "pix7")
        .appendField(new Blockly.FieldColour("#000000"), "pix2");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "pix21")
        .appendField(new Blockly.FieldColour("#000000"), "pix18")
        .appendField(new Blockly.FieldColour("#000000"), "pix11")
        .appendField(new Blockly.FieldColour("#000000"), "pix8")
        .appendField(new Blockly.FieldColour("#000000"), "pix1");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "pix20")
        .appendField(new Blockly.FieldColour("#000000"), "pix19")
        .appendField(new Blockly.FieldColour("#000000"), "pix10")
        .appendField(new Blockly.FieldColour("#000000"), "pix9")
        .appendField(new Blockly.FieldColour("#000000"), "pix0");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#df006e");
 this.setTooltip("Nastaví matici neopixelů na požadované barvy");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_pos_5x5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("číslo neopixelu na 5x5 matici");
    this.appendValueInput("posX")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X:");
    this.appendValueInput("posY")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y:");
    this.setOutput(true, null);
    this.setColour("#df006e");
 this.setTooltip("Vrací číslo neopixelu na souřadnicích X a Y. 0 je levý horní roh.");
 this.setHelpUrl("");
  }
};


// Senzory

/// Start DHT Sensor
Blockly.Blocks['dht_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inicializace teploměru/vlhkoměru");
    this.appendDummyInput()
        .appendField('typ snímače')
        .appendField(new Blockly.FieldDropdown([
                     ['DHT11', 'DHT11'],
                     ['DHT22', 'DHT22'],
                     ['AM2302', 'AM2302']
        ]), 'DHT_TYPE');
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
    this.setTooltip("Inicializace snímače");
    this.setHelpUrl("http://iotserver.cz");
  }
};

/// Measure DHT11/22 Sensor
Blockly.Blocks['dht_measure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("změřit teplotu a vlhkost");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
    this.setTooltip("Načte data ze snímače");
    this.setHelpUrl("http://iotserver.cz");
  }
};

/// Read DHT11/22 Temperature
Blockly.Blocks['dht_read_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("teplota");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
    this.setTooltip("Přečte naměřenou teplotu.");
    this.setHelpUrl("http://iotserver.cz");
  }
};

/// Read DHT11/22 Humidity
Blockly.Blocks['dht_read_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("vlhkost");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
    this.setTooltip("Přečte naměřenou vlhkost.");
    this.setHelpUrl("http://iotserver.cz");
  }
};




//HCSR04
Blockly.Blocks['hcsr_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inicializace dálkoměru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "hc_id");
    this.appendValueInput("echo")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("echo Pin:");

    this.appendValueInput("trigger")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("trigger Pin:");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Inicializuje ultrazvukový dálkoměr na nastavených pinech");
 this.setHelpUrl("http://iotserver.cz");
  }
};


Blockly.Blocks['hcsr_read_mm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("snímač")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "hc_id")
        .appendField("vzdálenost [mm]");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Změří vzdálenost od ultrazvukového snímače");
 this.setHelpUrl("http://iotserver.cz");
  }
};


Blockly.Blocks['hcsr_read_cm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("snímač")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "hc_id")
        .appendField("vzdálenost [cm]");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Změří vzdálenost od ultrazvukového snímače");
 this.setHelpUrl("http://iotserver.cz");
  }
};



// tcs34725 
Blockly.Blocks['tcs34725_init'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("inicializovat snímač barev (RGB)")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "rgb_id");
    this.appendValueInput("exposure")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("čas expozice:");
    this.appendValueInput("scl")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL:");
    this.appendValueInput("sda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tcs34725_is_col'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("RGB snímač")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "rgb_id")
        .appendField("je barva")
        .appendField(new Blockly.FieldDropdown([["černá","0"], ["bílá","1"], ["červená","2"], ["zelená","3"], ["modrá","4"], ["žlutá","5"]]), "col")
        .appendField("?");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#000000");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#c00000");
   }
};


Blockly.Blocks['tcs34725_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("RGB snímač")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "rgb_id")
        .appendField("hodnota")
        .appendField(new Blockly.FieldDropdown([["červené","0"], ["zelené","1"], ["modré","2"]]), "col")
        .appendField("složky");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#F50000");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#c00000");
   }
};










Blockly.Blocks['zmena_rozsahu'] = {
  init: function() {
    this.appendValueInput("in_value")
        .setCheck("Number")
        .appendField("změna rozsahu hodnoty");
    this.appendValueInput("in_min")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("z minima");
    this.appendValueInput("in_max")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("a maxima");
    this.appendValueInput("out_min")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("na minimum");
    this.appendValueInput("out_max")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("a maximum");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("celočíselně:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "celociselne")
        .appendField("  ")
        .appendField("limit:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "limitovat");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#40bf4a");
 this.setTooltip("Změní rozsah hodnoty podle nastaveného rozsahu");
 this.setHelpUrl("");
 }
};




// Framebuffer

Blockly.Blocks['fb_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("vyplnit display ")
        .appendField(new Blockly.FieldDropdown([["černou","0"], ["bílou","1"]]), "barva")
        .appendField("barvou");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['oded_refresh'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("překreslit display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fb_pixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nastav bod");
    this.appendValueInput("px")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("py")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("barva");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fb_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("kresli čáru z bodu");
    this.appendValueInput("px1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x1");
    this.appendValueInput("py1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y1");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("do bodu");
    this.appendValueInput("px2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x2");
    this.appendValueInput("py2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y2");
    this.appendValueInput("col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("barva");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fb_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("kresli obdélník");
    this.appendValueInput("px")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("py")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("sirka")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("šířka");
    this.appendValueInput("vyska")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("výška");
    this.appendValueInput("col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("barva");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['fb_rect_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("kresli vyplněný obdélník");
    this.appendValueInput("px")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("py")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("sirka")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("šířka");
    this.appendValueInput("vyska")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("výška");
    this.appendValueInput("col")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("barva");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fb_draw_pic'] = {
  init: function() {        
    this.appendDummyInput()
        .appendField("nakresli obrazek")
        .appendField(new Blockly.FieldTextInput("jméno_obrázku"), "name");
    this.appendValueInput("px")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("py")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("data")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("data");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("průhlednost")
        .appendField(new Blockly.FieldDropdown([["žádná","-1"], ["černá","0"], ["bílá","1"]]), "alpha");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['fb_txt'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("napsat text");
    this.appendValueInput("px")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("py")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("barva")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("barva");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['fb_txt_mini'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("napsat text malým fontem");
    this.appendValueInput("px")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("py")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendValueInput("barva")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("barva");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c953e2");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


// Servo

Blockly.Blocks['servo_init'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck(null)
        .appendField("inicializovat RC servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("na pinu");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a6be39");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['servo_angle'] = {
  init: function() {
    this.appendValueInput("uhel")
        .setCheck("Number")
        .appendField("nastavit RC servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("na úhel [0-180]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a6be39");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['set_servo_speed'] = {
  init: function() {
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("nastavit RC servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("na rychlost [-100 až 100]");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("TRUE"), "reverse")
        .appendField("obrátit směr otáčení");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a6be39");
 this.setTooltip("Nastaví rychlost otáčení 360 stupňového serva na rychlost -100 až 100   pro zastavení použijte rychlost 0");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['set_servo_us'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("nastavit puls pro RC servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("na [600 - 2400] us");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a6be39");
 this.setTooltip("Nastaví puls pro RC servo na zvolenou délku 600 až 2400us. Střed je 1500us");
 this.setHelpUrl("");
  }
};



// DC Motor

Blockly.Blocks['dc_motor_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inicializovat DC motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "motor_name");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("směr otáčení")
        .appendField(new Blockly.FieldDropdown([["normální","1"], ["obrácený","2"]]), "motor_dir");
    this.appendValueInput("pin1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin 1");
    this.appendValueInput("pin2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pin 2");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a6be39");
 this.setTooltip("Inicializace DC motoru s budičem např. L9110");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['dc_motor_speed'] = {
  init: function() {
    this.appendValueInput("in_speed")
        .setCheck(null)
        .appendField("Nastavit rychlost DC motoru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "motor_name")
        .appendField("na [ -100 až 100 ]");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#a6be39");
 this.setTooltip("Nastavení rychlosti DC motoru -  0 motor stojí    -100 motor se točí jedním směrem     100 motor se točí druhým směrem");
 this.setHelpUrl("");
  }
};









Blockly.Blocks['wifi_conect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("připojit k Wi-Fi");
    this.appendValueInput("ssid")
        .setCheck("String")
        .appendField("jméno:");
    this.appendValueInput("pass")
        .setCheck("String")
        .appendField("heslo:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Připojí modul k Wi-Fi síti.");
 this.setHelpUrl("");
  }
};







// Blynk

Blockly.Blocks['blynk_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("připojit modul k internetu věcí Blynk.io");
    this.appendValueInput("Blynk_ID")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("BLYNK_AUTH_TOKEN");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#24c48e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['blynk_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("přečíst a zapsat hodnoty do Blynk.io");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#24c48e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['blynk_write'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck(null)
        .appendField("zapsat do virtuálního pinu")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "vpin")
        .appendField("hodnotu");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#24c48e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['blynk_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blynk.io hodnota virtuálního pinu")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "vpin");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#24c48e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['blynk_is_connected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("je zařízení připojeno k Blynk.io ?");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#24c48e");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



















// Joystick

Blockly.Blocks['joystick_init'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("inicializovat")
        .appendField(new Blockly.FieldDropdown([["joystick 1","1"], ["joystick 2","2"]]), "joy_name");
    this.appendDummyInput()
        .appendField("otočit joystick o")
        .appendField(new Blockly.FieldDropdown([["0°","0"], ["90°","90"], ["180°","180"], ["270°","270"]]), "rot");
    this.appendValueInput("vrx")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vrx");
    this.appendValueInput("vry")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vry");
    this.appendValueInput("sw")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sw");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c00000");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#c00000");
   }
};


Blockly.Blocks['get_joy_axis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Pravý virtuální joystick","10"],["Levý virtuální joystick","20"],["joystick 1","1"], ["joystick 2","2"]]), "joy_name")
        .appendField(new Blockly.FieldDropdown([["osa X","X"], ["osa Y","Y"]]), "axis");
    this.appendDummyInput()
        .appendField("[hodnota -100 až 100]");
    this.setOutput(true, null);
    this.setColour("#c00000");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#c00000");
   }
};



Blockly.Blocks['get_joy_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("je joystick")
        .appendField(new Blockly.FieldDropdown([["Pravý virtuální joystick","10"],["Levý virtuální joystick","20"],["joystick 1","1"], ["joystick 2","2"]]), "joy_name")
        .appendField(new Blockly.FieldDropdown([["nahoru","1"], ["dolu","3"], ["vpravo","2"], ["vlevo","4"], ["stisknutý","5"]]), "axis");
    this.setOutput(true, null);
    this.setColour("#c00000");
 this.setTooltip("");
 this.setHelpUrl("");
  },
  styleBlock: function(colours) {
    colours = colours.map(x => parseInt(x))
    colours = colours.includes(NaN) ? [89,102,166] : colours
    if(colours.every((e) => {return e <= 255}) && colours.every((e) => {return e >= 0})) {
      let hex_ = RGB2HEX (colours [0], colours [1], colours [2]);
      this.setColour(hex_);
    } else
      this.setColour("#c00000");
   }
};







// ESP Now

Blockly.Blocks['esp_now_send_str'] = {
  init: function() {
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("odeslat pomocí ESP Now text:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#24c48e");
 this.setTooltip("Odešle data všem zařízením na ESP Now síti");
 this.setHelpUrl("");
  }
};




Blockly.Blocks['esp_now_data_check'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("jsou k dispozici nová data z ESP Now");
    this.setOutput(true, null);
    this.setColour("#24c48e");
 this.setTooltip("Vrací True pokud jsou dostupná nová data z ESP Now k přečtení");
 this.setHelpUrl("");
  }
};




Blockly.Blocks['esp_now_new_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP Now příchozí data");
    this.setOutput(true, null);
    this.setColour("#24c48e");
 this.setTooltip("Příchozí data z ESP Now");
 this.setHelpUrl("");
  }
};



// Uart
Blockly.Blocks['uart_init'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Inicializovat UART");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("baudová rychlost")
        .appendField(new Blockly.FieldNumber(19200, 100, 115200), "baud");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("počet bitů")
        .appendField(new Blockly.FieldDropdown([["7","7"], ["8","8"], ["9","9"]]), "bits");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("parita")
        .appendField(new Blockly.FieldDropdown([["žádná","None"], ["sudá","1"], ["lichá","0"]]), "parity");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("stop bit")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "stop_bit");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



// Try Catch
Blockly.Blocks['python_try_catch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("spustit kód s ošetřením vyjímek");


    this.appendStatementInput('try')
        .appendField('kód:');

    this.appendStatementInput('catch')
        .appendField('při chybě:');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
    this.setInputsInline(false);
    this.setTooltip("Blok pro ošetření vyjímek v kódu. Ekvivalent Try a Catch z jazyka Python");
    this.setHelpUrl("");
  }
};


// Catch err string
Blockly.Blocks['python_catch_err'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("důvodu chyby (Text)");
    this.setOutput(true, null);
    this.setColour("#00979d");
    this.setTooltip("Proměnná s důvodem chyby.");
    this.setHelpUrl("http://iotserver.cz");
  }
};




// Execute
Blockly.Blocks['exec_python'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vložit kód:");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
    this.setTooltip("Přídá do vygenerovaného kódu zadaný kód");
    this.setHelpUrl("");
  }
};



// MPU6050
Blockly.Blocks['mpu6050_init'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("inicializovat MPU6050");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("akcelerometr + gyroskop");
    this.appendValueInput("SCL")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL:");
    this.appendValueInput("SDA")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Blok pro inicializaci gyroskopu MPU6050 na sběrnici I2C");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['mpu6050_calibrate'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("MPU6050 kalibrovat nulovou polohu");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Kalibrace nulové polohy. Behem kalibrace prosím nehýbejte s gyroskopem");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['mpu6050_fetch'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("MPU6050 aktualizovat data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Aktualizace dat z gyroskopu a akcelerometru. Nutno volat co nejčastěji, pokud chcete přesná data.");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['mpu6050_get_angle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("MPU6050 úhel v ose:")
        .appendField(new Blockly.FieldDropdown([["X","0"], ["Y","1"], ["Z","2"]]), "axis");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vrací úhly náklonu v ose X Y a Z");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['mpu6050_get_accel'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("MPU6050 zrychlení v ose:")
        .appendField(new Blockly.FieldDropdown([["X","0"], ["Y","1"], ["Z","2"]]), "axis");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vrací zrychlení v ose X Y a Z");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_gyro'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("MPU6050 úhlová rychlost v ose:")
        .appendField(new Blockly.FieldDropdown([["X","0"], ["Y","1"], ["Z","2"]]), "axis");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vrací úhlovou rychlost v ose X Y a Z");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mpu6050_get_temp'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("MPU6050 teplota čipu");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vrací teplotu čipu MPU6050");
 this.setHelpUrl("");
  }
};




// Encoder
Blockly.Blocks['encoder_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inicializovat rotační enkodér")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "index");
    this.appendValueInput("A")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin A");
    this.appendValueInput("B")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pin B");
    this.appendValueInput("reverse")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("obrátit směr počítání");
    this.appendValueInput("scale")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("velikost jednoho kroku");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Rotační enkodér s výstupem A a B čtený pomocí přerušení procesoru.");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['encoder_set'] = {
  init: function() {
    this.appendValueInput("Val")
        .setCheck("Number")
        .appendField("nastavit pozici enkodéru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "index")
        .appendField(" na:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Nastavit pozici enkodéru na zadanou hodnotu");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['encoder_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pozice enkodéru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "index");
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vrací aktuální polohu enkodéru.");
 this.setHelpUrl("");
  }
};




// DAC
Blockly.Blocks['dac_write'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck("Number")
        .appendField("analogový výstup DAC na pinu:")
        .appendField(new Blockly.FieldDropdown([["25 / GPIO25","25"], ["26 / GPIO26","26"]]), "pin")
        .appendField("0 - 3.3V     [0 - 255]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979d");
 this.setTooltip("Analogový výstup pomocí DAC modulu s 8bit rozlišením (256 kroků)");
 this.setHelpUrl("");
  }
};


// On exit run code
Blockly.Blocks['def_exit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Proveď tento kód při ukončení programu");
    this.appendStatementInput("exit_code")
        .setCheck(null);
    this.setColour("#00979d");
 this.setTooltip("Kód v této funkci se provede při zastavení programu (Stisku tlačítka stop).");
 this.setHelpUrl("");
  }
};




Blockly.Blocks['get_ssid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nazev WiFi sítě");
    this.setOutput(true, null);
    this.setColour("#00979d");
 this.setTooltip("Vrací název připojené WIFI sítě jako string");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_ip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IP adresa procesoru");
    this.setOutput(true, null);
    this.setColour("#00979d");
 this.setTooltip("Vrací aktuální IP adresu procesoru jako string");
 this.setHelpUrl("");
  }
};




Blockly.Blocks['http_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("data z HTTP serveru [GET]");
    this.appendValueInput("url")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Webová adresa");
    this.setOutput(true, null);
    this.setColour("#24c48e");
 this.setTooltip("Udělá HTTP dotaz na zvolené URL a vrátí přečtená data. Při chybě vrátí řetězec chyba");
 this.setHelpUrl("");
  }
};




// vl53l0x Laser range meter

Blockly.Blocks['vl53l0x_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inicializace laserového dálkoměru VL53L0X");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Dálkoměr :")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID");
    this.appendValueInput("SDA")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SDA");
    this.appendValueInput("SCL")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SCL");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Inicializuje laserový dálkoměr VL53L0X připojení na sběrnici I2C");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['vl53l0x_fast_dist_mm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vzdálenost od dálkoměru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("[mm]");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vzdálenost od laserového dálkoměru VL53L0X připojeného na sběrnici I2C, tato funkce neblokuje běh programu a vrací poslední platnou hodnotu ze senzoru");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['vl53l0x_fast_dist_cm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vzdálenost od dálkoměru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("[cm]");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vzdálenost od laserového dálkoměru VL53L0X připojeného na sběrnici I2C, tato funkce neblokuje běh programu a vrací poslední platnou hodnotu ze senzoru");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['vl53l0x_dist_mm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vzdálenost od dálkoměru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("[mm]");
    this.appendDummyInput()
        .appendField("Tato funkce čeká než dálkoměr vrátí platná data");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vzdálenost od laserový dálkoměr VL53L0X připojení na sběrnici I2C");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['vl53l0x_dist_cm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vzdálenost od dálkoměru")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "ID")
        .appendField("[cm]");
    this.appendDummyInput()
        .appendField("Tato funkce čeká než dálkoměr vrátí platná data");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#1CBCFF");
 this.setTooltip("Vzdálenost od laserový dálkoměr VL53L0X připojení na sběrnici I2C");
 this.setHelpUrl("");
  }
};

