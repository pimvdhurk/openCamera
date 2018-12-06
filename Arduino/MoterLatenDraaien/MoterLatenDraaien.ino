#include <Servo.h>

Servo servo;
int angle = 10;


void setup() {
  servo.attach(8);
  servo.write(angle);
}
