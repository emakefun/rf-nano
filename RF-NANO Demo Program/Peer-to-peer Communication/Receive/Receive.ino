#include <SPI.h>
#include<Wire.h>
#include "RF24.h"
#include "printf.h"
RF24 myRadio (9, 10);

int value;
byte addresses[][6] = {"0"};

const uint8_t num_channels = 126;
uint8_t values[num_channels];

void WriteData()
{
  value = random(255);
  myRadio.stopListening(); //Stop Receiving and start transminitng
  myRadio.openWritingPipe(0xF0F0F0F066);//Sends data on this 40-bit address
  myRadio.write(&value, sizeof(value));
  Serial.print("WriteData");
  Serial.print(".........");
  Serial.println(value);
}

void ReadData()
{
  myRadio.openReadingPipe(1, 0xF0F0F0F066); //Which pipe to read, 40 bit Address
  myRadio.startListening(); //Stop Transminting and start Reveicing
  if ( myRadio.available())
  {
    while (myRadio.available())
    {
      myRadio.read( &value, sizeof(value) );
    }
    Serial.print("ReadData");
    Serial.print(".........");
    Serial.println(value);
    myRadio.stopListening();
  }
}



void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
 printf_begin();
  Serial.println();
  Serial.println();
  Serial.println();
  Serial.println();
  Serial.println(F("\n\RF_NANO v3.0 Test"));
  Serial.println();
  Serial.println();
  

  //
  // Setup and configure rf radio
  //

  myRadio.begin();
  myRadio.setAutoAck(false);

  // Get into standby mode
  myRadio.startListening();
  myRadio.stopListening();
  myRadio.printDetails();
  
  myRadio.begin();
  myRadio.setChannel(115);  //115 band above WIFI signals
  myRadio.setPALevel(RF24_PA_MAX); //MIN power low rage
  myRadio.setDataRate( RF24_1MBPS ) ;  //Minimum speed
//  Serial.print("Setup Initialized");
  delay(500);
}

void loop() {
  ReadData();
}
