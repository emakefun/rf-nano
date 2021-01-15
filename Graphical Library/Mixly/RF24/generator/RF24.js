'use strict';

goog.provide('Blockly.Arduino.RF24');

goog.require('Blockly.Arduino');


//初始化发送
Blockly.Arduino.nrf24l01send = function(){
    var value_address = Blockly.Arduino.valueToCode(this,'address',Blockly.Arduino.ORDER_ATOMIC);
       Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include "RF24.h"\n'
       Blockly.Arduino.setups_['begin'] ='radio.begin();\n'
       Blockly.Arduino.setups_['Address'] = 'radio.openWritingPipe('+value_address+');\n'
    var code = '';
    return code;
   };
   //初始化接收
   Blockly.Arduino.nrf24l01rec = function(){
   
    var value_address2 = Blockly.Arduino.valueToCode(this,'address2',Blockly.Arduino.ORDER_ATOMIC);
       Blockly.Arduino.definitions_['md_nrf24l01'] = '#include<SPI.h>\n#include "RF24.h"\n'
       Blockly.Arduino.setups_['begin'] ='radio.begin();\n'
       Blockly.Arduino.setups_['Address2'] = 'radio.openReadingPipe(1,'+value_address2+');\n'
    var code = '';
    return code;
   };
   //功耗等级块
   Blockly.Arduino.power_consumption_level = function(){
      var level = this.getFieldValue('version');
      Blockly.Arduino.setups_['setPALevel'] = 'radio.setPALevel('+level+');\n';
      return '';
   }
   //初始化引脚块
   Blockly.Arduino.initialize_pins = function(){
      var ce = this.getFieldValue('CE');
      var cs = this.getFieldValue('CS');
      Blockly.Arduino.definitions_['initialize'] = 'RF24 radio('+ce+','+cs+');\n';
      return '';
   }
   //发送数据
   Blockly.Arduino.nrf24l01senddatass = function(){
      var value_senddatass = Blockly.Arduino.valueToCode(this,'nrfdatass',Blockly.Arduino.ORDER_ATOMIC);
      var value_genre = this.getFieldValue('GENRE');
      var code = 'radio.write(&'+value_senddatass+', sizeof('+value_senddatass+') );\n';
      return code;
  };
  //发送字符串数据
  Blockly.Arduino.nrf24l01senddatass_string = function(){
   var value_senddatass_string = Blockly.Arduino.valueToCode(this,'nrfdatass_string',Blockly.Arduino.ORDER_ATOMIC);
   var value_genre = this.getFieldValue('GENRE');
   //Blockly.Arduino.definitions_['md_string'] = 'char value[];'
   var code = 'char value[] = ' + value_senddatass_string + ';\nradio.write(value, sizeof(value) );\n';
   return code;
};
//发送数组数据
Blockly.Arduino.nrf24l01senddatass_Arrays = function(){
   var value_senddatass_Arrays = Blockly.Arduino.valueToCode(this,'nrfdatass_Arrays',Blockly.Arduino.ORDER_ATOMIC);
   //var value_genre = this.getFieldValue('GENRE');
   //Blockly.Arduino.definitions_['md_string'] = 'char value[];'
   var code = 'radio.write(' + value_senddatass_Arrays + ', sizeof(' + value_senddatass_Arrays + ') );\n';
   return code;
};
  //监听块
  Blockly.Arduino.eavesdrop = function(){
   var listen = this.getFieldValue('EAVESDROP');
   var code = 'radio.'+listen+'Listening();\n';
   return code;
}
//RF24是否有数据可读
Blockly.Arduino.nrfdataradys = function(){
   var code = 'radio.available()';
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//接收数据
Blockly.Arduino.nrfrecdatas = function(){
   var value_md_nrfdatasss = Blockly.Arduino.valueToCode(this,'nrfdatasss',Blockly.Arduino.ORDER_ATOMIC);
   var code = 'radio.read(&'+value_md_nrfdatasss+', sizeof('+value_md_nrfdatasss+') );\n';
return code;
};
//接收字符串数据
Blockly.Arduino.nrfrecdatas_string = function(){
   Blockly.Arduino.definitions_['receiving_string'] = 'char aary[100]={0};\nString receiving(){\nradio.read(aary, sizeof(aary) );\nString data = aary;\nreturn data;\n}';
   var code = 'receiving()';
return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//速率块
Blockly.Arduino.transmission_rate = function(){
   var speed = this.getFieldValue('Transmission_Rate');
   Blockly.Arduino.setups_['transmission_rate'] = 'radio.setDataRate('+speed+');\n';
   return '';
}
//接收数组
Blockly.Arduino.Receiving_arrays = function(){
   var value_md_nrfArrays = Blockly.Arduino.valueToCode(this,'nrf_Arrays',Blockly.Arduino.ORDER_ATOMIC);
   var code = 'radio.read(' + value_md_nrfArrays + ', sizeof(' + value_md_nrfArrays + ')/sizeof(' + value_md_nrfArrays + '[0]) );\n';
return code;
};