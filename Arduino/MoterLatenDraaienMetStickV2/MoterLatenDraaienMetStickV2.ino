#include <Servo.h> //accesses the Arduino Servo Library

Servo myservo;  // creates servo object to control a servo

int val;    // variable to read the value from the analog pin

void setup()
{
  myservo.attach(9);  // ensures output to servo on pin 9
}
