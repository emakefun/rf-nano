# rf-nano
emakefun arduino nano V3.0 + nrf24L01+
arduino和无线芯片引脚连接如下

|  ATmega328P   | NRF24L01+  |
|  ----  | ----  |
| D9  | CE |
| D10  | CSN |
| D11  | MOSI |
| D12  | MISO |
| D13  | SCK |
rf-nano已经被占用的D9，D10，D11，D12，D13引脚不能再被复用



关键函数解释
模块自检程序
点对点测试
一对多测试
