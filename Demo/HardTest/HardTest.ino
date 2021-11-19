#include <SPI.h>
#include <Wire.h>
#include "RF24.h"
#include "printf.h"

RF24 Radio(9, 10);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  printf_begin();
  Serial.println();
  Serial.println(F("LGT RF_NANO v2.0 Test"));

  //
  // Setup and configure rf radio
  //

  Radio.begin();
  Radio.setAddressWidth(5);
  Radio.openReadingPipe(0, 0x1212121212LL);
  Radio.openReadingPipe(1, 0x3434343431LL);
  Radio.openReadingPipe(2, 0x3434343432LL);
  Radio.openReadingPipe(3, 0x3434343433LL);
  Radio.openReadingPipe(4, 0x3434343434LL);
  Radio.openReadingPipe(5, 0x3434343435LL);
  Radio.setChannel(115);            //115 band above WIFI signals
  Radio.setPALevel(RF24_PA_MAX);    //MIN power low rage
  Radio.setDataRate(RF24_1MBPS) ;   //Minimum speed
  Serial.println("Setup Initialized");
  Radio.printDetails();
}

void loop() {
  //Serial.println("loop");
  delay(500);
}
