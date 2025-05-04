/*
 * code generation for ESP32 Micropython
 *
 */

 
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



let UPythonClass = {}


Blockly.Python['pinout8266'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [pin, Blockly.Python.ORDER_NONE];
};


Blockly.Python['pinout'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [pin, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pinout_ESP32C3'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [pin, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pinout_ESP32S3'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [pin, Blockly.Python.ORDER_NONE];
};


Blockly.Python['adc_pinout'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [pin, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adc_ESP32C3_pinout'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [pin, Blockly.Python.ORDER_NONE];
};

Blockly.Python['adc_ESP32S3_pinout'] = function(block) {
  var pin = block.getFieldValue('PIN');
  return [pin, Blockly.Python.ORDER_NONE];
};



Blockly.Python['any_to_int'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = 'int(' + value + ')'; 
  return [code, Blockly.Python.ORDER_NONE];
};





Blockly.Python['gpio_set'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['gpio_set'] = 'def gpio_set(pin,value):\n  if value >= 1:\n    Pin(pin, Pin.OUT).on()\n  else:\n    Pin(pin, Pin.OUT).off()';
  var code = 'gpio_set(' + value_pin + ', ' + value_value + ')\n';
  return code;

};

Blockly.Python['pwm'] = function(block) {
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
    var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_ATOMIC);
    var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
    this.setID(value_pin)
    var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\npwm${value_pin}.freq(${value_frequency})\npwm${value_pin}.duty(${value_duty})\n`;
    return code;
};


Blockly.Python['pwm.init'] = function(block) {
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
    Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';

    this.setID(value_pin)
    var code = `pwm${value_pin} = PWM(Pin(${value_pin}))\n`;
    return code;
};

Blockly.Python['pwm.freq'] = function(block) {
    var number_id = block.getFieldValue('ID');
    var value_frequency = Blockly.Python.valueToCode(block, 'frequency', Blockly.Python.ORDER_NONE);
    var code = `pwm${number_id}.freq(${value_frequency})\n`;
    return code;
};

Blockly.Python['pwm.duty'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var value_duty = Blockly.Python.valueToCode(block, 'duty', Blockly.Python.ORDER_NONE);
  var code = `pwm${number_id}.duty(${value_duty})\n`;
  return code;
};


Blockly.Python['pwm.deinit'] = function(block) {
  var number_id = block.getFieldValue('ID');
  var code = `pwm${number_id}.deinit()\n`;
  return code;
};









Blockly.Python['gpio_init_get'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var x = value_pin.replace('(','').replace(')','');
  var dropdown_in_pin = block.getFieldValue('in_pin');
  Blockly.Python.definitions_[`gpio_get_${x}`] = 'Pin' + x + '=Pin(' + x + ', Pin.IN , ' + dropdown_in_pin + ')\n\n';
  var code = '';
  return code;
  };


Blockly.Python['gpio_get'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var x = value_pin.replace('(','').replace(')','');
  if (typeof(Blockly.Python.definitions_[`gpio_get_${x}`]) == "undefined")
	  {
		  Blockly.Python.definitions_[`gpio_get_${x}`] = 'Pin' + x + '=Pin(' + x + ', Pin.IN)\n\n';
	  }
  var code = 'Pin' + x + '.value()';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['esp32_adc'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  var dropdown_attenuation = block.getFieldValue('Attenuation');
  var dropdown_width__ = block.getFieldValue('Width: ');

  var atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==0)
                  atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==1)
                  atten = 'ADC.ATTN_2_5DB';
  if (dropdown_attenuation==2)
                  atten = 'ADC.ATTN_6DB';
  if (dropdown_attenuation==3)
                  atten = 'ADC.ATTN_11DB';

  var w = 'ADC.WIDTH_10BIT';
  if (dropdown_width__==0)
        w = 'ADC.WIDTH_9BIT';
  if (dropdown_width__==1)
        w = 'ADC.WIDTH_10BIT';
  if (dropdown_width__==2)
        w = 'ADC.WIDTH_11BIT';
  if (dropdown_width__==3)
        w = 'ADC.WIDTH_12BIT';


  Blockly.Python.definitions_['init_adc' + x] = 'adc' + x + '=ADC(Pin(' + x + '))\nadc' + x + '.atten(' + atten + ')\nadc' + x + '.width(' + w + ')\n';

  var code = 'adc' + x + '.read()';
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['esp32C3_adc'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  var dropdown_attenuation = block.getFieldValue('Attenuation');
  var dropdown_width__ = block.getFieldValue('Width: ');

  var atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==0)
                  atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==1)
                  atten = 'ADC.ATTN_2_5DB';
  if (dropdown_attenuation==2)
                  atten = 'ADC.ATTN_6DB';
  if (dropdown_attenuation==3)
                  atten = 'ADC.ATTN_11DB';


  Blockly.Python.definitions_['init_adc' + x] = 'adc' + x + '=ADC(Pin(' + x + '))\nadc' + x + '.atten(' + atten + ')\n\n';

  var code = 'int(adc' + x + '.read()/' + dropdown_width__ + ')';
  return [code, Blockly.Python.ORDER_NONE];
};




Blockly.Python['esp32S3_adc'] = function(block) {
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var x = value_pin.replace('(','').replace(')','');

  var dropdown_attenuation = block.getFieldValue('Attenuation');
  var dropdown_width__ = block.getFieldValue('Width: ');

  var atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==0)
                  atten = 'ADC.ATTN_0DB';
  if (dropdown_attenuation==1)
                  atten = 'ADC.ATTN_2_5DB';
  if (dropdown_attenuation==2)
                  atten = 'ADC.ATTN_6DB';
  if (dropdown_attenuation==3)
                  atten = 'ADC.ATTN_11DB';


  Blockly.Python.definitions_['init_adc' + x] = 'adc' + x + '=ADC(Pin(' + x + '))\nadc' + x + '.atten(' + atten + ')\nadc' + x + '.width(ADC.WIDTH_12BIT)\n\n';

  var code = 'int(adc' + x + '.read()/' + dropdown_width__ + ')';
  return [code, Blockly.Python.ORDER_NONE];
};








Blockly.Python['touch_pin_sens'] = function(block) {
  var value_pin = block.getFieldValue('pin');
  var dropdown_citlivost = block.getFieldValue('citlivost');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_touchpad'] = `

from machine import TouchPad

def is_touched_pin(pin_id, treshold=300):
    if pin_id.read() < treshold:
        return True
    else:
        return False
`;

  Blockly.Python.definitions_['import_touchpad' + value_pin] = 'touch' + value_pin + ' = TouchPad(Pin(' + value_pin + '))\n';
  var code = 'is_touched_pin(touch' + value_pin + ',' + dropdown_citlivost + ')';
  return [code, Blockly.Python.ORDER_NONE];
};




Blockly.Python['esp32S3_touch_pin_sens'] = function(block) {
  var value_pin = block.getFieldValue('pin');
  var dropdown_citlivost = block.getFieldValue('citlivost');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_touchpad'] = `

from machine import TouchPad

def is_touched_pin(pin_id, treshold=300):
    if pin_id.read() < treshold:
        return True
    else:
        return False
`;

  Blockly.Python.definitions_['import_touchpad' + value_pin] = 'touch' + value_pin + ' = TouchPad(Pin(' + value_pin + '))\n';
  var code = 'is_touched_pin(touch' + value_pin + ',' + dropdown_citlivost + ')';
  return [code, Blockly.Python.ORDER_NONE];
};




Blockly.Python['gpio_interrupt'] = function(block) {
  var dropdown_trigger = block.getFieldValue('trigger');
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  var value_pin = value_pin.replace('(','').replace(')','');


  // Fix for global variables inside callback
  // Piece of code from generators/python/procedures.js
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; (variable = variables[i]); i++) {
    var varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.nameDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
  

  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';

  if (dropdown_trigger == 'BOTH')
	dropdown_trigger = 'IRQ_RISING | Pin.IRQ_FALLING';

  var code='';
  if (value_pin) {
	code = '\n#Funkce pro preruseni\ndef callback' + value_pin + '(pPin):\n' + globals + statements_code + '#Konec fuknce pro preruseni\n\n';
	code += 'p' + value_pin + ' = Pin(' + value_pin + ', Pin.IN)\n';
	code += 'p' + value_pin + '.irq(trigger=Pin.' + dropdown_trigger + ', handler=callback' + value_pin + ')\n';
  }

  return code;
};

Blockly.Python['gpio_interrupt_off'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  var value_pin = value_pin.replace('(','').replace(')','');
  var code='';

  if (value_pin)
	  code = 'p' + value_pin + '.irq(trigger=0, handler=callback' + value_pin + ')\n';

  return code;
};




Blockly.Python['utime.delay'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var code =  `utime.${dropdown_scale}(${value_time})\n`;
  return code;
};

Blockly.Python['utime.vars'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var dropdown_vars = block.getFieldValue('VARS');
  var code =  `utime.${dropdown_vars}()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["utime.ticks_add"] = function(block) {
    Blockly.Python.definitions_['import_utime'] = 'import utime';
	var value_pIn = Blockly.Python.valueToCode(block, 'Pin', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.ticks_add(" + value_pIn + ")\n"; 
	return code;
};

Blockly.Python["utime.ticks_diff"] = function(block) {
    Blockly.Python.definitions_['import_utime'] = 'import utime';
	var value_pIn = Blockly.Python.valueToCode(block, 'Pin', Blockly.Python.ORDER_ATOMIC);
	var code = "utime.ticks_diff(" + value_pIn + ")\n"; 
	return code;
};

Blockly.Python['esp32_set_rtc'] = function(block) {
  //var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';

  var y = Blockly.Python.valueToCode(block, 'year', Blockly.Python.ORDER_ATOMIC);
  var m = Blockly.Python.valueToCode(block, 'month', Blockly.Python.ORDER_ATOMIC);
  var d = Blockly.Python.valueToCode(block, 'day', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'hour', Blockly.Python.ORDER_ATOMIC);
  var min = Blockly.Python.valueToCode(block, 'minute', Blockly.Python.ORDER_ATOMIC);
  var s = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'RTC().datetime((' + y + ',' + m + ',' + d + ',0,' + h + ',' + min + ',' + s + ',0))\n';
  return code;
};

Blockly.Python['esp32_get_rtc'] = function(block) {
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';

  var code = 'RTC().datetime()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ntp_sync'] = function(block) {
  var value_tz = Blockly.Python.valueToCode(block, 'tz', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  
  Blockly.Python.definitions_['import_ntp'] = 'import ntptime';
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  
  Blockly.Python.definitions_['set_ntp_time'] = `
def set_ntp_time(timezone = 0):
    ntptime.settime()
    rtc = RTC()
    utc_shift=timezone
    tm = utime.localtime(utime.mktime(utime.localtime()) + utc_shift*3600)
    tm = tm[0:3] + (0,) + tm[3:6] + (0,)
    rtc.datetime(tm)
`

  var code = 'set_ntp_time(' + value_tz + ')\n';
  return code;
};

Blockly.Python['cas_var'] = function(block) {
  var dropdown_idx = block.getFieldValue('idx');
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  
  var code = 'RTC().datetime()[' + dropdown_idx + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['loop_forever'] = function(block) {
  // While forever
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = '  utime.sleep_ms(0)\n' + branch;
  branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
  return 'while True:\n' + branch;
};


Blockly.Python['timer'] = function(block) {

  var interval = block.getFieldValue('interval');
  var timerNumber = block.getFieldValue('timerNumber');
  var statements_name = Blockly.Python.statementToCode(block, 'statements');
  var dropdown_mode = block.getFieldValue('MODE');
  
  // Fix for global variables inside callback
  // Piece of code from generators/python/procedures.js
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  var globals = [];
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; (variable = variables[i]); i++) {
    var varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.nameDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';
  Blockly.Python.definitions_[`import_timer_start${timerNumber}`] = `tim${timerNumber} = Timer(${timerNumber})`;

  Blockly.Python.definitions_[`import_timer_callback${timerNumber}`] = `\n#Timer Function Callback\ndef timerFunc${timerNumber}(t):\n${globals}${statements_name}\n\n`;

  var code = `tim${timerNumber}.init(period=${interval}, mode=Timer.${dropdown_mode}, callback=timerFunc${timerNumber})\n`;
             
  return code
};

Blockly.Python['stop_timer'] = function(block) {
  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';
  
  var tn = Blockly.Python.valueToCode(block, 'timerNumber', Blockly.Python.ORDER_ATOMIC);
  var code = 'tim' + tn + '.deinit()\n';

  return code;
};


Blockly.Python['utime.deadline'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';

  var value_id = block.getFieldValue('ID');
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_NONE);
  var dropdown_scale = block.getFieldValue('SCALE');
  var statements_do = Blockly.Python.statementToCode(block, 'DO');

  var code = `deadline${value_id} = utime.ticks_add(utime.${dropdown_scale}(), ${value_time})\nwhile utime.ticks_diff(deadline${value_id}, utime.${dropdown_scale}()) > 0:\n${statements_do}\n`;
  return code;
};


Blockly.Python['deep_sleep'] = function(block) {
	var value_interval = Blockly.Python.valueToCode(block, 'interval', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['import_machine'] = 'import machine';
	var code = 'machine.deepsleep(' + value_interval + ')\n';
	return code;
};









Blockly.Python['neopixel_color_numbers'] = function(block) {
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);

  // Style block with compiled values, see block_definitions.js
  this.styleBlock([value_red, value_green, value_blue])

  var code = `(${value_red},${value_green},${value_blue})`;

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['neopixel_color_colors'] = function(block) {
  var color = block.getFieldValue('color');
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  var code = "(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ")";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['HSL_to_RGB'] = function(block) {
  var value_hue = Blockly.Python.valueToCode(block, 'hue', Blockly.Python.ORDER_ATOMIC);
  var value_saturation = Blockly.Python.valueToCode(block, 'saturation', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'lightness', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['HSL_to_RGB'] = 'def HSL_to_RGB(h, s, l):\n	h, s, l = h/360, s/100, l/100\n	def hue2rgb (p, q, t):\n		if(t < 0.): t += 1\n		if(t > 1.): t -= 1\n		if(t < 1/6): return p + (q - p) * 6 * t\n		if(t < 1/2): return q\n		if(t < 2/3): return p + (q - p) * (2/3 - t) * 6\n		return p\n	q = l * (1 + s) if l < 0.5 else l + s - l * s\n	p = 2 * l - q\n	r, g, b = hue2rgb(p, q, h + 1/3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1/3)\n	return (int(r * 255), int(g * 255), int(b * 255))\n';

  this.styleBlock([value_hue, value_saturation, value_brightness])

  var code = `HSL_to_RGB(${value_hue},${value_saturation},${value_brightness})`;

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['neopixel_init'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_NONE);
  var value_number = Blockly.Python.valueToCode(block, 'number', Blockly.Python.ORDER_NONE);

  var code = `np=neopixel.NeoPixel(Pin(${value_pin}),int(${value_number}))\nmax_neopixel = int(${value_number})\n`;

  return code;
};

Blockly.Python['neopixel_control'] = function(block) {
  var value_address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_NONE);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_NONE);

  Blockly.Python.definitions_['import_utime'] = 'import utime';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';

  Blockly.Python.definitions_['set_neopixel'] = `
def neopixel_write(neopixel_num,neopixel_set_col):
  global np
  try:
     np[int(neopixel_num)]=neopixel_set_col
  except Exception as err_code_str:
     utime.sleep_ms(0)
     print('Chyba pri zapisu dat do neopixelu cislo ' + str(1) + ' platna adresa neopixelu je 0 az ' + str(max_neopixel - 1))
`

  //var code = `np[int(${value_address})]=${value_color}\n`;
  var code = `neopixel_write(${value_address},${value_color})\n`;
  
  return code;
};

Blockly.Python['neopixel_write'] = function(block) {
  var code = 'np.write()\n';
  return code;
};




Blockly.Python['neopixel_5x5'] = function(block) {
  var checkbox_reverse = block.getFieldValue('reverse') == 'TRUE';

  Blockly.Python.definitions_['import_utime'] = 'import utime';
  Blockly.Python.definitions_['set_neopixel'] = `
def neopixel_write(neopixel_num,neopixel_set_col):
  global np
  try:
     np[int(neopixel_num)]=neopixel_set_col
  except Exception as err_code_str:
     utime.sleep_ms(0)
     print('Chyba pri zapisu dat do neopixelu cislo ' + str(1) + ' platna adresa neopixelu je 0 az ' + str(max_neopixel - 1))
`
  var code = "";
  var i = 0;
  var reverse_ordered = [20,21,22,23,24,15,16,17,18,19,10,11,12,13,14,5,6,7,8,9,0,1,2,3,4];
  
  if (checkbox_reverse)
  {
    for (let i = 0; i < 25; i++) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(block.getFieldValue('pix' + reverse_ordered[i]));
        code = code + 'neopixel_write(' + i + ',' +  "(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + "))\n";
      }
  }
  else
  {
      for (let i = 0; i < 25; i++) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(block.getFieldValue('pix' + i));
        code = code + 'neopixel_write(' + i + ',' +  "(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + "))\n";
      }
  }
  return code;
};




