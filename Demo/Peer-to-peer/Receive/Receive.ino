#include <SPI.h>
#include<Wire.h>
#include "RF24.h"
#include "printf.h"
RF24 ReceiveRadio (9, 10);

int value;

void ReadData()
{
  if (ReceiveRadio.available())
  {
    while (ReceiveRadio.available())
    {
      ReceiveRadio.read(&value, sizeof(value) );
    }
    Serial.print("ReadData");
    Serial.print(".........");
    Serial.println(value);
  }
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  printf_begin();
  Serial.println(F("LGT RF-NANO v3.0 Receive Test"));

  //
  // Setup and configure rf radio
  //
  ReceiveRadio.begin();
  // ReceiveRadio.setAutoAck(false);
  ReceiveRadio.setAddressWidth(5);
  ReceiveRadio.openReadingPipe(1, 0xF0F0F0F066LL);
  ReceiveRadio.setChannel(115);  //115 band above WIFI signals
  ReceiveRadio.setPALevel(RF24_PA_MAX); //MIN power low rage
  ReceiveRadio.setDataRate(RF24_1MBPS) ;  //Minimum speed
  ReceiveRadio.startListening();
  Serial.println("Receive Setup Initialized");
  ReceiveRadio.printDetails();
  delay(500);
}

void loop() {
  ReadData();
}
