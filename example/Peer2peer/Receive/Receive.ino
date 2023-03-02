#include <SPI.h>
#include<Wire.h>
#include <RF24.h>
RF24 ReceiveRadio (7, 8);

byte value[32];

void ReadData()
{
  uint8_t bytes;
  if (ReceiveRadio.available())
  {
    while (ReceiveRadio.available())
    { 
      bytes = ReceiveRadio.getPayloadSize();
      ReceiveRadio.read(value, bytes);//接收数据，并将数据赋值给value
    }
    Serial.print("ReadData");
    Serial.print(".........");
    Serial.println(value[0]);//打印所接收的值
  }
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println(F("RF-NANO v4.0 Receive Test"));

  //
  // Setup and configure rf radio
  //
  ReceiveRadio.begin();
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