Blockly.Python['get_pos_5x5'] = function(block) {
  var checkbox_reverse = block.getFieldValue('reverse') == 'TRUE';

  var value_posx = Blockly.Python.valueToCode(block, 'posX', Blockly.Python.ORDER_ATOMIC);
  var value_posy = Blockly.Python.valueToCode(block, 'posY', Blockly.Python.ORDER_ATOMIC);
  
  
  Blockly.Python.definitions_['get_pos_5x5'] = `
def get_pos_5x5(x,y):
    neopix_map = [[24,15,14,5,4],[23,16,13,6,3],[22,17,12,7,2],[21,18,11,8,1],[20,19,10,9,0]]
    
    if ((x>4) or (y>4) or (x<0) or (y<0)): 
        print("X nebo Y jsou mimo rozsah, povolene jsou hodnoty 0 az 4")
        return 0
    else:
        return(neopix_map[int(y)][int(x)])
`


  if (checkbox_reverse)
  {
    var code = 'get_pos_5x5(4-' + value_posx + ',' + value_posy + ')';
  }
  else
  {
    var code = 'get_pos_5x5(' + value_posx + ',' + value_posy + ')';
  }

  
  return [code, Blockly.Python.ORDER_NONE];
};

// Senzory

/// DHT11/22
/// Start DHT Sensor
Blockly.Python['dht_init'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var type = block.getFieldValue('DHT_TYPE');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var typ_senzoru = type;
  if (typ_senzoru == 'AM2302') { typ_senzoru = 'DHT22'; }
  var code = 'dhts=dht.' + typ_senzoru + '(Pin(' + value_pin + '))\ntime.sleep(1)\ntry:\n  dhts.measure()\n  time.sleep(1)\nexcept OSError as e:\n  print("Chyba pri cteni snimace teploty.")\n\n';
  return code;
};

