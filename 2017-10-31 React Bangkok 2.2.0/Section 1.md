# Expo vs React Native

จัดที่ Pronto

Expo - เปรียบเสมือน create-react-app ของ react native

ข้อเสียของ React Native
- เริ่มต้นยาก ติดตั้งนานลง XCode + Android Studio
- รายละเอียดยิบย่อยเวลาเอาขึ้น Production พวกรายละเอียดที่ Native เอาขึ้นทั่วไป
- ยากสำหรับคนที่พึ่งเริ่มต้นใหม่

Expo
- Config ให้
- ช่วยในการ Test โดย Gen QR code แล้วให้ test ได้เลย

ข้อดี
Only 5 min - ใช้ง่าย ขึ้นระบบง่ายfor hello world
Share instantly - ให้คนอื่นดูง่ายขึ้น
Ready-to-use modules - มี lib ทั่วไปมาให้ใช้เลย
Don't have to know any of native code - ไม่ต้องรู้เรื่อง Native
Easy to update version - แก้ config นิดเดียว

ข้อเสีย
ให้สิ่งที่เราไม่ต้องการมาด้วย
และสิ่งที่เราต้องการจริงๆนั้นมันไม่มี
Expo ไฟล์หลัง Build ขนาดเริ่มต้น 25MB มันใหญ่
เราเสียการควบคุมไปเยาะมากเช่น Server มันล่ม App เราก็พังเลย

# How App Navigation works?
หลักการทำงานของ Navigation คือการกดและเปลี่ยนหน้าไปเรื่อยๆ

ปัญหา
แต่ละ OS มีการ handle App ต่างกัน การทำงาน Life cycle ต่างกัน
เช่น เวลาเปิด App แล้วรับสายโทรศัพท์ แล้วกลับหน้า App ตัว App จะเกิดอะไรขึ้น

1. airbnb/native-navigation - ให้ประสบการณ์ที่ใกล้เคียงกับ Native มากที่สุด แต่มันมีปัญหาคือมันยัง Development ไม่เสร็จ
2. react-community/react-navigation - ไม่ขึ้นกับใคร คอนเซป เรียนรู้ครั้งเดียวทำทุกอย่าง
ข้อดี
- Strong community ใหญ่
- Easy to implement - ไม่ต้องแตะ Native code ใช้ JS หมด
- Example - ดี
ข้อเสีย
- มันช้า เพราะ view มัน stack ซ้อนๆกัน เวลาเปิดหน้าไปเรื่อยๆ 

ปัญหาของ Navigation ทุกตัวเลยคือ
JS Thread - มันมี Thread เดียว
3. wix/react-native-navigation - เป็น Native จริงๆมี Lib ของ iOS กับ Android มารองรับ
*** แนะนำตัวนี้ ***
ข้อดี
- Proformance is okey
- Customise ได้ทุกหน้า
- มี Advanced Example
ข้อเสีย
- ใช้ยาก
- ไม่มี Simple
- React native version ใหม่เสมอ และ ต้องระวังว่า version ไหน ใช้กับ Native version ไหน
- iOS ไม่มีปัญหาอะไรเลย แต่ใน Android มีปัญหาอยู่

### อะไรดีสุด
- ไม่มี เพราะ แม้ตัวสุดท้ายจะดี แต่ก็ยังห่างไกล Native เยาะมาก

## How to optimise JS Thread
JS Thread ประมาณว่า ถนนเส้นเดียวที่ script วิ่ง มันช้า และมี Process เยาะมาก
วิธีแก้
1. ใช้ Saga มาช่วย - มันจะช่วยลำดับ process ว่าอันไหนทำก่อน อันไหนทำหลัง 
2. Service worker - ช่วยเพิ่ม ถนน

# Cross platform
- สร้างอะไรที่ใช้ทั้ง Web และ App
- ใช้ React อยู่แล้ว ทำไมต้องเขียนทั้ง 2 ฝั่ง

Jitta
React / Next
React Native
GraphQL
Node / Python
Kubernate (Docker)

เริ่มจากสร้าง
UIKit กลางๆไว้ใช้ทั้ง Web และ App

** Primitives Technology
คือ Component ที่ง่ายๆพื้นฐานสุดๆเช่น <Text /> <Image /> <Button />

## Base component
1. List มันออกมา
*** Kobe UI Kit *** คือ UI Kit ที่ Jitta สร้าง

เจอปัญหาคือ Platform ต่างกัน
เช่น
View - Div
TextInput - Input

สุดท้ายเราก็ไปใช้ React Native for Web

Stying
1. React Native StyleSheet
2. Styled-Component
เอามาใช้โดยให้สิ่งนี้ช่วย
- Platform Extension
- Babel

