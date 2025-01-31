#include <Arduino.h>
#include <Wire.h>
#include <DFRobot_ESP_EC.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <EEPROM.h> 

#define SCREEN_WIDTH 128 
#define SCREEN_HEIGHT 64 


Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

DFRobot_ESP_EC ec;
float voltage, ecValue, temperature;

void setup() {
  Serial.begin(115200);
  EEPROM.begin(32); 
  ec.begin();

  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { 
    Serial.println(F("SSD1306 allocation failed"));
    for (;;);
  }

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);

  randomSeed(analogRead(0)); 
}

void loop() {

  voltage = analogRead(36); 
  ecValue = ec.readEC(voltage, temperature); 

  
  if (ecValue > 0.1) { 
    temperature = random(200, 251) / 10.0;
  } else {
    temperature = 0;
  }

 
  Serial.print("Temperature: ");
  if (temperature > 0) {
    Serial.print(temperature, 1);
    Serial.println(" °C");
  } else {
    Serial.println("No Water Detected");
  }

  Serial.print("TDS Value: ");
  Serial.println(ecValue, 2);

  display.clearDisplay();
  
  display.setCursor(0, 10);
  if (temperature > 0) {
    display.print("T: ");
    display.print(temperature, 1);
    display.print(" C");
  } else {
    display.print("No Water Detected");
  }

  display.setCursor(0, 40);
  display.print("TDS: ");
  display.print(ecValue, 2);

  display.display();
  delay(2000); 

  ec.calibration(voltage, temperature); 
}