/// Measure DHT11/22 Sensor
Blockly.Python['dht_measure'] = function(block) {
  var code = 'try:\n  dhts.measure()\n  time.sleep(1)\nexcept OSError as e:\n  print("Chyba pri cteni snimace teploty.")\n\n';
  return code;
};

/// Read DHT11/22 Temperature
Blockly.Python['dht_read_temp'] = function(block) {
  var code = 'dhts.temperature()';
  return [code, Blockly.Python.ORDER_NONE];
};

/// Read DHT11/22 Humidity
Blockly.Python['dht_read_humidity'] = function(block) {
  var code = 'dhts.humidity()';
  return [code, Blockly.Python.ORDER_NONE];
};



//HCSR04 ultrasound

Blockly.Python['hcsr_init'] = function(block) {
  var dropdown_hc_id = block.getFieldValue('hc_id');
  var pEcho = Blockly.Python.valueToCode(block, 'echo', Blockly.Python.ORDER_ATOMIC);
  var pTrig = Blockly.Python.valueToCode(block, 'trigger', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_hcr'] = `

from machine import time_pulse_us

#Based on: https://github.com/lemariva/uPySensors
class HCSR04:
    def __init__(self, trigger_pin, echo_pin, echo_timeout_us=500*2*30):
        self.echo_timeout_us = echo_timeout_us
        self.trigger = Pin(trigger_pin, mode=Pin.OUT)
        self.trigger.value(0)
        self.echo = Pin(echo_pin, mode=Pin.IN)

    def _send_pulse_and_wait(self):
        self.trigger.value(0)
        time.sleep_us(100)
        self.trigger.value(1)
        time.sleep_us(10)
        self.trigger.value(0)
        try:
            pulse_time = time_pulse_us(self.echo, 1, self.echo_timeout_us)
            return pulse_time
        except OSError as ex:
            if ex.args[0] == 110: # 110 = ETIMEDOUT
                raise OSError('Out of range')
            raise ex

    def distance_mm(self):
        mm = 2000
        for i in range(3):
            pulse_time = self._send_pulse_and_wait()
            time.sleep_ms(50 + (i * 25))
            if pulse_time > 0:
                mm = pulse_time * 100 // 582
                break
        return mm

    def distance_cm(self):
        cms = 200
        for i in range(3):
            pulse_time = self._send_pulse_and_wait()
            time.sleep_ms(50 + (i * 25))
            if pulse_time > 0:
                cms = (pulse_time / 2) / 29.1
                break
        return cms
`;

/*
 * while 1:
	sensor = HCSR04(trigger_pin=13, echo_pin=15, echo_timeout_us=10000)
	distance = sensor.distance_mm()
	print(distance)
	time.sleep(1)

*/
  var code = 'ultraSoundSensor' + dropdown_hc_id + ' = HCSR04(trigger_pin=' + pTrig + ', echo_pin=' + pEcho + ', echo_timeout_us=15000)\n';
  return code;
};

Blockly.Python['hcsr_read_mm'] = function(block) {
  var dropdown_hc_id = block.getFieldValue('hc_id');
  var code = 'ultraSoundSensor' + dropdown_hc_id + '.distance_mm()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['hcsr_read_cm'] = function(block) {
  var dropdown_hc_id = block.getFieldValue('hc_id');
  var code = 'ultraSoundSensor' + dropdown_hc_id + '.distance_cm()';
  return [code, Blockly.Python.ORDER_NONE];
};




// tcs34725 

Blockly.Python['tcs34725_init'] = function(block) {
    
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_tcs34725'] = 'import tcs34725';
  
  var dropdown_rgb_id = block.getFieldValue('rgb_id');
  var value_exposure = Blockly.Python.valueToCode(block, 'exposure', Blockly.Python.ORDER_ATOMIC);
  var value_scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');
  var value_sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');
  
  var code = `
if not "i2c_{scl}_{sda}" in globals():
    i2c_{scl}_{sda} = SoftI2C(scl=Pin({scl}), sda=Pin({sda}), freq=400000)

rgb_sensor{id} = tcs34725.TCS34725(i2c_{scl}_{sda},{exposure})\n
`

  code = code.replace(/{scl}/g, value_scl);
  code = code.replace(/{sda}/g, value_sda);
  code = code.replace(/{id}/g, dropdown_rgb_id);
  code = code.replace(/{exposure}/g, value_exposure);

  return code;
};

Blockly.Python['tcs34725_is_col'] = function(block) {
  var dropdown_rgb_id = block.getFieldValue('rgb_id');
  var dropdown_col = block.getFieldValue('col');
  
  var colors_arr = ["black", "white", "red", "green", "blue", "yellow"];
  var colors_html = [[0, 0, 0], [200, 200, 200], [245, 0, 0], [0, 245, 0], [0, 0, 245], [200, 200, 0]];
  
  this.styleBlock(colors_html[dropdown_col]); 
  
  var code = 'rgb_sensor' + dropdown_rgb_id + '.is_' + colors_arr[dropdown_col] + '()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tcs34725_rgb'] = function(block) {
  var dropdown_rgb_id = block.getFieldValue('rgb_id');
  var dropdown_col = block.getFieldValue('col');
  
  var colors_arr = ["red", "green", "blue"];
  var colors_html = [[245, 0, 0], [0, 245, 0], [0, 0, 245]];
  
  this.styleBlock(colors_html[dropdown_col]); 
  
  var code = 'rgb_sensor' + dropdown_rgb_id + '.get_' + colors_arr[dropdown_col] + '()';
  return [code, Blockly.Python.ORDER_NONE];
};






Blockly.Python['zmena_rozsahu'] = function(block) {
  var value_in_value = Blockly.Python.valueToCode(block, 'in_value', Blockly.Python.ORDER_ATOMIC);
  var value_in_min = Blockly.Python.valueToCode(block, 'in_min', Blockly.Python.ORDER_ATOMIC);
  var value_in_max = Blockly.Python.valueToCode(block, 'in_max', Blockly.Python.ORDER_ATOMIC);
  var value_out_min = Blockly.Python.valueToCode(block, 'out_min', Blockly.Python.ORDER_ATOMIC);
  var value_out_max = Blockly.Python.valueToCode(block, 'out_max', Blockly.Python.ORDER_ATOMIC);
  var checkbox_celociselne = block.getFieldValue('celociselne') == 'TRUE';
  var checkbox_limitovat = block.getFieldValue('limitovat') == 'TRUE';
 
  var int_txt = "float"
  if (checkbox_celociselne){
    int_txt = "int"
  }
 
  var lim_txt = "0"
  if (checkbox_limitovat){
    lim_txt = "1"
  }
 
  Blockly.Python.definitions_['map_function'] = `
def convert_float(x, in_min, in_max, out_min, out_max, lim=1):
    if lim == 0:
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    else:
        if out_min > out_max:
            return min(max(out_max, (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min), out_min)
        else:
            return max(min(out_max, (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min), out_min)


def convert_int(x, in_min, in_max, out_min, out_max, lim=1):
    if lim == 0:
        return int((x - in_min) * (out_max - out_min) // (in_max - in_min) + out_min)
    else:
        if out_min > out_max:
            return int(min(max(out_max, (x - in_min) * (out_max - out_min) // (in_max - in_min) + out_min), out_min))
        else:
            return int(max(min(out_max, (x - in_min) * (out_max - out_min) // (in_max - in_min) + out_min), out_min))
`;
 
  // TODO: Assemble Python into code variable.
  var code = 'convert_' + int_txt + '(' + value_in_value + ', ' + value_in_min + ', ' + value_in_max + ', ' + value_out_min + ', ' + value_out_max  + ', ' + lim_txt + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



// Framebuffer

Blockly.Python['fb_fill'] = function(block) {
  var dropdown_barva = block.getFieldValue('barva');
  // TODO: Assemble Python into code variable.
  var code = 'fbuf.fill(' + dropdown_barva + ')\n';
  return code;
};



Blockly.Python['oded_refresh'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'display.show()\n';
  return code;
};


Blockly.Python['fb_pixel'] = function(block) {
  var value_px = Blockly.Python.valueToCode(block, 'px', Blockly.Python.ORDER_ATOMIC);
  var value_py = Blockly.Python.valueToCode(block, 'py', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fbuf.pixel(int(' + value_px + '), int(' + value_py + '), int(' + value_col + '))\n';
  return code;
};


Blockly.Python['fb_line'] = function(block) {
  var value_px1 = Blockly.Python.valueToCode(block, 'px1', Blockly.Python.ORDER_ATOMIC);
  var value_py1 = Blockly.Python.valueToCode(block, 'py1', Blockly.Python.ORDER_ATOMIC);
  var value_px2 = Blockly.Python.valueToCode(block, 'px2', Blockly.Python.ORDER_ATOMIC);
  var value_py2 = Blockly.Python.valueToCode(block, 'py2', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fbuf.line(int(' + value_px1 + '), int(' + value_py1 + '), int(' + value_px2 + '), int(' + value_py2 + '), int(' + value_col + '))\n';
  return code;
};


Blockly.Python['fb_rect'] = function(block) {
  var value_px = Blockly.Python.valueToCode(block, 'px', Blockly.Python.ORDER_ATOMIC);
  var value_py = Blockly.Python.valueToCode(block, 'py', Blockly.Python.ORDER_ATOMIC);
  var value_sirka = Blockly.Python.valueToCode(block, 'sirka', Blockly.Python.ORDER_ATOMIC);
  var value_vyska = Blockly.Python.valueToCode(block, 'vyska', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fbuf.rect(int(' + value_px + '), int(' + value_py + '), int(' + value_sirka + '), int(' + value_vyska + '), int(' + value_col + '))\n';
  return code;
};

Blockly.Python['fb_rect_fill'] = function(block) {
  var value_px = Blockly.Python.valueToCode(block, 'px', Blockly.Python.ORDER_ATOMIC);
  var value_py = Blockly.Python.valueToCode(block, 'py', Blockly.Python.ORDER_ATOMIC);
  var value_sirka = Blockly.Python.valueToCode(block, 'sirka', Blockly.Python.ORDER_ATOMIC);
  var value_vyska = Blockly.Python.valueToCode(block, 'vyska', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fbuf.fill_rect(int(' + value_px + '), int(' + value_py + '), int(' + value_sirka + '), int(' + value_vyska + '), int(' + value_col + '))\n';
  return code;
};

Blockly.Python['fb_draw_pic'] = function(block) {
  var text_name = block.getFieldValue('name');
  var value_px = Blockly.Python.valueToCode(block, 'px', Blockly.Python.ORDER_ATOMIC);
  var value_py = Blockly.Python.valueToCode(block, 'py', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var dropdown_alpha = block.getFieldValue('alpha');
  
  value_data = value_data.slice(1, -1).replace(/\\\\/g, '\\');
  
  var text_name_cor = text_name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  Blockly.Python.definitions_['pix_' + text_name_cor] = text_name_cor + ' = framebuf.FrameBuffer(' + value_data + ', framebuf.MONO_VLSB)';
  
  var code = 'fbuf.blit(' + text_name_cor + ', int(' + value_px + '), int(' + value_py + '), int(' + dropdown_alpha + '))\n';
  return code;
};

Blockly.Python['fb_txt'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_px = Blockly.Python.valueToCode(block, 'px', Blockly.Python.ORDER_ATOMIC);
  var value_py = Blockly.Python.valueToCode(block, 'py', Blockly.Python.ORDER_ATOMIC);
  var value_barva = Blockly.Python.valueToCode(block, 'barva', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fbuf.text(str(' + value_text + '), int(' + value_px + '), int(' + value_py + '), int(' + value_barva + '))\n';
  return code;
};

Blockly.Python['fb_txt_mini'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_px = Blockly.Python.valueToCode(block, 'px', Blockly.Python.ORDER_ATOMIC);
  var value_py = Blockly.Python.valueToCode(block, 'py', Blockly.Python.ORDER_ATOMIC);
  var value_barva = Blockly.Python.valueToCode(block, 'barva', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_minifont'] = 'import minifont';
  var code = 'minifont.mini_text(fbuf, str(' + value_text + '), int(' + value_px + '), int(' + value_py + '), int(' + value_barva + '))\n';
  return code;
};





Blockly.Python['servo_init'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var checkbox_reverse = block.getFieldValue('reverse') == 'TRUE';
  
  
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
  
  if (checkbox_reverse)
  {
      Blockly.Python.definitions_['def_servo' + dropdown_id] = 'servo' + dropdown_id + ' = Servo(Pin(' + value_pin + '), reverse=True)\n';
  }
  else
  {
      Blockly.Python.definitions_['def_servo' + dropdown_id] = 'servo' + dropdown_id + ' = Servo(Pin(' + value_pin + '))\n';
  }
  
  var code = '';
  return code;
};

Blockly.Python['servo_angle'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var value_uhel = Blockly.Python.valueToCode(block, 'uhel', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
  
  if (value_uhel < 0){value_uhel = 0;}
  if (value_uhel > 180){value_uhel = 180;}
  
  var code = 'servo' + dropdown_id + '.write_angle(int(' + value_uhel + '))\n';
  return code;
};



Blockly.Python['set_servo_speed'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
  
  if (value_speed < -100){value_speed = -100;}
  if (value_speed > 100){value_speed = 100;}
  
  var code = 'servo' + dropdown_id + '.write_speed(int(' + value_speed + '))\n';

  return code;
};



Blockly.Python['set_servo_us'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
  
  var code = 'servo' + dropdown_id + '.write_us(int(' + value_time + '))\n';
  return code;
};





// DC Motor

Blockly.Python['dc_motor_init'] = function(block) {
  var dropdown_motor_name = block.getFieldValue('motor_name');
  var dropdown_motor_dir = block.getFieldValue('motor_dir');
  var value_pin1 = Blockly.Python.valueToCode(block, 'pin1', Blockly.Python.ORDER_ATOMIC);
  var value_pin2 = Blockly.Python.valueToCode(block, 'pin2', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_dcmotorlib'] = 'import dcmotorlib';
  Blockly.Python.definitions_['def_dc_mot' + dropdown_motor_name] = 'dc_mot' + dropdown_motor_name + ' = dcmotorlib.DCMotor(' + value_pin1 + ',' + value_pin2 + ',' + dropdown_motor_dir + ')\n'
  var code = '';
  return code;
};



Blockly.Python['dc_motor_speed'] = function(block) {
  var dropdown_motor_name = block.getFieldValue('motor_name');
  var value_in_speed = Blockly.Python.valueToCode(block, 'in_speed', Blockly.Python.ORDER_ATOMIC);

  var code = 'dc_mot' + dropdown_motor_name + '.set_speed(' + value_in_speed + ')\n';
  return code;
};





// WIFI - Nepoužito !
Blockly.Python['wifi_conect'] = function(block) {
  var value_ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
  var value_pass = Blockly.Python.valueToCode(block, 'pass', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['do_connect'] = `
def do_connect_sta(ssid,pass):
    import network
    sta_if = network.WLAN(network.STA_IF)
    if not sta_if.isconnected():
        print('Pripojovani k Wi-Fi siti...')
        sta_if.active(True)
        sta_if.connect(ssid, pass)
        while not sta_if.isconnected():
            pass
    print('Pripojeno! Nastaveni site:', sta_if.ifconfig())
`
  var code = 'do_connect_sta(' + value_ssid + ', ' + value_pass + ')\n';
  return code;
};




// Blynk
Blockly.Python['blynk_connect'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  Blockly.Python.definitions_['import_BlynkLib'] = 'import BlynkLib';
  
  var value_blynk_id = Blockly.Python.valueToCode(block, 'Blynk_ID', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['BlynkLib_ID'] = "BLYNK_AUTH = '"  + value_blynk_id.replace(/["']/g, "") + "'";
  
  Blockly.Python.definitions_['BlynkLib'] = `
blynk_is_connected = False
blynk_vpins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# initialize Blynk
blynk = BlynkLib.Blynk(BLYNK_AUTH,insecure=True)

@blynk.on("connected")
def blynk_connected(ping):
    print('Pripojeno k Blynk.io  Ping:', ping, 'ms')
    blynk.sync_virtual(0,1,2,3,4,5,6,7,8,9)
    blynk.sync_virtual(10,11,12,13,14,15,16,17,18,19)
    blynk_is_connected = True

@blynk.on("disconnected")
def blynk_disconnected():
    print('Odpojeno od Blynk.io')
    blynk_is_connected = False

@blynk.on("V*")
def blynk_handle_vpins(pin, value):
    blynk_is_connected = True
    #print("V{} value: {}".format(pin, value))
    try:
        blynk_vpins[int(pin)] = int(value[0])
    except ValueError:
        #print("Not a int")
        try:
            blynk_vpins[int(pin)] = float(value[0])
        except ValueError:
            #print("Not a float")
            blynk_vpins[int(pin)] = value[0]

blynk.run()
utime.sleep_ms(50)
blynk.run()
utime.sleep_ms(50)
`

  // TODO: Assemble Python into code variable.
  var code = '';
  return code;
};


Blockly.Python['blynk_run'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  // TODO: Assemble Python into code variable.
  var code = 'blynk.run()\nutime.sleep_ms(50)\n';
  return code;
};


Blockly.Python['blynk_write'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var dropdown_vpin = block.getFieldValue('vpin');
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blynk.virtual_write(' + dropdown_vpin + ', ' + value_val + ')\nutime.sleep_ms(25)\n';
  return code;
};


Blockly.Python['blynk_read'] = function(block) {
  var dropdown_vpin = block.getFieldValue('vpin');
  // TODO: Assemble Python into code variable.
  var code = 'blynk_vpins[' + dropdown_vpin + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['blynk_is_connected'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'blynk_is_connected';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};







// Joystick
Blockly.Python['joystick_init'] = function(block) {
  var dropdown_joy_name = block.getFieldValue('joy_name');
  var dropdown_rot = block.getFieldValue('rot');
  var value_vrx = Blockly.Python.valueToCode(block, 'vrx', Blockly.Python.ORDER_ATOMIC);
  var value_vry = Blockly.Python.valueToCode(block, 'vry', Blockly.Python.ORDER_ATOMIC);
  var value_sw = Blockly.Python.valueToCode(block, 'sw', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import joy_lib'] = 'import joy_lib';   
  Blockly.Python.definitions_['joy_' + dropdown_joy_name] = 'joystick' + dropdown_joy_name + ' = joy_lib.joystick(' + value_vrx + ', ' + value_vry + ', ' + value_sw + ', ' + dropdown_rot + ')';
  
  if (dropdown_joy_name == 2)
  {
    this.styleBlock([0, 0, 193]); 
  }
  else
  {
    this.styleBlock([193, 0, 0]); 
  }
  
  // TODO: Assemble Python into code variable.
  var code = '';
  return code;
};


Blockly.Python['get_joy_axis'] = function(block) {
  var dropdown_joy_name = block.getFieldValue('joy_name');
  var dropdown_axis = block.getFieldValue('axis');
  // TODO: Assemble Python into code variable.
  
  if (dropdown_joy_name > 9)
  {
      Blockly.Python.definitions_['vjoy_init'] = `
class joystick(object) :
    global v_joyX
    global v_joyY

    def __init__(self, joy_selector):
        self._otmpx = 0
        self._otmpy = 0
        self._otmpsw = 0
        self._joy_selector = int(joy_selector)

    def _joy_read(self):
        global L_v_joyX
        global L_v_joyY
        global L_v_press
        
        global R_v_joyX
        global R_v_joyY
        global R_v_press

        if (self._joy_selector == 10):
            self._otmpx = min(max(int(R_v_joyX), -100,), 100)
            self._otmpy = min(max(int(R_v_joyY), -100,), 100)
            self._otmpsw = int(R_v_press)
        
        if (self._joy_selector == 20):
            self._otmpx = min(max(int(L_v_joyX), -100,), 100)
            self._otmpy = min(max(int(L_v_joyY), -100,), 100)
            self._otmpsw = int(L_v_press)

    def joy_check(self, joy_dir):
        self._joy_read()
        if (joy_dir == 1) and (self._otmpy > 40):
            return True
        if (joy_dir == 2) and (self._otmpx > 40):
            return True
        if (joy_dir == 3) and (self._otmpy < (-40)):
            return True
        if (joy_dir == 4) and (self._otmpx < (-40)):
            return True
        if (joy_dir == 5) and (self._otmpsw):
            return True
        return False

    def get_joyX(self):
        self._joy_read()
        return self._otmpx
    
    def get_joyY(self):
        self._joy_read()
        return self._otmpy
`
  
  Blockly.Python.definitions_['vjoy_instance_' + dropdown_joy_name] = "joystick" + dropdown_joy_name + " = joystick(" + dropdown_joy_name + ")\n" 
  
  }
  
  
  
  
  
  
  if (dropdown_joy_name == 2 || dropdown_joy_name == 20)
  {
    this.styleBlock([0, 0, 193]); 
  }
  else
  {
    this.styleBlock([193, 0, 0]); 
  }
  
  var code = 'joystick' + dropdown_joy_name + '.get_joy' + dropdown_axis + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};





Blockly.Python['get_joy_state'] = function(block) {
  var dropdown_joy_name = block.getFieldValue('joy_name');
  var dropdown_axis = block.getFieldValue('axis');
  
  if (dropdown_joy_name > 9)
  {
      Blockly.Python.definitions_['vjoy_' + dropdown_joy_name] = `
class joystick(object) :
    global v_joyX
    global v_joyY

    def __init__(self, joy_selector):
        self._otmpx = 0
        self._otmpy = 0
        self._otmpsw = 0
        self._joy_selector = int(joy_selector)

    def _joy_read(self):
        global L_v_joyX
        global L_v_joyY
        global L_v_press
        
        global R_v_joyX
        global R_v_joyY
        global R_v_press

        if (self._joy_selector == 10):
            self._otmpx = min(max(int(R_v_joyX), -100,), 100)
            self._otmpy = min(max(int(R_v_joyY), -100,), 100)
            self._otmpsw = int(R_v_press)
        
        if (self._joy_selector == 20):
            self._otmpx = min(max(int(L_v_joyX), -100,), 100)
            self._otmpy = min(max(int(L_v_joyY), -100,), 100)
            self._otmpsw = int(L_v_press)

    def joy_check(self, joy_dir):
        self._joy_read()
        if (joy_dir == 1) and (self._otmpy > 40):
            return True
        if (joy_dir == 2) and (self._otmpx > 40):
            return True
        if (joy_dir == 3) and (self._otmpy < (-40)):
            return True
        if (joy_dir == 4) and (self._otmpx < (-40)):
            return True
        if (joy_dir == 5) and (self._otmpsw):
            return True
        return False

    def get_joyX(self):
        self._joy_read()
        return self._otmpx
    
    def get_joyY(self):
        self._joy_read()
        return self._otmpy
`
  
  Blockly.Python.definitions_['vjoy_instance_' + dropdown_joy_name] = "joystick" + dropdown_joy_name + " = joystick(" + dropdown_joy_name + ")\n" 
  
  }
   
  if (dropdown_joy_name == 2 || dropdown_joy_name == 20)
  {
    this.styleBlock([0, 0, 193]); 
  }
  else
  {
    this.styleBlock([193, 0, 0]); 
  }
  
  // TODO: Assemble Python into code variable.
  var code = 'joystick' + dropdown_joy_name + '.joy_check(' + dropdown_axis + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};







// ESP Now

Blockly.Python['esp_now_send_str'] = function(block) {
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['ESP_Now_init'] = `
import network
import espnow

try:
    peer = b'\\xff\\xff\\xff\\xff\\xff\\xff'   # Broadcast MAC address
    espnow_instance = espnow.ESPNow()
    espnow_instance.active(True)
    espnow_instance.add_peer(peer)             # Register peer on STA_IF
    print('ESP Now inicializovan')
except:
    print('ESP Now byl jiz inicializovan')

def esp_now_read_msg(etimeout = 1):
    try:
        out_msg = espnow_instance.irecv(etimeout)[1].split(b'\x00')[0].decode()
    except:
        out_msg = ""
    return out_msg
`

  // TODO: Assemble Python into code variable.
  var code = 'espnow_instance.send(peer, str(' + value_message + '))\n';
  return code;
};




Blockly.Python['esp_now_data_check'] = function(block) {
  Blockly.Python.definitions_['ESP_Now_init'] = `
import network
import espnow

try:
    peer = b'\\xff\\xff\\xff\\xff\\xff\\xff'   # Broadcast MAC address
    espnow_instance = espnow.ESPNow()
    espnow_instance.active(True)
    espnow_instance.add_peer(peer)             # Register peer on STA_IF
    print('ESP Now inicalizovan')
except:
    print('ESP Now byl jiz inicializovan')

def esp_now_read_msg(etimeout = 1):
    try:
        out_msg = espnow_instance.irecv(etimeout)[1].split(b'\x00')[0].decode()
    except:
        out_msg = ""
    return out_msg
`
  // TODO: Assemble Python into code variable.
  var code = '(espnow_instance.any() == True)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['esp_now_new_data'] = function(block) {
  Blockly.Python.definitions_['ESP_Now_init'] = `
import network
import espnow

try:
    peer = b'\\xff\\xff\\xff\\xff\\xff\\xff'   # Broadcast MAC address
    espnow_instance = espnow.ESPNow()
    espnow_instance.active(True)
    espnow_instance.add_peer(peer)             # Register peer on STA_IF
    print('ESP Now inicalizovan')
except:
    print('ESP Now byl jiz inicializovan')

def esp_now_read_msg(etimeout = 1):
    try:
        out_msg = espnow_instance.irecv(etimeout)[1].split(b'\x00')[0].decode()
    except:
        out_msg = ""
    return out_msg
`
  // TODO: Assemble Python into code variable.
  var code = 'esp_now_read_msg()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};






// Uart

Blockly.Python['uart_init'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_UART'] = 'from machine import UART';   
  
  var number_baud = block.getFieldValue('baud');
  var dropdown_bits = block.getFieldValue('bits');
  var dropdown_parity = block.getFieldValue('parity');
  var dropdown_stop_bit = block.getFieldValue('stop_bit');
  var val_rx = Blockly.Python.valueToCode(block, 'rx_pin', Blockly.Python.ORDER_ATOMIC);
  var val_tx = Blockly.Python.valueToCode(block, 'tx_pin', Blockly.Python.ORDER_ATOMIC);

  var code = 'uart1 = UART(1, baudrate=' + number_baud + ', tx=' + val_tx + ', rx=' + val_rx + ',bits=' + dropdown_bits + ', parity=' + dropdown_parity + ', stop=' + dropdown_stop_bit + ')\n\n';
  return code;
};

Blockly.Python['uart_read_num'] = function(block) {
  Blockly.Python.definitions_['FC_read_uart'] = `  
def read_uart(uart, len=None):
    if len:
        data = uart.read(len)
    else:
        data = uart.read()

    if data is None:
        return None
    try:
        return data.decode('utf-8')
    except UnicodeDecodeError:
        return str(data)
`
  
  var value_num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var code = 'read_uart(uart1, ' + value_num + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['uart_read_all'] = function(block) {
  Blockly.Python.definitions_['FC_read_uart'] = `  
def read_uart(uart, len=None):
    if len:
        data = uart.read(len)
    else:
        data = uart.read()

    if data is None:
        return None
    try:
        return data.decode('utf-8')
    except UnicodeDecodeError:
        return str(data)
`
  var code = 'read_uart(uart1)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_detect_message'] = function(block) {
  Blockly.Python.definitions_['FC_wait_for_message'] = `

# Globalni buffer pro uchovani dat mezi volanimi funkce
rx_buffer = b''

def wait_for_message(uart, start_marker, end_marker, timeout_ms):
    global rx_buffer

    # Prevod markeru na bajty, pokud nejsou jiz v bajtovem formatu
    if isinstance(start_marker, str):
        start_marker = start_marker.encode('utf-8')
    if isinstance(end_marker, str):
        end_marker = end_marker.encode('utf-8')
    
    start_time = utime.ticks_ms()
    while utime.ticks_diff(utime.ticks_ms(), start_time) < timeout_ms:
        data = uart.read()
        if data:
            rx_buffer += data
            # Hledame pocatecni marker
            start_index = rx_buffer.find(start_marker)
            if start_index != -1:
                # Hledame ukoncovaci marker za start_marker
                end_index = rx_buffer.find(end_marker, start_index + len(start_marker))
                if end_index != -1:
                    # Extrahujeme pouze obsah mezi markery
                    message = rx_buffer[start_index + len(start_marker): end_index]
                    rx_buffer = b''  # Vyprazdnime buffer po uspesnem nacteni kompletni zpravy
                    try:
                        return message.decode('utf-8')
                    except UnicodeDecodeError:
                        return str(message)
        utime.sleep_ms(10)
    return None

`

  var value_start_char = Blockly.Python.valueToCode(block, 'start_char', Blockly.Python.ORDER_ATOMIC);
  var value_end_char = Blockly.Python.valueToCode(block, 'end_char', Blockly.Python.ORDER_ATOMIC);
  var value_timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'wait_for_message(uart1,' + value_start_char + ', ' + value_end_char + ', ' + value_timeout + ')';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['uart_read_line'] = function(block) {
  Blockly.Python.definitions_['FC_wait_for_message'] = `
  
# Globalni buffer pro uchovani dat mezi volanimi funkce
rx_buffer_line = b''


def read_line(uart, line_ending='\\n', timeout_ms=1000):
    global rx_buffer_line

    # Prevedeme line_ending na bajty, pokud je to string
    if isinstance(line_ending, str):
        line_ending = line_ending.encode('utf-8')
    
    start_time = utime.ticks_ms()
    while utime.ticks_diff(utime.ticks_ms(), start_time) < timeout_ms:
        data = uart.read()
        if data:
            rx_buffer_line += data
            # Hledame index ukoncovaci sekvence
            newline_index = rx_buffer_line.find(line_ending)
            if newline_index != -1:
                # Extrahujeme radek bez ukoncovaci sekvence
                line = rx_buffer_line[:newline_index]
                # Odstranime z bufferu data az za ukoncovaci sekvenci
                rx_buffer_line = rx_buffer_line[newline_index + len(line_ending):]
                try:
                    return line.decode('utf-8')
                except UnicodeDecodeError:
                    return str(line)
        utime.sleep_ms(10)
    return None

` 
  
  var dropdown_ending = block.getFieldValue('ending');
  var value_timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'read_line(uart1, ' + dropdown_ending + ', ' + value_timeout + ')';
  
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['uart_read_to_buf'] = function(block) {
  var value_buffer = Blockly.Python.valueToCode(block, 'buffer', Blockly.Python.ORDER_ATOMIC);
  var code = 'uart1.readinto(' + value_buffer + ')\n';
  return code;
};

Blockly.Python['uart_write'] = function(block) {
  var value_buffer = Blockly.Python.valueToCode(block, 'buffer', Blockly.Python.ORDER_ATOMIC);
  var code = 'uart1.write(' + value_buffer + ')\n';
  return code;
};








// Try Catch
Blockly.Python['python_try_catch'] = function(block) {
  Blockly.Python.definitions_['import_utime'] = 'import utime';
  var funct_code = Blockly.Python.statementToCode(block, 'try');
  var c = Blockly.Python.statementToCode(block, 'catch');

  var code = "try:\n"+funct_code+"except Exception as err_code_str:\n  utime.sleep_ms(0)\n"+c+"\n";
  return code;
};


// Catch err string
Blockly.Python['python_catch_err'] = function(block) {
  var code = 'str(err_code_str)';
  return [code, Blockly.Python.ORDER_NONE];
};


// Exec
Blockly.Python['exec_python'] = function(block) {
  var value_command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
  var code = value_command.replace('\'','').replace('\'','') + '\n';
  return code;
};

 



// MPU6050
Blockly.Python['mpu6050_init'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_mpu6050'] = 'from mpu6050 import mpu6050';
  
  var value_scl = Blockly.Python.valueToCode(block, 'SCL', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');
  var value_sda = Blockly.Python.valueToCode(block, 'SDA', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');

  var code = `
if not "i2c_{scl}_{sda}" in globals():
    i2c_{scl}_{sda} = SoftI2C(scl=Pin({scl}), sda=Pin({sda}), freq=400000)

mpu = mpu6050(i2c_{scl}_{sda})
mpu.calcOffsets(1, 1)\n
`

  code = code.replace(/{scl}/g, value_scl);
  code = code.replace(/{sda}/g, value_sda);

  return code;
};


Blockly.Python['mpu6050_calibrate'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_mpu6050'] = 'from mpu6050 import mpu6050';
  var code = 'mpu.calcOffsets(1, 1)\n';
  return code;
};


Blockly.Python['mpu6050_fetch'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_mpu6050'] = 'from mpu6050 import mpu6050';
  var code = 'mpu.update()\n';
  return code;
};


Blockly.Python['mpu6050_get_angle'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
    var code = 'mpu.getAngles()[' + dropdown_axis + ']';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_get_accel'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  var code = 'mpu.getAccel()[' + dropdown_axis + ']';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_get_gyro'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  var code = 'mpu.getGyro()[' + dropdown_axis + ']';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['mpu6050_get_temp'] = function(block) {
  var code = 'mpu.getTemp()';
  return [code, Blockly.Python.ORDER_NONE];
};



// Encoder
Blockly.Python['encoder_init'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  var value_reverse = Blockly.Python.valueToCode(block, 'reverse', Blockly.Python.ORDER_ATOMIC);
  var value_scale = Blockly.Python.valueToCode(block, 'scale', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['Encoder_init'] = `
class Encoder(object):
    def __init__(self, pin_x, pin_y, reverse, scale):
        self.reverse = reverse
        self.scale = scale
        self.forward = True
        self.pin_x = pin_x
        self.pin_y = pin_y
        self._pos = 0
        self.x_interrupt = pin_x.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=self.x_callback)
        self.y_interrupt = pin_y.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=self.y_callback)

    def x_callback(self, line):
        self.forward = self.pin_x.value() ^ self.pin_y.value() ^ self.reverse
        self._pos += 1 if self.forward else -1

    def y_callback(self, line):
        self.forward = self.pin_x.value() ^ self.pin_y.value() ^ self.reverse ^ 1
        self._pos += 1 if self.forward else -1

    @property
    def position(self):
        return self._pos * self.scale

    @position.setter
    def position(self, value):
        self._pos = value // self.scale
`
  
  var code = 'encoder' + dropdown_index + ' = Encoder(Pin((' + value_a + '), Pin.IN), Pin((' + value_b + '), Pin.IN) ,' + value_reverse + ',' + value_scale + ')\n';
  return code;
};



Blockly.Python['encoder_set'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var value_val = Blockly.Python.valueToCode(block, 'Val', Blockly.Python.ORDER_ATOMIC);
  var code = 'encoder' + dropdown_index + '.position = ' + value_val + '\n';
  return code;
};

Blockly.Python['encoder_get'] = function(block) {
  var dropdown_index = block.getFieldValue('index');
  var code = 'encoder' + dropdown_index + '.position';
  return [code, Blockly.Python.ORDER_NONE];
};




// DAC
Blockly.Python['dac_write'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dac'] = 'from machine import DAC';
  Blockly.Python.definitions_['dac_write'] = `
def dac_write(dac,dac_val):
    if dac_val < 0:
        dac_val = 0
    if dac_val > 255:
        dac_val = 255
    dac.write(int(dac_val))
`
  
  Blockly.Python.definitions_['dac' + dropdown_pin] = 'dac' + dropdown_pin + ' = DAC(Pin(' + dropdown_pin + '))';
  
  
  var code = 'dac_write(dac' + dropdown_pin + ',' + value_val + ')\n';
  return code;
};


// On exit run code
Blockly.Python['def_exit'] = function(block) {
  var statements_code = Blockly.Python.statementToCode(block, 'exit_code');
  // TODO: Assemble Python into code variable.
  
  Blockly.Python.definitions_['on_exit'] = "def on_exit():\n" + statements_code + "\n"
  
  var code = '\n';
  return code;
};





Blockly.Python['get_ssid'] = function(block) {
  var code = 'str(WIFI_SSID)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['get_ip'] = function(block) {
  var code = 'str(WIFI_IP)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['http_request'] = function(block) {
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['urequests'] = 'import urequests';
  Blockly.Python.definitions_['http_request_get'] = `
def http_get_request(url):
    try:
        request = urequests.get(url)
        if (request.status_code) == 200:
            return str(request.content.decode('utf-8'))
        else:
            print('Chyba pri cteni HTTP dat. Status code = ' + str(request.status_code))
            return "chyba"
    except:
        print('Chyba pri cteni HTTP dat.')
        return "chyba"
`
  
  var code = 'http_get_request(str(' + value_url + '))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



// vl53l0x Laser range meter

Blockly.Python['vl53l0x_init'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var value_sda = Blockly.Python.valueToCode(block, 'SDA', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');
  var value_scl = Blockly.Python.valueToCode(block, 'SCL', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');
  
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_VL53L0X'] = 'from vl53l0x import VL53L0X';

  var laser_define = "# Create a VL53L0X object\ntry:\n"
  laser_define = laser_define + '   if not "i2c_' + value_scl + '_' + value_sda + '" in globals():\n';
  laser_define = laser_define + '      i2c_' + value_scl + '_' + value_sda + ' = SoftI2C(scl=Pin(' + value_scl + '), sda=Pin(' + value_sda + '), freq=400000)\n\n';
  
  laser_define = laser_define + "   tof" + dropdown_id + " = VL53L0X(i2c_" + value_scl + "_" + value_sda + ")\n"
  laser_define = laser_define + "   tof" + dropdown_id + ".set_measurement_timing_budget(50000)\n"
  laser_define = laser_define + "   tof" + dropdown_id + ".set_Vcsel_pulse_period(tof" + dropdown_id + ".vcsel_period_type[0], 16)\n"
  laser_define = laser_define + "   tof" + dropdown_id + ".set_Vcsel_pulse_period(tof" + dropdown_id + ".vcsel_period_type[1], 12)\n"
  laser_define = laser_define + "except Exception as err_code_str:\n"
  laser_define = laser_define + "   print('Chyba inicializace laseroveho dalkomeru " + dropdown_id + " : ', err_code_str)\n"
  
  Blockly.Python.definitions_['VL53L0X' + dropdown_id + '_init'] = laser_define;
  
  var code = '\n';
  return code;
};


Blockly.Python['vl53l0x_fast_dist_mm'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var code = 'tof' + dropdown_id + '.read_non_blocking()';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['vl53l0x_fast_dist_cm'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var code = 'int(tof' + dropdown_id + '.read_non_blocking()/10)';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['vl53l0x_dist_mm'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var code = 'tof' + dropdown_id + '.ping()';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['vl53l0x_dist_cm'] = function(block) {
  var dropdown_id = block.getFieldValue('ID');
  var code = 'int(tof' + dropdown_id + '.ping()/10)';
  return [code, Blockly.Python.ORDER_NONE];
};




// PCF8574

Blockly.Python['init_pcf8574'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_pcf8574'] = 'import pcf8574';

  var dropdown_adress = block.getFieldValue('adress');
  var value_pin_sda = Blockly.Python.valueToCode(block, 'pin_SDA', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');
  var value_pin_scl = Blockly.Python.valueToCode(block, 'pin_SCL', Blockly.Python.ORDER_ATOMIC).replace(/[()]/g, '');
  
  var code = `
if not "i2c_{scl}_{sda}" in globals():
    i2c_{scl}_{sda} = SoftI2C(scl=Pin({scl}), sda=Pin({sda}), freq=100000)

pcf8574_{dev_adr} = pcf8574.PCF8574(i2c_{scl}_{sda}, 0x20 + {dev_adr})\n
`

  code = code.replace(/{scl}/g, value_pin_scl);
  code = code.replace(/{sda}/g, value_pin_sda);
  code = code.replace(/{dev_adr}/g, dropdown_adress);
  
  return code;
};



Blockly.Python['get_pin_pcf8574'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_pcf8574'] = 'import pcf8574';
  
  var dropdown_adress = block.getFieldValue('adress');
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var code = 'pcf8574_' + dropdown_adress + '.pin(' + value_pin + ')';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['set_pin_pcf8574'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_pcf8574'] = 'import pcf8574';
  
  var dropdown_adress = block.getFieldValue('adress');
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'pcf8574_' + dropdown_adress + '.pin(' + value_pin + ', ' + value_value + ')\n';
  return code;
};


Blockly.Python['invert_pin_pcf8574'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_pcf8574'] = 'import pcf8574';
  
  var dropdown_adress = block.getFieldValue('adress');
  var value_pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'pcf8574_' + dropdown_adress + '.toggle(' + value_pin + ')\n';
  return code;
};


Blockly.Python['set_port_pcf8574'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_pcf8574'] = 'import pcf8574';
  
  var dropdown_adress = block.getFieldValue('adress');
  var value_port = Blockly.Python.valueToCode(block, 'PORT', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'pcf8574_' + dropdown_adress + '.port = ' + value_port + '\n';
  
  return code;
};

Blockly.Python['get_port_pcf8574'] = function(block) {
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_SoftI2C'] = 'from machine import SoftI2C';
  Blockly.Python.definitions_['import_pcf8574'] = 'import pcf8574';
  
  var dropdown_adress = block.getFieldValue('adress');
  
  var code = 'pcf8574_' + dropdown_adress + '.port';
  
  return [code, Blockly.Python.ORDER_NONE];
};





// Souborový systém

Blockly.Python['file_write_auto'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC);
  var mode = block.getFieldValue('MODE');
  var code = 'with open(' + filename + ', "' + mode + '") as f:\n    f.write(' + data + ')\n';
  return code;
};

Blockly.Python['file_append_line_auto'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var line = Blockly.Python.valueToCode(block, 'LINE', Blockly.Python.ORDER_ATOMIC);
  var code = 'with open(' + filename + ', "a") as f:\n    f.write(' + line + ' + "\\n")\n';
  return code;
};

Blockly.Python['file_delete_auto'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_uos'] = 'import uos';
  var code = 'uos.remove(' + filename + ')\n';
  return code;
};

Blockly.Python['make_directory_auto'] = function(block) {
  var dirname = Blockly.Python.valueToCode(block, 'DIRNAME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_uos'] = 'import uos';
  var code = 'uos.mkdir(' + dirname + ')\n';
  return code;
};

Blockly.Python['list_directory_auto'] = function(block) {
  var dirname = Blockly.Python.valueToCode(block, 'DIRNAME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_uos'] = 'import uos';
  var code = 'uos.listdir(' + dirname + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['rename_file_auto'] = function(block) {
  var oldname = Blockly.Python.valueToCode(block, 'OLDNAME', Blockly.Python.ORDER_ATOMIC);
  var newname = Blockly.Python.valueToCode(block, 'NEWNAME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_uos'] = 'import uos';
  var code = 'uos.rename(' + oldname + ', ' + newname + ')\n';
  return code;
};



Blockly.Python['file_stat_custom'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var option = block.getFieldValue('STAT_OPTION');
  Blockly.Python.definitions_['def_get_file_stat'] =
`def get_file_stat(filename, option):
    import uos
    try:
        st = uos.stat(filename)
        if option == "exist":
            return True
        elif option == "size":
            return st[6]
    except OSError:
        if option == "exist":
            return False
        elif option == "size":
            return -1`;
  var code = 'get_file_stat(' + filename + ', "' + option + '")';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['file_read_custom'] = function(block) {
  var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC);
  var mode = block.getFieldValue('MODE');
  Blockly.Python.definitions_['def_read_file'] =
`def read_file(filename, mode):
    try:
        with open(filename, mode) as f:
            return f.read()
    except OSError:
        return ""`;
  var code = 'read_file(' + filename + ', "' + mode + '")';
  return [code, Blockly.Python.ORDER_NONE];
};
