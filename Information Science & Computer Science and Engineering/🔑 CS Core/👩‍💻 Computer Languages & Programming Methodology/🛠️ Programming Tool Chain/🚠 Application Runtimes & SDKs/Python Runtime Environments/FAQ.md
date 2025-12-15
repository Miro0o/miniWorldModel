# FAQ

[TOC]



## 👉 MQTT/Python Subscribe to multiple topics and write payloads on Raspberry LCD
#mqtt 

```python
### HUMIDITY
def on_message_humi(mosq, obj, msg):
    lcd.set_cursor(7,3)
    lcd.message(str(msg.payload)[0:4]+chr(37))

### PRESSURE
def on_message_pres(mosq, obj, msg):
    lcd.set_cursor(13,3)
    lcd.message(str(msg.payload)+"hPa")

### topic message
def on_message(mosq, obj, msg):
    print(msg.topic+" "+str(msg.qos)+" "+str(msg.payload))

mqttc = paho.Client()

#Add message callbacks that will only trigger on a specific   subscription    match
mqttc.message_callback_add('iDomus/RPiS/Sens1/Humi', on_message_humi)
mqttc.message_callback_add('iDomus/RPiN/Sens2/Pres', on_message_pres)
mqttc.message_callback_add('iDomus/RPiS/Rel1/Read', on_message_relay)
mqttc.on_message = on_message
mqttc.connect("10.0.2.10", 1883, 30)
mqttc.subscribe("iDomus/#")

mqttc.loop_forever()
```


[MQTT/Python Subscribe to multiple topics and write payloads on Raspberry LCD]: https://stackoverflow.com/questions/41624697/mqtt-python-subscribe-to-multiple-topics-and-write-payloads-on-raspberry-lcd
