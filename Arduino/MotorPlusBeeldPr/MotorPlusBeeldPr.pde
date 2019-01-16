import processing.serial.*;

Serial port;

int data;

void setup() {
  
   // size of the pop up screen
   size(1000, 600);
   
   // connection from computer to arduino
   port = new Serial(this, Serial.list()[0], 9600);
   
}

void draw() {
  
  // Checks if port is available
  if (port.available() > 0) {
    
  // reads data from the port
  data = port.read();
  }
  
  // when the data changes, the background changes too
  background(data, data, data);
  println(data);
  
}
