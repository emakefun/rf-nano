'use strict';

goog.provide('Blockly.Blocks.RF24');

goog.require('Blockly.Blocks');


Blockly.Blocks.RF24.HUE = 120;



//NRF24L01发送数据地址value 数据value
  Blockly.Blocks.nrf24l01send = {
    init: function() {
      this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01ADDRESS1);
        this.appendValueInput("address", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
          this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    }
  };
  //初始化接收数组
Blockly.Blocks.nrf24l01rec = {
  init: function() {
    this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01ADDRESS2);
        this.appendValueInput("address2", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
          this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//功耗等级块样式
Blockly.Blocks.power_consumption_level = {
  init:function(){
   this.setColour(Blockly.Blocks.RF24.HUE);
     this.appendDummyInput("")
       .appendField(Blockly.RF24_SETUP)
       .appendField(new Blockly.FieldDropdown(
       [
         ['最低功耗','RF24_PA_MIN'],
         ['低功耗','RF24_PA_LOW'],
         ['高功耗','RF24_PA_HIGH'],
         ['最大功耗','RF24_PA_MAX'],
       ]), "version")
   this.setPreviousStatement(true,null);
     this.setNextStatement(true,null);
   this.setTooltip('');
  }
 };
 //初始化引脚
 Blockly.Blocks.initialize_pins = {
  init: function() {
	    this.setColour(Blockly.Blocks.RF24.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.RF24_PINSCE)
        .appendField(new Blockly.FieldDropdown(
          [
            // ['2','2'],
            // ['3','3'],
            // ['4','4'],
            // ['5','5'],
            // ['6','6'],
            // ['7','7'],
            // ['8','8'],
            ['9','9'],
            ['10','10']
          ]
        ), "CE")
		 .appendField(Blockly.RF24_PINSCS)
		 .appendField(new Blockly.FieldDropdown(
       [
            // ['2','2'],
            // ['3','3'],
            // ['4','4'],
            // ['5','5'],
            // ['6','6'],
            // ['7','7'],
            // ['8','8'],
            ['10','10'],
            ['9','9']
            
    ]
    ), "CS")
	    this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
        this.setTooltip('');
  }
};
//nrf发送数据
Blockly.Blocks.nrf24l01senddatass = {
  init: function() {
    this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_SENDDATA);
		this.appendValueInput("nrfdatass", Number)
      this.setInputsInline(true);
    //   this.appendDummyInput("")
    //   .appendField(Blockly.RF24_GENRE)
		//   .appendField(new Blockly.FieldDropdown(
    //    [
    //         ['整数','int'],
    //         ['无符号整数','unsigned int'],
    //         ['字','word'],
    //         ['长整数','long'],
    //         ['无符号长整数','unsigned long'],
    //         ['小数','float'],
    //         ['双精度浮点数','double'],
    //         ['布尔','boolean'],
    //         ['字节','byte'],
    //         ['字符','char'],
    //         ['无符号字符','unsigned char'],
    //         ['字符串','String']
    // ]
    // ), "GENRE")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//nrf发送字符串数据
Blockly.Blocks.nrf24l01senddatass_string = {
  init: function() {
    this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_SENDDATA_STRING);
		this.appendValueInput("nrfdatass_string", String)
      this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//nrf发送数组数据
Blockly.Blocks.nrf24l01senddatass_Arrays = {
  init: function() {
    this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_SENDDATA_ARRAYS);
		this.appendValueInput("nrfdatass_Arrays", String)
      this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//监听块样式
Blockly.Blocks.eavesdrop = {
  init:function(){
   this.setColour(Blockly.Blocks.RF24.HUE);
     this.appendDummyInput("")
       .appendField(Blockly.RF24_EAVESDROP)
       .appendField(new Blockly.FieldDropdown(
       [
         ['打开','start'],
         ['关闭','stop']
       ]), "EAVESDROP")
   this.setPreviousStatement(true,null);
     this.setNextStatement(true,null);
   this.setTooltip('');
  }
 };
 //是否有数据可读
Blockly.Blocks.nrfdataradys = {
  init:function(){
	this.setColour(Blockly.Blocks.RF24.HUE);
	this.appendDummyInput("")
	    .appendField(Blockly.RF24_READABILITY)
	this.setOutput(true, Boolean);
	this.setTooltip('');
  }
};
//nrf接收数据
Blockly.Blocks.nrfrecdatas = {
  init: function() {
    this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01RECDATASSS);
		this.appendValueInput("nrfdatasss", Number)
      this.setInputsInline(true);
    //   this.appendDummyInput("")
    //   .appendField(Blockly.RF24_GENRE)
		//   .appendField(new Blockly.FieldDropdown(
    //    [
    //         ['整数','int'],
    //         ['无符号整数','unsigned int'],
    //         ['字','word'],
    //         ['长整数','long'],
    //         ['无符号长整数','unsigned long'],
    //         ['小数','float'],
    //         ['双精度浮点数','double'],
    //         ['布尔','boolean'],
    //         ['字节','byte'],
    //         ['字符','char'],
    //         ['无符号字符','unsigned char'],
    //         ['字符串','String']
    // ]
    // ), "GENRE")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//nrf接收字符串数据
Blockly.Blocks.nrfrecdatas_string = {
  init:function(){
    this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_INITNRF24L01RECDATASSS_STRING)
    this.setOutput(true, String);
    this.setTooltip(true);
    }
};
//速率块
Blockly.Blocks.transmission_rate = {
  init:function(){
   this.setColour(Blockly.Blocks.RF24.HUE);
     this.appendDummyInput("")
       .appendField(Blockly.RF24_SPEED)
       .appendField(new Blockly.FieldDropdown(
       [
         ['1MB','RF24_1MBPS'],
         ['2MB','RF24_2MBPS'],
         ['250KB','RF24_250KBPS']
       ]), "Transmission_Rate")
   this.setPreviousStatement(true,null);
     this.setNextStatement(true,null);
   this.setTooltip('');
  }
 };
//nrf接收数组数据
Blockly.Blocks.Receiving_arrays = {
  init: function() {
    this.setColour(Blockly.Blocks.RF24.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.RF24_RECEIVING_ARRAYS);
		this.appendValueInput("nrf_Arrays", Number)
      this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


