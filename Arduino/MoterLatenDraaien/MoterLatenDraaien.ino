#include <Servo.h>

Servo servo;
int angle = 10;


void setup() {
  servo.attach(8);
  servo.write(angle);
}

void loop() {
  //scan van 0 tot 180 graden
    for(angle = 10; angle < 180; angle++)
    {
      servo.write(angle);
      delay(15);
    }

    //nu scan terug van 180 naar 0 graden
    for(angle = 180; angle > 10; angle--)
    {
      servo.write(angle);
      delay(15);  
    }
}
