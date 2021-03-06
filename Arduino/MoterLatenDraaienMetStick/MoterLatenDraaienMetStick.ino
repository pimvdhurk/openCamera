#include <Servo.h>

Servo servo;
int delayVar = 3000;
int angleMin = 20;
int angleMax = 120;

int sensePin = 0;

bool isUp = true;

void setup() {
  // put your setup code here, to run once:
  servo.attach(8);
//  servo.write(angleMax);
  Serial.begin(9600);
}

void loop() 
{
  double newAnalog = analogRead(sensePin);
  Serial.println(newAnalog);
  newAnalog = newAnalog / 1023;
  newAnalog = newAnalog * 100;


   if(newAnalog < 50 && isUp == false)
   {
    int count = angleMin;
      while(count < angleMax)
      {
        servo.write(count);
        count = count + 1;
        delay(10);
        isUp = true;
     }
   }

   if(newAnalog > 50 && isUp == true)
   {
    int count = angleMax;
      while(count > angleMin)
      {
        servo.write(count);
        count = count - 1;
        delay(10);
        isUp = false;
     }
   }
}
